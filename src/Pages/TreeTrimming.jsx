import { useLocation } from "react-router-dom";

const services = [
  { name: "Tree Removal", path: "/services/tree-removal/" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning/" },
  { name: "Structural Pruning", path: "/services/structural-pruning/" },
  { name: "Land Clearing", path: "/services/land-clearing/" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up/" },
  { name: "Commercial Tree Services", path: "/services/commercial-tree-services/",},
];

const TreeTrimming = () => {
  const location = useLocation();

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full mb-8 md:mb-12">
        <div className="h-64 sm:h-80 md:h-96 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center uppercase">
              Tree Trimming & Pruning
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="w-11/12 lg:w-10/12 mx-auto pt-6 md:pt-10 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-4 sm:mb-6">
              Experienced Tree Services Professionals in Evansville, IN
            </h2>

            <p className="text-sm sm:text-md font-bold text-gray-700 mb-4 sm:mb-6">
              Looking for a tree trimming and pruning specialist in Evansville, Indiana? Look no further! Our arborists have the technical know-how and latest tools to ensure your trees are healthy, robust, and visually appealing. Give us a call at
              {" "}
              <a href="tel:812-457-3433" className="text-[#245b3c] hover:underline">
                812-457-3433
              </a>{" "}
              for a free quote.
            </p>

            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Regular tree care is important for promoting strong, healthy growth and preventing disease. We use the latest methods and techniques to trim, prune, and shape your trees while preserving their natural beauty. We strive to uphold both quality and safety by adhering to ANSI A300 industry pruning standards so that your trees will always look vibrant, secure, and beautiful.
            </p>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 sm:mb-12">
              <div className="bg-[#245b3c] mb-6 md:mb-0 md:mr-6 p-6 flex-1 flex items-center">
                <p className="text-white font-bold text-sm sm:text-lg">
                  Not only can this help protect against structural damage, but it also helps to nourish and promote the healthy growth of the affected trees.
                </p>
              </div>
              <div className="flex-1 group overflow-hidden shadow-lg">
                <img 
                  fetchpriority="high" 
                  decoding="async" 
                  src="/1.jpg" 
                  alt="Tree trimming service" 
                  className="w-full h-120 object-top object-cover"
                />
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                Tree Trimming or Tree Pruning: Which Service is Right for You?
              </h2>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 text-gray-700 text-sm sm:text-base">
                <p>
                  Tree trimming is the process of removing dead or overgrown branches and limbs from your tree. This will help improve airflow throughout the tree, reducing stress on each branch and preventing structural damage. It's an essential service that should be done each year to ensure healthy growth and reduce the risk of disease.
                </p>

                <div className="my-8 sm:my-12 group overflow-hidden shadow-lg">
                  <img
                    src="/about-img.jpg"
                    alt="About tree services"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p>
                  Tree pruning is the process of selectively removing live branches and limbs. This helps promote healthy growth, allowing more sunlight to reach each branch. It also improves air circulation throughout the tree and maintains its natural shape. Pruning should be done every three years or as needed to keep your trees in peak condition.
                </p>
                <p>
                  Young trees also benefit from regular pruning to encourage strong, healthy growth. Our arborists can help you determine the best tree care plan for your young trees to ensure they have a long and healthy life.
                </p>
              </div>
            </div>

            <div className="w-full h-64 sm:h-80 md:h-96 mt-6 sm:mt-8 overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100613.45388092705!2d-87.69936316810865!3d37.996484913892644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8871d5133156772d%3A0xb52e4939112ac99d!2sEvansville%2C%20IN!5e0!3m2!1sen!2sus!4v1753881151623!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Evansville Location Map"
              ></iframe>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="pt-6 sm:pt-10 lg:w-1/3 space-y-4 sm:space-y-6">
            <div className="bg-white shadow-md shadow-[#0000004d] overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-60 w-full">
                <div className="absolute inset-0 bg-[url('/map-bg.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-[#1e4d32e6]"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h1 className="text-sm sm:text-md md:text-lg font-bold text-white text-center">
                    Contact Us Today for More Info!
                  </h1>
                  <a href="tel:812-457-3433" className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 hover:underline">
                    812-457-3433
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-sm sm:text-md font-bold bg-[#1e4d32] w-full text-white mb-3 sm:mb-4 px-4 py-2">
                Our Services
              </h3>
              <ul className="space-y-1 sm:space-y-2 p-2 sm:p-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.path}
                      className={`block px-2 sm:px-3 py-1 sm:py-1.5 rounded transition text-sm sm:text-base ${location.pathname === service.path
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
      <div className="w-full bg-gradient-to-b from-[#f8faec] to-[#bcc49b] py-12 sm:py-16 md:py-20 mt-8 sm:mt-10">
        <div className="w-11/12 lg:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#245B3C] text-sm sm:text-lg font-bold uppercase">Why it Helps</p>
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Benefits of Regular Tree Trimming & Pruning
          </h1>
          <div className="flex justify-center my-3 sm:my-4">
            <img decoding="async" src="/divider.png" alt="divider" width="100" height="10" />
          </div>
          <p className="text-center max-w-full mx-auto text-sm sm:text-md">
            From enhancing your home's curb appeal to reducing the risk of
            disease, there are many benefits to regular tree care.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-10 pb-8 sm:pb-10">
            {[
              {
                icon: "/safety.PNG",
                title: "Safety",
                description: "Overgrown or dead branches can be hazardous and cause damage to nearby property or even personal injury. Regular tree trimming and pruning help remove dangerous branches."
              },
              {
                icon: "/health.PNG",
                title: "Health",
                description: "Promoting healthy growth is essential for maintaining a tree's health and preventing disease. Our experts use the latest methods to ensure your trees remain strong and vibrant."
              },
              {
                icon: "/curb_appeal.PNG",
                title: "Curb Appeal",
                description: "Trimming and pruning can help maintain a tree's natural shape and improve its appearance. A well-maintained tree can be a beautiful addition to any yard."
              },
              {
                icon: "/shape_structure.PNG",
                title: "Shape and Structure",
                description: "Regular trimming helps keep a tree's natural shape, improving its overall look. We can help maintain the desired look of your trees while promoting healthy growth."
              }
            ].map((item, index) => (
              <div key={index} className="h-full bg-white border-2 border-[#B0B694] p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="rounded-full h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 border-4 sm:border-6 border-black shadow-sm shadow-black mx-auto mt-2 sm:mt-4 object-cover"
                />
                <h3 className="text-base sm:text-lg font-bold text-center mt-2 sm:mt-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-center mt-2 sm:mt-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-11/12 lg:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 mt-10 sm:mt-16 mb-10 sm:mb-16">
          <div className="lg:w-5/12 group shadow-lg shadow-black relative">
            <div className="absolute w-full h-full top-3 sm:top-4 -left-3 sm:-left-4 bg-[#afb593] z-0"></div>
            <img 
              loading="lazy" 
              decoding="async" 
              src="/1.jpg" 
              alt="Tree service professional at work" 
              className="relative w-full h-120 object-cover object-top transform group-hover:scale-105 transition-transform duration-500 z-10"
            />
          </div>
          <div className="lg:w-7/12">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Signs You Need Professional Trimming & Pruning Services
            </h1>
            <img loading="lazy" decoding="async" src="/divider-d.png" alt="divider" className="mb-4 sm:mb-6 w-3/4 sm:w-auto" />

            <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
              Trees are living things and require regular maintenance to remain
              healthy. If you notice any of the following signs, it's time to
              call in a professional tree service in Evansville, IN.
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
              {[
                "Overgrown branches or limbs that are blocking sunlight from reaching other parts of the tree",
                "Dead or diseased branches",
                "Signs of damage such as wounds or cracks",
                "Branches that are growing too close to the house or other structures",
                "Trees with an odd shape or misshapen crown",
                "Hazardous trees or limbs that need to be removed for safety reasons",
                "Smaller trees showing poor growth",
                "Old and huge tree with dead, overgrown, or diseased branches"
              ].map((item, index) => (
                <li key={index} className="hover:text-green-700 transition-colors duration-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Professional Services Section */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 mb-10 sm:mb-16">
          <div className="lg:w-7/12 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
              <p>
                When it comes to tree care, it's best to leave the job to the professionals. Arborists spend years honing their craft and have the experience to provide quality service. Homeowners who attempt to trim or prune trees on their own risk further damage, as well as personal injury.
              </p>
              <p className="font-semibold">
                The benefits of choosing a professional tree service company include:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 space-y-1 sm:space-y-2">
                {[
                  "Expert arborists who understand the local climate and can provide tailored advice for your specific needs",
                  "The latest equipment and techniques for safe and efficient trimming and pruning",
                  "Professional-grade safety gear to ensure everyone's safety",
                  "Affordable and competitive pricing",
                  "Guaranteed results that will help you maintain the health of your trees for years to come"
                ].map((item, index) => (
                  <li key={index} className="hover:text-green-700 transition-colors duration-200">
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Professional tree services pay for themselves in the long run. Tree removal costs can be exuberant, and regular maintenance can help you avoid these expenses. Regular tree maintenance will save you time, money, and worry while enhancing your home's curb appeal and increasing the value of residential and commercial properties.
              </p>
            </div>
          </div>

          <div className="lg:w-5/12 order-1 lg:order-2">
            <div className="group shadow-lg shadow-black relative">
              <div className="absolute w-full h-full top-3 sm:top-4 -left-3 sm:-left-4 bg-[#afb593] z-0"></div>
              <img
                src="/4.jpg"
                alt="Professional tree service team"
                className="relative w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500 z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#90a99538]">
        <div className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg py-6 sm:py-10 max-w-6xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              American Tree Experts, Evansville: Your Trusted Tree Care Partner
            </h1>
            <div className="flex justify-center mb-3 sm:mb-4">
              <img loading="lazy" decoding="async" src="/divider.png" alt="divider" width="100" height="10" />
            </div>
            <div className="space-y-3 sm:space-y-4 text-gray-700 mx-auto text-sm sm:text-base">
              <p>
                At American Tree Experts, we are passionate about delivering our customers the highest standards for tree trimming and removal, fertilization, and consulting services. Whether it is tree removal services, tree pruning services, or stump removal, our arborists are dedicated to providing quality work at competitive rates.
              </p>
              <p>
                We are confident that you will be satisfied with the results and we look forward to becoming your trusted tree care partner in Evansville, IN. We offer free estimates and would be happy to discuss your tree care needs so you can make an informed decision.
              </p>
              <p className="font-bold">
                Contact us today at {" "}
                <a href="tel:812-457-3433" className="text-[#245b3c] hover:underline">
                  812-457-3433
                </a>{" "}
                to learn more about our services and how we can help you maintain the health of your trees for years to come.
              </p>
            </div>
            <button className="mt-4 sm:mt-6 bg-[#afb236] hover:bg-[#908927] text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-3xl shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#afb236] focus:ring-opacity-50">
              REQUEST A FREE ESTIMATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeTrimming;