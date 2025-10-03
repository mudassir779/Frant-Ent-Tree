import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { 
  FiZoomIn, 
  FiChevronLeft, 
  FiChevronRight, 
  FiX, 
  FiInfo, 
  FiMail, 
  FiCalendar, 
  FiUser, 
  FiArrowLeft,
  FiPhone,
  FiMapPin
} from 'react-icons/fi';

const JobRequests = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const backendLink = useSelector((state) => state.prod.link);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Status configuration
  const statusConfig = {
    pending: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      border: 'border-yellow-200',
      button: 'bg-yellow-500 hover:bg-yellow-600'
    },
    'in-progress': {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      border: 'border-blue-200',
      button: 'bg-blue-500 hover:bg-blue-600'
    },
    completed: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      border: 'border-green-200',
      button: 'bg-green-500 hover:bg-green-600'
    }
  };

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${backendLink}/api/request/get-requests`);
        const formattedJobs = data.requests.map((req) => ({
          id: req._id,
          title: req.Service_details?.PropertyType || 'Unknown Service',
          client: `${req.Contact_Details.First_name} ${req.Contact_Details.Last_name}`,
          phone: req.Contact_Details.Phone,
          email: req.Contact_Details.Email,
          status: req.Status.toLowerCase().replace('_', '-'),
          date: new Date(req.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          description: req.Service_details.Job_Details || 'No details provided.',
          images: req.Images.map(img => `${backendLink}/${img}`),
          address: req.Service_details?.Address || 'Not specified'
        }));
        setJobs(formattedJobs);
        if (formattedJobs.length > 0) {
          setSelectedJob(formattedJobs[0]);
        }
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [backendLink]);

  // Lightbox controls
  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const prevImage = () => setCurrentImageIndex(prev => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
  const nextImage = () => setCurrentImageIndex(prev => (prev === lightboxImages.length - 1 ? 0 : prev + 1));

  // Filter jobs based on status
  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.status === filter);

  // Update job status
  const updateStatus = async (id, newStatus) => {
    const statusMap = {
      'pending': 'Pending',
      'in-progress': 'In-Progress',
      'completed': 'Completed'
    };

    try {
      await axios.put(`${backendLink}/api/request/update-request/${id}`, {
        Status: statusMap[newStatus]
      });

      const updatedJobs = jobs.map(job =>
        job.id === id ? { ...job, status: newStatus } : job
      );
      setJobs(updatedJobs);

      if (selectedJob?.id === id) {
        setSelectedJob(prev => ({ ...prev, status: newStatus }));
      }
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('Failed to update job status. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with back button */}
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to Dashboard
        </button>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Job Requests Management</h1>
            <p className="text-gray-600 mt-1">View and manage all service requests</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {['all', 'pending', 'in-progress', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-md text-sm font-medium text-white transition-colors ${
                  filter === status
                    ? status === 'all' 
                      ? 'bg-gray-700 hover:bg-gray-800'
                      : statusConfig[status].button
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {status === 'all' ? 'All Jobs' : status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Job List Sidebar */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-700">Job List ({filteredJobs.length})</h2>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 220px)' }}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-colors ${
                    selectedJob?.id === job.id 
                      ? 'bg-blue-50 border-l-4 border-l-blue-500' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800 truncate">{job.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                        statusConfig[job.status].bg
                      } ${statusConfig[job.status].text}`}
                    >
                      {job.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 truncate">{job.client}</p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center">
                    <FiCalendar className="mr-1" size={12} />
                    {job.date}
                  </p>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                <p>No jobs found matching your criteria</p>
              </div>
            )}
          </div>
        </div>

        {/* Job Details Panel */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          {selectedJob ? (
            <>
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="font-semibold text-gray-700">Job Details</h2>
                  <div className="flex flex-wrap gap-2">
                    {['pending', 'in-progress', 'completed'].map(
                      (status) =>
                        selectedJob.status !== status && (
                          <button
                            key={status}
                            onClick={() => updateStatus(selectedJob.id, status)}
                            className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                              statusConfig[status].bg
                            } ${statusConfig[status].text} ${
                              statusConfig[status].border
                            } border hover:opacity-90`}
                          >
                            Mark as {status.replace('-', ' ')}
                          </button>
                        )
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-gray-800">{selectedJob.title}</h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          statusConfig[selectedJob.status].bg
                        } ${statusConfig[selectedJob.status].text}`}
                      >
                        {selectedJob.status.replace('-', ' ')}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <FiCalendar className="mr-1" size={14} />
                        {selectedJob.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Client Information Card */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="text-sm font-medium text-gray-500 mb-3 flex items-center">
                      <FiUser className="mr-2" />
                      Client Information
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Full Name</p>
                        <p className="font-medium">{selectedJob.client}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Email</p>
                        <p className="text-gray-600 flex items-center">
                          <FiMail className="mr-2" size={14} />
                          {selectedJob.email}
                        </p>
                      </div>
                      {selectedJob.phone && (
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Phone</p>
                          <p className="text-gray-600 flex items-center">
                            <FiPhone className="mr-2" size={14} />
                            {selectedJob.phone}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Service Details Card */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="text-sm font-medium text-gray-500 mb-3 flex items-center">
                      <FiMapPin className="mr-2" />
                      Service Details
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Service Address</p>
                        <p className="text-gray-600">{selectedJob.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Description Card */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-3 flex items-center">
                    <FiInfo className="mr-2" />
                    Job Description
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 whitespace-pre-line">{selectedJob.description}</p>
                  </div>
                </div>

                {/* Uploaded Images */}
                {selectedJob.images?.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Uploaded Images ({selectedJob.images.length})</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {selectedJob.images.map((imgUrl, index) => (
                        <div
                          key={index}
                          className="relative group aspect-square rounded-lg overflow-hidden border border-gray-200 cursor-pointer transition-all hover:shadow-md hover:border-blue-200"
                          onClick={() => openLightbox(selectedJob.images, index)}
                        >
                          <img
                            src={imgUrl}
                            alt={`Job reference ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                            <FiZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-2xl" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <div className="bg-gray-100 p-6 rounded-full mb-4">
                <FiInfo className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-1">No Job Selected</h3>
              <p className="text-gray-500 max-w-md">
                Select a job from the list to view detailed information and manage the request.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox} 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Close lightbox"
          >
            <FiX size={28} />
          </button>
          
          <button 
            onClick={prevImage} 
            className="absolute left-6 text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Previous image"
          >
            <FiChevronLeft size={32} />
          </button>
          
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={lightboxImages[currentImageIndex]}
              alt={`Job reference ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
              {currentImageIndex + 1} of {lightboxImages.length}
            </div>
          </div>
          
          <button 
            onClick={nextImage} 
            className="absolute right-6 text-white hover:text-gray-300 transition-colors p-2"
            aria-label="Next image"
          >
            <FiChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default JobRequests;