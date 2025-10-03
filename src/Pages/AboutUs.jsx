import React from 'react';

const AboutUs = () => {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className="relative w-full mb-8 md:mb-12">
        <div className="h-60 sm:h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row mt-8 md:mt-10 justify-between">
          {/* Text Content */}
          <div className="w-full lg:w-8/12 mb-6 lg:mr-4 lg:pr-5 text-justify">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">A FAMILY BUSINESS OF ETHICAL VALUES & EXPERIENCE:</h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              American Tree Experts Land has been serving the Warrick County area for many years.
              We are a family-owned and operated business that is passionate about providing
              our customers with superior tree care services including removal, pruning,
              fertilization, consulting, and more. Our team of certified arborists is committed
              to providing a high-quality experience that meets or exceeds all of your expectations.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">OUR MISSION</h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              At American Tree Experts Land, our mission is to cultivate a team of high-performing
              professionals and create an environment that focuses on positive attitudes
              and shares this positive energy with our clients. We are dedicated to servicing
              our clients and their trees to the highest standards.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">OUR VALUES</h2>
            <p className="text-sm sm:text-base">
              Safety, Honesty, and Professionalism are not just catchwords that we say—they're
              values that we live by each day. From our office staff to our field crew, these
              values are embraced in everything we do. We strive to provide quality tree care
              services and to ensure customer satisfaction on every project.
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full lg:flex-1 mb-8 lg:mb-0 order-1 lg:order-2">
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md group shadow-lg shadow-black">
                <div className="absolute w-full h-full top-3 sm:top-4 -left-3 sm:-left-4 bg-[#afb593] z-0"></div>
                <img
                  src="/4.jpg"
                  alt="Professional tree service"
                  title="Professional tree service"
                  className="relative w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500 z-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-8 md:mt-10 mb-10 md:mb-15">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">WHY CHOOSE US</h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">
            Our customers are at the heart of what we do. We have a team of arborists who are experienced in handling any and all types of tree care jobs, big or small. We take great pride in providing 5-star customer service and guarantee that you'll be satisfied with your decision of working with us. Additionally, all of our services are licensed, bonded, and insured for your peace of mind.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">COMMITMENT TO QUALITY</h2>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">
            At American Tree Experts, we're committed to quality and excellence in everything we do. We use the most innovative tools and techniques to ensure that your trees are healthy, vibrant, and safe. We guarantee a job well done on every project, so you can rest assured that your trees will be taken care of by professionals who know what they're doing. Adhering to the ANSI A300 standard, American Tree Experts is dedicated to providing industry-leading tree care services tailored to meet your individual needs. We are committed to creating a safe and healthy environment for you and your trees.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Get Professional Tree Care Services - Trust American Tree Experts.</h2>
          <p className="text-sm sm:text-base">
            We understand that taking care of your trees can be a daunting task. That's why we're here. We can handle any job for you so you can focus on other things. From tree pruning to removal, our team is equipped to tackle any project with professionalism and ease. From our friendly office staff to our professionals who complete the job, we guarantee a 5-star service experience. Contact us at
            {" "}
            <a href="tel:812-457-3433" className="text-[#245b3c] hover:underline font-medium">
              812-457-3433
            </a>
            {" "}
            to learn more about how we can help you care for your trees.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;