import { useState, useEffect } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaCalendarAlt, FaPhone, FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogDescription = () => {
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);
  const backendLink = useSelector((state) => state.prod.link);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const getDescriptionById = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backendLink}/api/blog/get-description/${id}`);
      setDescription(response.data.blog);
    } catch (err) {
      console.error("Error fetching blog description:", err);
    } finally {
      setLoading(false);
    }
  };

  const getRecentPosts = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/blog/get-blogs`);
      setRecentPosts(response.data.blog);
    } catch (error) {
      console.error("Error fetching recent posts:", error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/category/get-category`);
      setCategories(response.data.category);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getDescriptionById();
    getRecentPosts();
    getCategories();
  }, [id]);

  // Function to format the description content with proper HTML structure
  const formatDescription = (content) => {
    if (!content) return "";

    // Convert newlines to paragraphs
    let formatted = content.replace(/\n\n/g, "</p><p>");
    
    // Convert bold text (surrounded by **) to strong tags
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    
    // Convert headings (lines that end with :)
    formatted = formatted.replace(/([^\n]+:)\n/g, "<h3 class='text-xl font-bold mt-6 mb-3'>$1</h3>");
    
    // Wrap the whole content in paragraphs
    return `<p>${formatted}</p>`;
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section */}
      <section className="relative w-full mb-8 sm:mb-12">
        <div className="h-48 sm:h-60 md:h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 uppercase">
              {loading ? <Skeleton width={300} /> : description?.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <IoIosArrowForward className="text-gray-400 mx-1" />
                <Link
                  to="/blog"
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-green-600 md:ml-2"
                >
                  Blog
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <IoIosArrowForward className="text-gray-400 mx-1" />
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  {loading ? <Skeleton width={150} /> : description?.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {loading ? (
              <div className="space-y-6">
                <Skeleton height={400} className="rounded-lg" />
                <Skeleton count={4} />
                <Skeleton width="70%" />
              </div>
            ) : description ? (
              <article className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={`${backendLink}/${description.image}`}
                  alt={description.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>
                      Posted on: {new Date(description.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    {description.category && (
                      <span className="ml-4">
                        Category: {description.category.title}
                      </span>
                    )}
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {description.title}
                  </h1>
                  <div className="prose max-w-none text-gray-700 mb-6">
                    <p className="text-lg leading-relaxed">{description.content}</p>
                  </div>
                  <div
                    className="prose max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ 
                      __html: formatDescription(description.description) 
                    }}
                  />
                </div>
              </article>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-800">Blog post not found</h2>
                <p className="text-gray-600 mt-2">The requested blog post could not be loaded.</p>
                <Link
                  to="/blog"
                  className="mt-4 inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Back to Blog
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Contact Card */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">Contact Us Today!</h3>
                <div className="flex items-center justify-center">
                  <FaPhone className="text-white mr-2" />
                  <a
                    href="tel:812-457-3433"
                    className="text-2xl font-bold text-white hover:text-gray-200 transition-colors"
                  >
                    812-457-3433
                  </a>
                </div>
                <p className="text-green-100 mt-3">We're here to answer your questions</p>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-600 px-5 py-3">
                <h3 className="text-lg font-bold text-white">Recent Posts</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {recentPosts.slice(0, 5).map((item, key) => (
                    <div
                      key={key}
                      className={`flex items-center px-3 font-semibold rounded transition text-green-700 hover:cursor-pointer hover:bg-green-100 hover:text-green-600`}
                      onClick={() => navigate(`/blog/${item.slug}`)}
                    >
                      <FaArrowRight className="mr-2 text-green-600 flex-shrink-0" />
                      <span className="font-medium line-clamp-2">{item.title}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-600 px-5 py-3">
                <h3 className="text-lg font-bold text-white">Categories</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`/category/${category.slug}`}
                        className={`flex items-center px-3 py-2 rounded-md transition ${location.pathname === `/category/${category.slug}`
                          ? "bg-green-50 text-green-700"
                          : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                          }`}
                      >
                        <IoIosArrowForward className="mr-2 text-green-600 flex-shrink-0" />
                        <span className="font-medium">{category.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;