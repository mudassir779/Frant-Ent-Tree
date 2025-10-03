import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const SiteMap = () => {
    const Pages = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Photo Gallery", path: "/photo-gallery" },
        { name: "Blogs", path: "/blogs" },
        { name: "Sitemap", path: "/sitemap" },
        { name: "Services", path: "/services" },
        { name: "Service Areas", path: "/service-areas", subPages: [
            { name: "Evansville", path: "/service-areas/tree-service-evansville-in" },
            { name: "Newburgh", path: "/service-areas/tree-service-newburgh-in" },
            { name: "Boonville", path: "/service-areas/tree-service-boonville-in" },
            { name: "Henderson", path: "/service-areas/tree-service-henderson-ky" },
            { name: "Warrick County", path: "/service-areas/tree-service-warrick-county-in" },
        ]},
        { name: "Tree Removal", path: "/services/tree-removal" },
        { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning" },
        { name: "Land Clearing", path: "/services/land-clearing" },
        { name: "Storm Clean Up", path: "/services/storm-clean-up" },
        { name: "Commercial Tree Services", path: "/services/commercial-tree-services" },
    ];

    const backendLink = useSelector((state) => state.prod.link);
    const [blogPosts, setBlogPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getBlogPosts = async () => {
        try {
            const response = await axios.get(`${backendLink}/api/blog/get-blogs`);
            setBlogPosts(response.data.blog);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
            setBlogPosts([]);
        }
    };

    const getCategory = async () => {
        try {
            const response = await axios.get(`${backendLink}/api/category/get-category`);
            setCategories(response.data.category);
        } catch (error) {
            console.error("Error fetching categories:", error);
            setCategories([]);
        }
    };

    useEffect(() => {
        getBlogPosts();
        getCategory();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-6 font-sans">
            <section className="bg-black text-white p-8 text-center">
                <h1 className="text-4xl font-bold">Sitemap</h1>
            </section>
            <div className="my-6">
                <h2 className="text-2xl font-semibold border-b-2 border-black pb-2">Posts</h2>
                <ul className="list-disc list-inside">
                    {blogPosts.slice(0, 5).map((post) => (
                        <li key={post._id} className="my-2">
                            <a href={`/blog/${post._id}`} className="text-black hover:text-gray-700 transition duration-300">{post.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-semibold border-b-2 border-black pb-2">Pages</h2>
                <ul className="list-disc list-inside">
                    {Pages.map((page, index) => (
                        <li key={index} className="my-2">
                            <a href={page.path} className="text-black hover:text-gray-700 transition duration-300">{page.name}</a>
                            {page.subPages && (
                                <ul className="list-inside list-disc ml-5">
                                    {page.subPages.map((subPage, subIndex) => (
                                        <li key={subIndex} className="my-1">
                                            <a href={subPage.path} className="text-black hover:text-gray-700 transition duration-300">{subPage.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-semibold border-b-2 border-black pb-2">Categories</h2>
                <ul className="list-disc list-inside">
                    {categories.map((category, index) => (
                        <li key={index} className="my-2">
                            <a href={`/category/${category._id}`} className="text-black hover:text-gray-700 transition duration-300">{category.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SiteMap;