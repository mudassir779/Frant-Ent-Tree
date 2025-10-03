import { useRef, useState } from "react";
import axios from 'axios';
import { useSelector } from 'react-redux';

const ContactUs = () => {
  const backendLink = useSelector((state) => state.prod.link);
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

    const services = formData.Service_details;
    const atLeastOneService = services.Tree_Removal ||
      services.Tree_Trimming ||
      services.Palm_Trimming ||
      services.Hurricane_Preparation ||
      services.Root_Health ||
      services.Tree_Maintenance_Planning;

    if (!atLeastOneService) {
      alert("Please select at least one service.");
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
        alert('Form submitted successfully');
      }

    } catch (error) {
      alert("Failed to Submit form", error.message);
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
          </div>

          {/* Form */}
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-green-800 mb-2">New Request</h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

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
                  className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Submit Request
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
