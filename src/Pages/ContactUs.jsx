import { useRef, useState, useEffect } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux';

const ContactUs = () => {
  const backendLink = useSelector((state) => state.prod.link);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showSubmissionLabel, setShowSubmissionLabel] = useState(false);
  const [submittedRequests, setSubmittedRequests] = useState([]);
  const [formData, setFormData] = useState({
    Contact_Details: {
      First_name: '',
      Last_name: '',
      Company: '',
      Email: '',
      Phone: ''
    },
    Address: {
      Street1: '',
      Street2: '',
      City: '',
      State: '',
      Zip: ''
    },
    Service_details: {
      PropertyType: '',
      Tree_Removal: false,
      Tree_Trimming: false,
      Palm_Trimming: false,
      Hurricane_Preparation: false,
      Root_Health: false,
      Tree_Maintenance_Planning: false,
      Job_Size: '',
      Job_Details: ''
    },
    Availability: {
      Day: '',
      Another_Day: '',
      Arrival_time: {
        Any_time: false,
        Morning: false,
        Afternoon: false
      }
    },
    Images: []
  })

  const fileInputRef = useRef(null);

  // Load submitted requests from localStorage on component mount
  useEffect(() => {
    const loadSubmittedRequests = () => {
      try {
        const saved = localStorage.getItem('submittedRequests');
        if (saved) {
          const requests = JSON.parse(saved);
          const now = new Date().getTime();
          
          // Filter out requests older than 2 days (48 hours = 48 * 60 * 60 * 1000 ms)
          const validRequests = requests.filter(request => {
            const requestTime = new Date(request.timestamp).getTime();
            const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;
            return (now - requestTime) < twoDaysInMs;
          });
          
          // Update localStorage with filtered requests
          if (validRequests.length !== requests.length) {
            localStorage.setItem('submittedRequests', JSON.stringify(validRequests));
          }
          
          setSubmittedRequests(validRequests);
        }
      } catch (error) {
        console.error('Error loading submitted requests:', error);
      }
    };

    loadSubmittedRequests();
    
    // Check every hour for expired requests
    const interval = setInterval(loadSubmittedRequests, 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (!droppedFiles.length) return;

    const imageFiles = droppedFiles.filter((file) => file.type.startsWith("image/"));

    setFormData((prev) => {
      const totalFiles = [...prev.Images, ...imageFiles];
      const limitedFiles = totalFiles.slice(0, 4); // Enforce 4-image limit
      return { ...prev, Images: limitedFiles };
    });
  };

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (type === "file") {
      const newFiles = Array.from(files);
      setFormData((prev) => {
        const totalFiles = [...prev.Images, ...newFiles];
        const limitedFiles = totalFiles.slice(0, 4); // limit to 4
        return {
          ...prev,
          Images: limitedFiles,
        };
      });
      return;
    }

    // Handle nested fields (same as before)
    const keys = name.split(".");
    if (keys.length === 2) {
      const [parent, child] = keys;
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === "checkbox" ? checked : value,
        },
      }));
    } else if (keys.length === 3) {
      const [parent, nested, key] = keys;
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [nested]: {
            ...prev[parent][nested],
            [key]: type === "checkbox" ? checked : value,
          },
        },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setShowSubmissionLabel(true);

    // Validate required fields
    if (!formData.Contact_Details.First_name.trim()) {
      setError("First name is required.");
      setSubmitting(false);
      setShowSubmissionLabel(false);
      return;
    }

    if (!formData.Contact_Details.Last_name.trim()) {
      setError("Last name is required.");
      setSubmitting(false);
      setShowSubmissionLabel(false);
      return;
    }

    if (!formData.Contact_Details.Email.trim()) {
      setError("Email is required.");
      setSubmitting(false);
      setShowSubmissionLabel(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.Contact_Details.Email)) {
      setError("Please enter a valid email address.");
      setSubmitting(false);
      setShowSubmissionLabel(false);
      return;
    }

    if (!formData.Contact_Details.Phone.trim()) {
      setError("Phone number is required.");
      setSubmitting(false);
      setShowSubmissionLabel(false);
      return;
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(formData.Contact_Details.Phone) || formData.Contact_Details.Phone.replace(/\D/g, '').length < 10) {
      setError("Please enter a valid phone number.");
      setSubmitting(false);
      setShowSubmissionLabel(false);
      return;
    }

    if (!formData.Service_details.PropertyType) {
      setError("Property type is required.");
      setSubmitting(false);
      setShowSubmissionLabel(false);
      return;
    }

    const services = formData.Service_details;
    const atLeastOneService = services.Tree_Removal ||
      services.Tree_Trimming ||
      services.Palm_Trimming ||
      services.Hurricane_Preparation ||
      services.Root_Health ||
      services.Tree_Maintenance_Planning;

    if (!atLeastOneService) {
      setError("Please select at least one service type.");
      setSubmitting(false);
      setShowSubmissionLabel(false);
      return;
    }
    try {
      const data = new FormData();

      data.append("Contact_Details", JSON.stringify(formData.Contact_Details));
      data.append("Address", JSON.stringify(formData.Address));
      data.append("Service_details", JSON.stringify(formData.Service_details));
      data.append("Availability", JSON.stringify(formData.Availability));
      data.append("Status", formData.Status || "Pending");

      formData.Images.forEach((file) => {
        data.append("Images", file);
      });

      const response = await axios.post(`${backendLink}/api/request/add-request`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        setFormData({
          Contact_Details: {
            First_name: '',
            Last_name: '',
            Company: '',
            Email: '',
            Phone: ''
          },
          Address: {
            Street1: '',
            Street2: '',
            City: '',
            State: '',
            Zip: ''
          },
          Service_details: {
            PropertyType: '',
            Tree_Removal: false,
            Tree_Trimming: false,
            Palm_Trimming: false,
            Hurricane_Preparation: false,
            Root_Health: false,
            Tree_Maintenance_Planning: false,
            Job_Size: '',
            Job_Details: ''
          },
          Availability: {
            Day: '',
            Another_Day: '',
            Arrival_time: {
              Any_time: false,
              Morning: false,
              Afternoon: false
            }
          },
          Images: []
        });
        setSuccess(true);
        setShowSubmissionLabel(false); // Hide submission label immediately on success
        
        // Save submitted request to localStorage
        const newRequest = {
          id: Date.now(),
          name: `${formData.Contact_Details.First_name} ${formData.Contact_Details.Last_name}`,
          service: Object.keys(formData.Service_details).filter(key => 
            formData.Service_details[key] === true && key !== 'PropertyType' && key !== 'Job_Size' && key !== 'Job_Details'
          ).join(', '),
          timestamp: new Date().toISOString()
        };
        
        const existingRequests = JSON.parse(localStorage.getItem('submittedRequests') || '[]');
        const updatedRequests = [...existingRequests, newRequest];
        localStorage.setItem('submittedRequests', JSON.stringify(updatedRequests));
        setSubmittedRequests(updatedRequests);
        
        setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      console.error("Error response:", error.response);
      
      // Provide more specific error messages
      if (error.response?.status === 400) {
        setError(error.response?.data?.message || "Please check your input and try again");
      } else if (error.response?.status === 500) {
        setError("Server error. Please try again later.");
      } else if (error.code === 'NETWORK_ERROR' || !error.response) {
        setError("Unable to connect to server. Please check your internet connection.");
      } else {
        setError(error.response?.data?.message || "Failed to submit request. Please try again.");
      }
    } finally {
      setSubmitting(false);
      // Hide submission label after 2 seconds
      setTimeout(() => {
        setShowSubmissionLabel(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full mb-12 h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Contact Info */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-green-800 mb-6">American Tree Experts Land</h1>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Evansville, IN
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Thetreexperts@gmail.com">Thetreexperts@gmail.com</a>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-600 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:812-457-3433">812-457-3433</a>
              </li>
            </ul>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Service Hours</h2>
              <div className="bg-gray-100 p-4 rounded-lg text-sm sm:text-base">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 3:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                {[
                  "Licensed and insured professionals",
                  "Free estimates and consultations",
                  "Emergency services available",
                  "Environmentally friendly practices",
                ].map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Requests Section */}
            {submittedRequests.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Recent Service Requests</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="space-y-3">
                    {submittedRequests.map((request, index) => (
                      <div key={request.id} className="bg-white rounded-md p-3 shadow-sm border border-green-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-green-800">{request.name}</p>
                            <p className="text-sm text-gray-600 capitalize">
                              {request.service.replace(/_/g, ' ').toLowerCase()}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">
                              {new Date(request.timestamp).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-green-600 font-medium">
                              Request Submitted
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Recent requests will be shown for 2 days
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-green-800 mb-2">New Request</h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {/* Submission Label at the top */}
            {showSubmissionLabel && (
              <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4 flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-700 mr-2"></div>
                Submitting your request...
              </div>
            )}
            
            {/* Error Message */}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}
            
            {/* Success Message */}
            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you! Your request has been submitted successfully. We will get back to you soon.
              </div>
            )}

            <form className="space-y-6 text-sm sm:text-base" onSubmit={handleSubmit}>
              {/* Contact Details */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["First_name", "Last_name"].map((field, i) => (
                    <div key={i}>
                      <label htmlFor={field} className="block text-gray-700 mb-1">
                        {field.replace("_", " ")}
                      </label>
                      <input
                        type="text"
                        id={field}
                        name={`Contact_Details.${field}`}
                        value={formData.Contact_Details[field]}
                        onChange={handleChange}
                        required
                        placeholder={field.replace("_", " ")}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-1">Company name (if applicable)</label>
                <input
                  type="text"
                  id="company"
                  name="Contact_Details.Company"
                  value={formData.Contact_Details.Company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="Contact_Details.Email"
                    value={formData.Contact_Details.Email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Phone number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="Contact_Details.Phone"
                    value={formData.Contact_Details.Phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="Street1" className="block text-gray-700 mb-1">Street 1</label>
                    <input id="Street1" type="text" name="Address.Street1" value={formData.Address.Street1} onChange={handleChange} placeholder='Street 1'
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                  </div>
                  <div>
                    <label htmlFor="Street2" className="block text-gray-700 mb-1">Street 2</label>
                    <input id="Street2" type="text" name="Address.Street2" value={formData.Address.Street2} onChange={handleChange} placeholder='Street 2'
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["City", "State", "Zip"].map((field, i) => (
                      <input key={i} type="text" name={`Address.${field}`} value={formData.Address[field]} onChange={handleChange} placeholder={field}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Service Details</h2>
                <label htmlFor="Service_details.PropertyType" className="block text-gray-700 mb-1">Property Type</label>
                <select id="Service_details.PropertyType" name="Service_details.PropertyType" value={formData.Service_details.PropertyType} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="">Choose an option</option>
                  <option value="Residential">Residential</option>
                  <option value="Estate or large residential">Estate or large residential (2 acres or larger)</option>
                  <option value="HOA Condo/Townhomes">HOA Condo/Townhomes</option>
                  <option value="Apartment complex">Apartment complex</option>
                  <option value="Mobile home Community">Mobile home Community</option>
                  <option value="Golf course">Golf course</option>
                  <option value="Propery Management">Propery Management</option>
                  <option value="Municipal">Municipal</option>
                  <option value="Church">Church</option>
                  <option value="Other">Other</option>
                </select>

                {/* Checkboxes */}
                <div className="mt-4 space-y-2">
                  <label htmlFor="serviceType" className="block text-gray-700 mb-1">Service Type</label>
                  <div className="flex items-center gap-2 ml-1.5">
                    <input type="checkbox" id={`Service_details.Tree_Removal`} name="Service_details.Tree_Removal" checked={formData.Service_details.Tree_Removal} onChange={handleChange} />
                    <label htmlFor={`Service_details.Tree_Removal`}>Tree Removal</label>
                  </div>
                  <div className="flex items-center gap-2 ml-1.5">
                    <input type="checkbox" id={`Service_details.Tree_Trimming`} name="Service_details.Tree_Trimming" checked={formData.Service_details.Tree_Trimming} onChange={handleChange} />
                    <label htmlFor={`Service_details.Tree_Trimming`}>Tree Trimming</label>
                  </div>
                  <div className="flex items-center gap-2 ml-1.5">
                    <input type="checkbox" id={`Service_details.Palm_Trimming`} name="Service_details.Palm_Trimming" checked={formData.Service_details.Palm_Trimming} onChange={handleChange} />
                    <label htmlFor={`Service_details.Palm_Trimming`}>Palm Trimming</label>
                  </div>
                  <div className="flex items-center gap-2 ml-1.5">
                    <input type="checkbox" id={`Service_details.Hurricane_Preparation`} name="Service_details.Hurricane_Preparation" checked={formData.Service_details.Hurricane_Preparation} onChange={handleChange} />
                    <label htmlFor={`Service_details.Hurricane_Preparation`}>Hurricane Preparation</label>
                  </div>
                  <div className="flex items-center gap-2 ml-1.5">
                    <input type="checkbox" id={`Service_details.Root_Health`} name="Service_details.Root_Health" checked={formData.Service_details.Root_Health} onChange={handleChange} />
                    <label htmlFor={`Service_details.Root_Health`}>Root Health/Management</label>
                  </div>
                  <div className="flex items-center gap-2 ml-1.5">
                    <input type="checkbox" id={`Service_details.Tree_Maintenance_Planning`} name="Service_details.Tree_Maintenance_Planning" checked={formData.Service_details.Tree_Maintenance_Planning} onChange={handleChange} />
                    <label htmlFor={`Service_details.Tree_Maintenance_Planning`}>Commercial or Estate Tree Maintenance Planning</label>
                  </div>
                </div>

                {/* Job Size */}
                <div className="mt-4">
                  <label htmlFor="Service_details.Job_Size" className="block text-gray-700 mb-1">Approximate Job Size (optional)</label>
                  <select id="Service_details.Job_Size" name="Service_details.Job_Size" value={formData.Service_details.Job_Size} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600">
                    <option value="">Choose an option</option>
                    <option value="Small">Small - Less than 10 palm trees or 2 small to medium size trees to be trimmed</option>
                    <option value="Medium">Medium - 3-5 medium/large trims or 1 medium size removal</option>
                    <option value="Large">Large - 6+ medium/large trims or 2 medium/large removals</option>
                  </select>
                </div>

                {/* Details */}
                <div className="mt-4">
                  <label htmlFor="Service_details.Job_Details" className="block text-gray-700 mb-1">Additional Details (optional)</label>
                  <textarea id="Service_details.Job_Details" name="Service_details.Job_Details" value={formData.Service_details.Job_Details} onChange={handleChange} placeholder="Enter details" rows="3"
                    className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Availability</h2>
                <label htmlFor="Availability.Day" className="block text-gray-700 mb-1">Best day for assessment (optional)</label>
                <input type="date" name="Availability.Day" value={formData.Availability.Day} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />

                <label htmlFor="Availability.Another_Day" className="block text-gray-700 mb-1 mt-4">Alternate day (optional)</label>
                <input type="date" name="Availability.Another_Day" value={formData.Availability.Another_Day} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />

                <label className="block text-gray-700 mb-1 mt-4">Preferred arrival times (optional)</label>
                <div className="space-y-2 mt-2">
                  {["Any_time", "Morning", "Afternoon"].map((time, i) => (
                    <div className="flex items-center gap-2 ml-1.5" key={i}>
                      <input
                        type="checkbox"
                        id={`Availability.Arrival_time.${time}`}
                        name={`Availability.Arrival_time.${time}`}
                        checked={formData.Availability.Arrival_time[time]}
                        onChange={handleChange}
                      />
                      <label htmlFor={`Availability.Arrival_time.${time}`}>{time.replace("_", " ")}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upload Section */}
              <div>
                <h3 className="font-medium text-gray-700 mb-1">Upload images</h3>
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className={`mt-1 flex justify-center px-6 pt-5 pb-6 max-w-full md:max-w-[500px] mx-auto border-2 border-dashed rounded-md transition ${formData.Images.length >= 4 ? "opacity-50 pointer-events-none" : "hover:border-green-500"
                    }`}
                >
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 justify-center">
                      <label htmlFor="Images" className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500">
                        <span>Upload a file</span>
                        <input
                          id="Images"
                          name="Images"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleChange}
                          className="sr-only"
                          disabled={formData.Images.length >= 4}
                          ref={(ref) => (fileInputRef.current = ref)}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    {formData.Images.length > 0 && (
                      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {formData.Images.map((file, idx) => (
                          <div key={idx} className="relative w-full h-32 overflow-hidden border rounded-md">
                            <button
                              type="button"
                              onClick={() => {
                                setFormData((prev) => {
                                  const updatedImages = prev.Images.filter((_, i) => i !== idx);
                                  return { ...prev, Images: updatedImages };
                                });
                              }}
                              className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition"
                            >
                              &times;
                            </button>
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Upload ${idx}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Submit */}
              <div className="flex justify-self-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${submitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {submitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
