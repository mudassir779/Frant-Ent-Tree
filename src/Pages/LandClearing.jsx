import React from "react";

const services = [
  { name: "Tree Removal", path: "/services/tree-removal/" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning/" },
  { name: "Structural Pruning", path: "/services/structural-pruning/" },
  { name: "Land Clearing", path: "/services/land-clearing/" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up/" },
  { name: "Commercial Tree Services", path: "/services/commercial-tree-services/" },
];

const LandClearing = () => { 
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full mb-8 md:mb-12">
        <div className="h-64 md:h-80 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 uppercase">
              Land Clearing
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 md:pt-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
              Providing Professional Tree Services in Evansville, IN
            </h1>

            <p className="text-md font-bold text-gray-700 mb-6">
              Trust American Tree Experts Land for Tree removal and land clearing services
              in Evansville, INorida. With 20 years of experience and
              expertise in delivering quality tree care, you can trust us to get
              the job done quickly and safely. Call us at{" "}
              <a href="tel:812-457-3433" className="text-[#245b3c] hover:underline">
                812-457-3433
              </a>{" "}
              for a free quote.
            </p>

            <p className="text-gray-600 mb-6 md:mb-8">
              The process of preparing your land for construction or home
              improvement projects can be a difficult, hazardous job. By getting
              expert help from American Tree Experts Land with plantation disposal, stump
              grinding, and tree removal service, you'll have the assurance that
              it will be done correctly and securely.
            </p>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-[#245b3c] p-6 md:p-8 flex-1 flex items-center">
                <p className="text-white font-bold text-base md:text-lg">
                  Safety is the cornerstone of our business. We are proud to have
                  top-notch equipment, certified arborists, and an experienced
                  team on hand to ensure that your land-clearing project runs
                  smoothly from start to finish
                </p>
              </div>
              <div className="flex-1">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  src="/Land-Clearing-Warrenton-VA-_-Fraziers-Tree-Experts-1.jpg" 
                  alt="land-clearing" 
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                Experienced Land Clearing Services, Evansville, IN
              </h1>
              <p className="mb-4">
                Land clearing is the process of removing trees, stumps, rocks, and
                other debris from a site to prepare it for construction or
                landscaping. It can also be used to remove invasive species that
                are damaging native plants found in your area. It is important to
                have the land cleared properly to avoid any issues during the
                building process or with your existing plants.
              </p>
              <div className="my-6 md:my-10 h-48 md:h-64">
                <img 
                  loading="lazy"
                  decoding="async" 
                  src="/20190502_113653-scaled.jpg" 
                  alt="Commercial Tree Services" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <p className="mb-4">
                Land clearing is also important because it helps to improve the
                aesthetics of your site. We use our expertise in tree removal and
                landscaping to help you create a vision for the perfect outdoor
                space, with plenty of room for trees and greenery that accentuate
                the area's natural beauty.
              </p>
              <div className="w-full h-64 md:h-96 mt-6 md:mt-8 overflow-hidden rounded">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100613.45388092705!2d-87.69936316810865!3d37.996484913892644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8871d5133156772d%3A0xb52e4939112ac99d!2sEvansville%2C%20IN!5e0!3m2!1sen!2sus!4v1753881151623!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side - Sidebar */}
          <div className="pt-6 lg:pt-10 lg:w-1/3 lg:pl-8 space-y-6">
            <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <div className="relative h-48 md:h-60 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h1 className="text-md md:text-lg font-bold text-white text-center">
                    Contact Us Today for More Info!
                  </h1>
                  <a href="tel:812-457-3433" className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 hover:underline">
                    812-457-3433
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <h3 className="text-md font-bold bg-[#1e4d32] w-full text-white px-5 py-3">
                Our Services
              </h3>
              <ul className="space-y-1 p-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.path}
                      className={`block px-3 py-2 rounded transition ${location.pathname === service.path
                        ? "bg-green-100 text-green-700 font-medium"
                        : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                        }`}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services Offered Section */}
      <div className="w-full bg-gradient-to-b from-[#f8faec] to-[#bcc49b] py-12 md:py-20 mt-8 md:mt-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <p className="text-center text-[#245B3C] text-base md:text-lg font-bold uppercase">
            Types
          </p>
          <h1 className="text-center text-2xl md:text-4xl font-bold">
            Land Clearing Services Offered
          </h1>
          <div className="flex justify-center my-4 md:my-5">
            <img loading="lazy" decoding="async" src="/divider.png" alt="divider" className="h-3 md:h-4" />
          </div>
          <p className="text-center max-w-4xl mx-auto font-semibold text-sm md:text-base">
            American Tree Experts Land offers a comprehensive suite of land clearing
            solutions tailored for residential and commercial properties in
            Evansville, INorida. Our expert services include tree removal,
            stump grinding, tree trimming, storm damage cleanup, and ongoing
            landscape maintenance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {/* Tree Removal */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
              <img 
                loading="lazy" 
                decoding="async" 
                src="/tree-removal.jpg" 
                alt="tree-removal" 
                className="w-full h-48 md:h-60 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center">
                  Tree Removal
                </h3>
                <p className="text-center text-gray-700 text-sm md:text-base mt-3 md:mt-4">
                  Our certified arborists perform safe and precise tree removals
                  using industry-best practices. We handle hazardous trees
                  efficiently and minimize impact on the surrounding environment.
                </p>
                <p className="text-center text-gray-700 text-sm md:text-base mt-2 md:mt-3 mb-4 md:mb-6">
                  Utilizing specialized equipment and techniques, we swiftly
                  remove trees, stumps, branches, and roots to keep your property
                  safe and clean.
                </p>
              </div>
            </div>

            {/* Bush Hogging */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
              <img 
                loading="lazy" 
                decoding="async" 
                src="/land-clearing.jpg" 
                alt="Bush hogging service" 
                className="w-full h-48 md:h-60 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center">
                  Bush Hogging
                </h3>
                <p className="text-center text-gray-700 text-sm md:text-base mt-3 md:mt-4">
                  With advanced bush hogging equipment, we clear dense vegetation,
                  including small trees and shrubs, quickly and efficiently.
                </p>
                <p className="text-center text-gray-700 text-sm md:text-base mt-2 md:mt-3 mb-4 md:mb-6">
                  This creates clear, accessible land perfect for construction or
                  landscaping, while preserving your property's natural integrity.
                </p>
              </div>
            </div>

            {/* Rock Excavation */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
              <img 
                loading="lazy" 
                decoding="async" 
                src="/2.jpg" 
                alt="rock-excavation" 
                className="w-full h-48 md:h-60 object-bottom object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center">
                  Rock Excavation
                </h3>
                <p className="text-center text-gray-700 text-sm md:text-base mt-3 md:mt-4">
                  We remove large rocks and debris through professional excavation
                  and grading, preparing your land for building or landscaping.
                </p>
                <p className="text-center text-gray-700 text-sm md:text-base mt-2 md:mt-3 mb-4 md:mb-6">
                  Our skilled operators use specialized machinery to deliver
                  precise leveling while maintaining strict safety standards.
                </p>
              </div>
            </div>
          </div>

          {/* Last two boxes centered */}
          <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-10 mt-8 md:mt-10">
            {/* Plantation Disposal */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 w-full lg:w-1/2 max-w-md border border-gray-100 overflow-hidden">
              <img 
                loading="lazy" 
                decoding="async" 
                src="/storm-cleanup.jpg" 
                alt="Plantation disposal service" 
                className="w-full h-48 md:h-60 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center">
                  Plantation Disposal
                </h3>
                <p className="text-center text-gray-700 text-sm md:text-base mt-3 md:mt-4">
                  Plantation disposal requires expertise and care. Our team
                  ensures comprehensive removal and eco-conscious disposal of all
                  vegetation debris.
                </p>
                <p className="text-center text-gray-700 text-sm md:text-base mt-2 md:mt-3 mb-4 md:mb-6">
                  We leave your property clean and prepared for its next phase of
                  use, adhering to environmentally responsible practices.
                </p>
              </div>
            </div>

            {/* Stump Grinding & Mulch Production */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 w-full lg:w-1/2 max-w-md border border-gray-100 overflow-hidden">
              <img 
                loading="lazy" 
                decoding="async" 
                src="/mulch.jpg" 
                alt="commercial-tree-services" 
                className="w-full h-48 md:h-60 object-cover"
              />
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-center">
                  Stump Grinding & Mulch Production
                </h3>
                <p className="text-center text-gray-700 text-sm md:text-base mt-3 md:mt-4">
                  We safely grind stumps to eliminate hazards and prevent
                  regrowth, converting woody debris into nutrient-rich mulch.
                </p>
                <p className="text-center text-gray-700 text-sm md:text-base mt-2 md:mt-3 mb-4 md:mb-6">
                  This mulch can be reused around gardens and landscaping
                  projects, offering an environmentally friendly solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Tree Service Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 mt-12 md:mt-16 mb-12 md:mb-16">
          <div className="relative lg:w-5/12 group shadow-lg shadow-black rounded-lg overflow-hidden">
            <div className="absolute w-full h-full top-3 md:top-5 -left-3 md:-left-5 bg-[#afb593] z-0"></div>
            <img
              loading="lazy"
              decoding="async"
              src="/Tree-Services.jpg"
              alt="contact us for tree services"
              className="relative w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 z-10"
            />
          </div>
          <div className="lg:w-7/12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              Professional Tree Service Company for Land Clearing in Evansville, IN
            </h2>
            <img 
              loading="lazy"
              src="/divider.png" 
              alt="Divider" 
              className="mb-4 md:mb-6 h-3 md:h-4"
            />
            <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-base">
              <p className="leading-relaxed">
                Land clearing can be a daunting undertaking, but with the help of
                certified and experienced professionals, it doesn't have to be.
                Removing huge tree stumps or rocks without proper experience could
                result in severe damage to your property, making professional
                assistance crucial.
              </p>
              <p className="leading-relaxed">
                Our qualified tree care experts provide the expertise and
                resources necessary to properly and safely clear land with minimal
                disruption to other vegetation. We utilize the latest equipment
                and techniques to ensure your land-clearing project is completed
                efficiently without compromising quality or safety.
              </p>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mt-4 md:mt-6">
                Benefits of Our Professional Tree Services:
              </h3>
              <ul className="list-disc pl-5 md:pl-8 space-y-2">
                <li className="leading-relaxed">
                  Experienced staff with the knowledge and specialized equipment
                  to complete projects quickly and safely
                </li>
                <li className="leading-relaxed">
                  Proper debris disposal in compliance with all local regulations
                </li>
                <li className="leading-relaxed">
                  Guaranteed quality workmanship and project completion
                </li>
                <li className="leading-relaxed">
                  Fully insured, licensed, and bonded services for your protection
                </li>
                <li className="leading-relaxed">
                  Customizable solutions tailored to your specific needs and
                  budget
                </li>
                <li className="leading-relaxed">
                  Peace of mind knowing your land will be cleared responsibly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#90a99557] py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="rounded-lg text-center">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2 md:mb-4">Trust American Tree Experts Land</h1>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3 md:mb-4">
              for All Your Tree Maintenance Needs in Evansville, IN
            </h1>
            <img
              loading="lazy"
              src="/divider.png"
              alt="Divider"
              className="mx-auto mb-4 md:mb-6 h-3 md:h-4"
            />
            <div className="space-y-3 md:space-y-4 text-gray-700 mx-auto text-sm md:text-base">
              <p>
                American Tree Experts Land is the go-to arborist in Evansville, IN for all
                of your tree maintenance needs. From simple land clearing and tree
                trimming to complex tree pruning goals, our qualified team of
                arborists can provide customized solutions for all your tree-related
                needs.
              </p>
              <p className="font-semibold mt-2 md:mt-3">
                Our professional tree services are designed to keep trees healthy and
                growing strong, while also ensuring that they look their best.
                Adhering strictly to the industry standards defined by both the TCIA
                and ISA, our team is dedicated to delivering quality and reliable
                services that will exceed your expectations.
              </p>
              <p className="font-semibold mt-2 md:mt-3">
                Contact us today at{" "}
                <a href="tel:812-457-3433" className="text-[#245b3c] hover:underline">
                  812-457-3433
                </a>{" "}
                to learn more about our land
                clearing services and how we can help make your property look its
                best.
              </p>
            </div>
            <button className="mt-5 md:mt-6 bg-[#afb236] hover:bg-[#908927] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105">
              REQUEST A FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandClearing;