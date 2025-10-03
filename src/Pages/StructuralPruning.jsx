import { useLocation } from "react-router-dom";

const services = [
  { name: "Tree Removal", path: "/services/tree-removal/" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning/" },
  { name: "Structural Pruning", path: "/services/structural-pruning/" },
  { name: "Land Clearing", path: "/services/land-clearing/" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up/" },
  { name: "Commercial Tree Services", path: "/services/commercial-tree-services/",},
];

const StructuralPruning = () => {
  const location = useLocation();

  return (
    <div className="w-full">
      {/* Hero Section - Full Width */}
      <section className="relative w-full mb-8 md:mb-12">
        <div className="h-48 sm:h-60 md:h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
              Structural Pruning
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container with side margins */}
      <div className="w-11/12 md:w-10/12 mx-auto pt-6 md:pt-10 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3 lg:pr-6 xl:pr-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 md:mb-6">
              Expert Tree Care Services in Evansville, IN
            </h2>

            <p className="text-sm md:text-md font-semibold text-gray-700 mb-4 md:mb-6">
              American Tree Experts Land offers reliable and professional structural tree
              pruning services to the local Evansville, IN area. We have the
              expertise and knowledge to safely remove branches, limbs, or foliage
              that can threaten the integrity of your trees. Call us today at{" "}
              <a href="tel:812-457-3433" className="text-green-800 hover:text-black transition-colors duration-300">
                812-457-3433
              </a>{" "}
              for a free estimate.
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-gray-700 text-sm md:text-md">
              <p>
                Trees are a gift of nature, providing us with incredible beauty,
                valuable shade, and refreshingly crisp air. To preserve their
                splendor, it is essential that we take care of them correctly.
                American Tree Experts Land offers top-notch structural pruning services
                specifically designed to safeguard your trees' health and
                integrity - ensuring they remain strong and beautiful for many
                years to come.
              </p>

              <p>
                Our highly-qualified arborists understand the crucial role of
                proper pruning, selecting only healthy branches, and utilizing
                correct cutting techniques alongside judicious chemical
                retardants. We make certain to only eliminate what is necessary so
                that your tree can remain vigorous and healthy.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
              Structural Pruning: An Essential Part of Tree Maintenance
            </h2>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-gray-700 text-sm md:text-md">
              <p>
                Structural pruning is a vital part of tree care as it helps to
                ensure the long-term health and longevity of trees. When
                landscapes are left untended, trees can often develop multiple
                trunks or leaders due to an abundance of light. This can weaken
                the structure of the tree, making it more susceptible to limb
                breakage.
              </p>

              <div className="my-6 md:my-10 group overflow-hidden shadow-lg">
                <img
                  src="/39846733_1006526109507854_187030484117618688_n.jpg"
                  alt="Structural pruning example"
                  className="w-full h-48 sm:h-60 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="mt-3 md:mt-4">
                By regularly pruning trees, arborists can help establish a strong
                single-leader structure for the tree. This will make it less
                likely to break under stressful conditions or sudden weather
                changes. Certain trees may also benefit from pruned branches to
                allow for better air circulation and increased light penetration.
              </p>

              <p>
                Pruning at an early stage of the tree's life is especially
                important as it can prevent much bigger problems from arising in
                the future. Removing a small branch when the tree is young may
                seem insignificant, but it can be a crucial step to ensure its
                long-term health and vitality.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-4 md:mt-6">
                How is Structural Pruning Different from Other Types of Pruning?
              </h3>

              <p className="mt-3 md:mt-4">
                Structural pruning is a very different process than other types of
                tree maintenance, such as tree trimming or thinning. While these
                are important to the overall health of a tree, they do not address
                the fundamental structure of the tree.
              </p>

              <p className="mt-3 md:mt-4">
                Structural pruning encourages the promotion of one strong leader
                while diminishing any potential competitors with strategic
                reduction cuts. It also helps to establish a well-balanced tree
                canopy and to open up the interior of the tree.
              </p>

              <p>
                When it comes to structural pruning, arborists holistically look
                at the tree. They consider the environment, species, age, and
                condition of the tree so that they can determine the best course
                of action for achieving optimal results. With proper structural
                pruning, your trees will not just remain healthy but can also
                achieve their full potential for beauty and grandeur.
              </p>

              <div className="w-full h-64 sm:h-80 md:h-96 mt-6 md:mt-8 overflow-hidden shadow-lg">
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

          {/* Right Sidebar */}
          <div className="pt-6 md:pt-10 lg:w-1/3 space-y-4 md:space-y-6">
            <div className="bg-white shadow-md shadow-[#0000004d] overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-52 md:h-60 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]">
                  </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h1 className="text-sm sm:text-md md:text-lg font-bold text-white text-center">
                    Contact Us Today for More Info!
                  </h1>
                  <a href="tel:812-457-3433" className="text-white text-xl sm:text-2xl md:text-3xl font-bold mt-2">
                    812-457-3433
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-sm md:text-md font-bold bg-[#1e4d32] w-full text-white px-4 py-2">
                Our Services
              </h3>
              <ul className="space-y-1 md:space-y-2 p-2 md:p-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.path}
                      className={`block px-2 py-1 md:px-3 rounded transition text-sm md:text-md ${
                        location.pathname === service.path
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

      {/* Benefits Section - Full Width */}
      <div className="w-full bg-gradient-to-b from-[#f8faec] to-[#bcc49b] py-12 md:py-20 mt-8 md:mt-10">
        <div className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#245B3C] text-sm md:text-lg font-bold uppercase">Benefits</p>
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Benefits of Choosing Professional Tree Services
          </h1>
          <div className="flex justify-center my-3 md:my-5">
            <img decoding="async" src="/divider.png" alt="divider" className="h-2 w-24 md:w-32" />
          </div>
          <p className="text-center max-w-full mx-auto font-semibold text-sm md:text-md">
            Tree care services can be expensive and time-consuming, but the
            benefits of having a professional arborist tend to your trees are
            worth it. An Arborist has the expertise, knowledge, and experience
            to provide quality care for your trees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8 md:mt-10 pb-8 md:pb-10">
            <div className="h-full bg-white border-2 border-[#B0B694] p-3 md:p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/badge.PNG"
                alt="Trained Professionals"
                className="rounded-full h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 border-4 md:border-6 border-black shadow-sm shadow-black mx-auto mt-2 md:mt-4 object-cover"
              />
              <h3 className="text-md md:text-lg font-bold text-center mt-3 md:mt-4">Trained Professionals</h3>
              <p className="text-center mt-2 md:mt-3 text-sm md:text-md">
                Professional arborists are trained to recognize potential hazards in trees and can identify any signs of disease or damage before they become a major issue. They understand the biology of trees and how each species reacts to pruning.
              </p>
            </div>

            <div className="h-full bg-white border-2 border-[#B0B694] p-3 md:p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/precise.PNG"
                alt="Precision & Care"
                className="rounded-full h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 border-4 md:border-6 border-black shadow-sm shadow-black mx-auto mt-2 md:mt-4 object-cover"
              />
              <h3 className="text-md md:text-lg font-bold text-center mt-3 md:mt-4">Precision & Care</h3>
              <p className="text-center mt-2 md:mt-3 text-sm md:text-md">
                Structural pruning must be done with precision and care. An arborist will carefully examine your tree to determine the best course of action for each limb or branch.
              </p>
            </div>

            <div className="h-full bg-white border-2 border-[#B0B694] p-3 md:p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src="/knowledge.PNG"
                alt="Knowledgeable Experts"
                className="rounded-full h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 border-4 md:border-6 border-black shadow-sm shadow-black mx-auto mt-2 md:mt-4 object-cover"
              />
              <h3 className="text-md md:text-lg font-bold text-center mt-3 md:mt-4">Knowledgeable Experts</h3>
              <p className="text-center mt-2 md:mt-3 text-sm md:text-md">
                It's important to note that structural pruning should not be done too frequently or aggressively. A professional arborist will understand how to best prune your trees without damaging them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 mt-10 md:mt-16 mb-10 md:mb-16">
          <div className="lg:w-5/12 group shadow-lg shadow-black">
            <div className="relative">
              <div className="hidden lg:block absolute w-full h-full top-3 -left-3 bg-[#afb593] z-0"></div>
              <img
                src="/4.jpg"
                alt="Professional tree service"
                className="relative w-full h-100 object-cover transform group-hover:scale-105 transition-transform duration-500 z-10"
              />
            </div>
          </div>
          <div className="lg:w-7/12">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
              Trust American Tree Experts Land for All of Your Tree Maintenance Needs
            </h1>
            <img src="/divider.png" alt="Divider" className="mb-4 md:mb-6 h-2 w-24 md:w-32" />
            <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-md">
              <p>
                At American Tree Experts Land Company, we understand the importance of proper tree care and maintenance. Our team of Arborists provides comprehensive structural pruning services for residential and commercial clients.
              </p>
              <p>
                Our arborists have years of experience in pruning trees of all shapes and sizes. We use the most advanced techniques and equipment to ensure that the work is done correctly and safely. Whether you have young, old, or dying trees, our arborists will develop a tailored plan to suit your specific needs and goals.
              </p>
              <p className="font-bold text-md md:text-lg">
                At American Tree Experts Land Company, we aim to offer great service, superior results, and complete customer satisfaction. Contact us at{" "}
                <a href="tel:812-457-3433" className="text-green-800 hover:text-black transition-colors duration-300">
                  812-457-3433
                </a>{" "}
                for a free quote on structural pruning services in Evansville, IN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructuralPruning;