import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useSelector } from "react-redux";
import AddTestimonialForm from "../components/AddTestimonialForm";

const Testimonials = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState({ show: false, id: null, name: "" });
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${backendLink}/api/testimonials/get-testimonials`);
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, [backendLink]);

  const handleNewTestimonial = (newTestimonial) => {
    setTestimonials([newTestimonial, ...testimonials]);
  };

  const handleDeleteClick = (id, name) => {
    setDeleteConfirm({ show: true, id, name });
  };

  const handleDeleteConfirm = async () => {
    if (password !== "12345") {
      setPasswordError("Incorrect password. Only the owner can delete testimonials.");
      return;
    }
    
    try {
      await axios.delete(`${backendLink}/api/testimonials/delete-testimonial/${deleteConfirm.id}`);
      setTestimonials(testimonials.filter(t => t._id !== deleteConfirm.id));
      setDeleteConfirm({ show: false, id: null, name: "" });
      setPassword("");
      setPasswordError("");
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      alert("Failed to delete testimonial. Please try again.");
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirm({ show: false, id: null, name: "" });
    setPassword("");
    setPasswordError("");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-green-400 rounded-full"></div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4 font-serif">
            Customer Experiences
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by homeowners and businesses across our community
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence>
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                layout
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  onDelete={handleDeleteClick}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Testimonial Submission Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto"
        >
          <div className="md:flex">
            <div className="md:w-1/2 bg-green-600 p-8 text-white flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
              <p className="mb-6 opacity-90">
                Your feedback helps us grow and serve you better. We appreciate every review!
              </p>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-300 text-xl" />
                ))}
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <AddTestimonialForm onTestimonialSubmit={handleNewTestimonial} />
            </div>
          </div>
        </motion.div>

        {/* Delete Confirmation Dialog */}
        {deleteConfirm.show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-6 max-w-md mx-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Delete Testimonial
              </h3>
              <p className="text-gray-600 mb-4">
                Are you sure you want to delete the testimonial by <strong>{deleteConfirm.name}</strong>? 
                This action cannot be undone.
              </p>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter Owner Password:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter password"
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>
              
              <div className="flex space-x-3 justify-end">
                <button
                  onClick={handleDeleteCancel}
                  className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, onDelete }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 group">
    <div className="p-6 flex-grow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-lg ${i < testimonial.rating ? "text-yellow-400" : "text-gray-200"}`}
            />
          ))}
        </div>
        <button
          onClick={() => onDelete(testimonial._id, testimonial.name)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full"
          title="Delete testimonial"
        >
          <FaTrash className="text-sm" />
        </button>
      </div>
      
      <div className="relative mb-6">
        <FaQuoteLeft className="text-green-100 text-4xl absolute -top-2 -left-1" />
        <p className="text-gray-700 relative z-10 pl-8 text-justify">
          {testimonial.content}
        </p>
      </div>
    </div>
    
    <div className="px-6 pb-6 pt-4 bg-gray-50 border-t border-gray-100">
      <div className="flex items-center">
        <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-500">
            {new Date(testimonial.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;