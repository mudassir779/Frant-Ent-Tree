import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CategoryBlogs = () => {
  const navigate = useNavigate();
  const backendLink = useSelector((state) => state.prod.link);
  const [categoryPosts, setCategoryPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentPost, SetrecentPost] = useState([]);
  const { id } = useParams();

  const getCategoryPosts = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/category/get-category/${id}`);
      setCategoryPosts(response.data.category.blogs);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      setCategoryPosts([]);
    }
  };

  const getRecentPosts = async () => {
    try {
      const response = await axios.get(`${backendLink}/api/blog/get-blogs`);
      SetrecentPost(response.data.blog);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      SetrecentPost([]);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get(
        `${backendLink}/api/category/get-category`
      );
      setCategories(response.data.category);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    getCategoryPosts();
    getCategory();
    getRecentPosts();
  }, []);

  return (
    // <div className="max-w-4xl mx-auto px-4 py-8">
    <div className="w-full mb-20">
      {/* Main Content Container with side margins */}
      <div className="w-10/12 mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {id.toUpperCase().replace(/-/g, " ")}
            </h1>

            <div className="space-y-12">
              {categoryPosts &&
                categoryPosts.map((post) => (
                  <article
                    key={post._id}
                    className="border-b border-gray-200 pb-8 last:border-0 last:pb-0"
                  >
                    <div
                      className="mb-6 overflow-hidden"
                      onClick={() => navigate(`/blog/${post.slug}`)}
                    >
                      <img
                        src={backendLink + "/" + post.image}
                        alt={post.title}
                        className="w-full h-auto object-cover transition-transform duration-300 hover:cursor-pointer hover:scale-105"
                      />
                    </div>

                    <h2
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      className="text-2xl font-semibold text-gray-800 mb-2 hover:cursor-pointer hover:text-green-600 transition-colors"
                    >
                      {post.title}
                    </h2>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>{post.dated.split('T')[0]}</span>
                      <span className="mx-2">|</span>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-600 hover:bg-green-100 hover:text-green-700 transition-colors">
                          {post.category.title}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-gray-600 mb-4 leading-relaxed">
                      {post.description.slice(0, 150)}...
                    </h2>
                  </article>
                ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="pt-10 ml-10 lg:w-1/4 lg-h-full space-y-6">
            <div className="bg-white shadow-md shadow-[#0000004d] overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className="text-md md:text-lg font-bold text-white text-center px-4">
                    Contact Us Today for More Info!
                  </h1>
                  <a
                    href="tel:812-457-3433"
                    className="text-white text-xl md:text-3xl font-bold mb-4"
                  >
                    812-457-3433
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-md font-bold bg-[#1e4d32] w-full text-white mb-4 px-5 py-2">
                Recent Posts
              </h3>
              <ul className="space-y-2">
                {/* recent post */}
                {recentPost &&
                  recentPost.slice(0, 5).map((item, key) => (
                    <div
                      key={key}
                      className={`block px-3 font-semibold rounded transition text-green-700 hover:cursor-pointer hover:bg-green-100 hover:text-green-600`}
                      onClick={() => navigate(`/blog/${item.slug}`)}
                    >
                      {item.title}
                    </div>
                  ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-md font-bold bg-[#1e4d32] w-full text-white mb-4 px-5 py-2">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href={`/category/${category.slug}`}
                      className={`block px-3 font-semibold rounded transition ${location.pathname === `/category/${category.slug}`
                        ? "bg-green-100 text-green-700 font-medium"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                        }`}
                    >
                      {category.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBlogs;
