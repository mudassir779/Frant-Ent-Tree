import React from "react";

const services = [
  { name: "Tree Removal", path: "/services/tree-removal/" },
  { name: "Tree Trimming & Pruning", path: "/services/tree-trimming-pruning/" },
  { name: "Structural Pruning", path: "/services/structural-pruning/" },
  { name: "Land Clearing", path: "/services/land-clearing/" },
  { name: "Storm Clean Up", path: "/services/storm-clean-up/" },
  { name: "Commercial Tree Services", path: "/services/commercial-tree-services/",},
];

const StormCleanUp = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full mb-8 md:mb-12">
        <div className="h-48 sm:h-60 md:h-70 w-full">
          <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4 uppercase">
              Storm Clean Up
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container with side margins */}
      <div className="w-11/12 md:w-10/12 mx-auto pt-6 md:pt-10 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Side*/}
          <div className="lg:w-2/3">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3">
              Your Trusted Tree Service Company in Evansville, IN
            </h1>

            <p className="text-sm md:text-md font-bold text-gray-700 mb-4 md:mb-6">
              If you're looking for professional storm cleanup services in Evansville, IN,
              don't look no further! Our experienced arborists have the
              expertise and equipment needed to keep your property safe after a
              storm. With our friendly team on the job, you can rest assured that
              your landscape will be restored to its former glory in no time. Call
              us at{" "}
              <a href="tel:812-457-3433" className="text-[#245b3c]">
                812-457-3433
              </a>{" "}
              for a free estimate.
            </p>

            <p className="text-gray-600 mb-6 md:mb-8">
              Florida is known for its warmth and sunshine, but it is also prone
              to severe storms, floods, high winds, and even tornadoes.
              Storm-inflicted disasters can cause excessive property damage. With
              high winds and heavy rains, storm season can be hazardous for trees,
              leaving branches scattered around yards or fallen onto buildings.
            </p>

            <p className="text-gray-600 mb-6 md:mb-8">
              Not only is this a safety concern, but it can also be an eyesore. We understand the importance of clearing your property quickly and correctly. Our storm cleanup services include removing any fallen branches, trimming back damaged or broken limbs, and clearing away debris.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex-1">
                <img fetchpriority="high" decoding="async" src="/storm-cleanup.jpg" alt="Commercial Tree Maintenance" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <img decoding="async" src="/32498232_918103371683462_7686778002729861120_n.jpg" alt="Commercial Tree Service" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="mt-8 md:mt-12">
              <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Dealing with Storm Damage and How We Can Help Cleanup
              </h1>
              <p className="mb-3 md:mb-4">
                Facing the aftermaths of a natural disaster can be overwhelming.
                Your front yard, backyard, or commercial property might be filled
                with scattered branches, leaves, uprooted trees, or even unwanted
                items like plywood sheets, tarps, and loose shingles.
              </p>
              <p className="mb-3 md:mb-4">
                That's why our storm cleanup services are here to help you restore
                your property quickly and safely. We can assess the damage, create
                a plan of action for clean-up services, and get the job done
                efficiently.
              </p>
              <p className="mb-3 md:mb-4">
                When you enlist American Tree Experts Land for storm clean up, here are
                the services we provide:
              </p>
              <ul className="list-disc list-inside text-sm md:text-md pl-4 md:pl-5 mb-4">
                <li>Assessing and Removing Fallen Branches </li>
                <li>Clearing Away Debris </li>
                <li>Taking Safety Precautions During Storm Cleanup </li>
                <li>Protecting Your Property from Future Damage </li>
                <li>Expert Advice from Experienced Arborists </li>
                <li>
                  Free Estimates for Storm Cleanup Services in Evansville, IN,
                  and surrounding areas.
                </li>
              </ul>
              <p>
                With years of experience in the industry and a team of friendly
                professionals on your side, we'll make sure that you can recover
                quickly after a storm hits. From debris removal to general
                cleanup, there is no job too big or small for our team.{" "}
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

          {/* Right Side - Sidebar */}
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
              <h3 className="text-sm sm:text-md font-bold bg-[#1e4d32] w-full text-white px-4 py-2">
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

      <div className="w-full bg-gradient-to-b from-[#f8faec] to-[#bcc49b] py-12 md:py-20 mt-8 md:mt-10">
        <div className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#245B3C] text-sm md:text-lg font-bold uppercase">
            Benefits
          </p>
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
            Benefits of Hiring a Professional for Storm Damage Cleanup
          </h1>
          <div className="flex justify-center my-3 md:my-5">
            <img decoding="async" src="/divider.png" alt="divider" className="h-2 w-24 md:w-32" />
          </div>
          <p className="max-w-3xl mx-auto text-center text-gray-700 text-sm md:text-md leading-relaxed">
            When a storm hits your property, it's important to act fast and hire
            professionals for cleanup. <br />
            Common storm damage includes fallen
            limbs, uprooted trees, or even whole trees that have toppled over. <br />
            From obstructing roads to damaging buildings, these can pose serious
            risks to your property.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {/* Minimize Risks */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/38612377_989310431229422_6230231288440160256_n.jpg" alt="minimize-risks" className="h-48 sm:h-52 md:h-60 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-center">
                  Minimize Risks
                </h3>
                <p className="text-center text-gray-700 text-sm md:text-md px-2 md:px-4 my-2 md:my-3">
                  Our storm cleanup services are aimed at minimizing the risk of
                  further damage while also restoring the natural beauty of your
                  landscape. With our experienced arborists, we can provide the
                  most efficient and cost-effective clean-up solutions.
                </p>
              </div>
            </div>

            {/* Experienced Professionals */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/117234206_1549671068526686_4566334105761471143_n.jpg" alt="experienced-professionals" className="h-48 sm:h-52 md:h-60 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-center">
                  Experienced Professionals
                </h3>
                <p className="text-center text-gray-700 text-sm md:text-md px-2 md:px-4 my-2 md:my-3">
                  From debris removal to tree trimming, we take care of all the
                  hard work so you don't have to worry. Plus, our arborists are
                  trained in proper safety regulations, ensuring that your
                  property remains safe and secure.
                </p>
              </div>
            </div>

            {/* Stress-Free */}
            <div className="bg-white rounded-sm shadow hover:shadow-xl transition-shadow duration-300 border-2 border-[#FFFFFF]">
              <img loading="lazy" decoding="async" src="/38668235_989310174562781_3587591873180467200_n.jpg" alt="stress-free" className="h-48 sm:h-52 md:h-60 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-center">
                  Stress-Free
                </h3>
                <p className="text-center text-gray-700 text-sm md:text-md px-2 md:px-4 my-2 md:my-3">
                  For our commercial clients, we specialize in storm damage
                  management and stress-free service. We can inspect and assess
                  the affected area, provide detailed reports to your insurance
                  company, and provide clean-up services as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 mt-10 md:mt-16 mb-12 md:mb-16">
          <div className="lg:w-5/12 group shadow-lg shadow-black">
            <div className="relative">
              <div className="hidden lg:block absolute w-full h-full top-3 -left-3 bg-[#afb593] z-0"></div>
              <img loading="lazy" decoding="async" src="/Tree-Services.jpg" alt="tree service" className="relative w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 z-10" />
            </div>
          </div>
          <div className="lg:w-7/12 pb-5">
            <h1 className="text-[#245B3C] text-sm md:text-md font-bold uppercase">24/7 Availability</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
              Emergency Response Storm Cleanup in Evansville, IN
            </h2>
            <img src="/divider.png" alt="Divider" className="my-3 md:my-5 h-2 w-24 md:w-32" />
            <div className="space-y-3 md:space-y-4 text-gray-700 text-sm md:text-md">
              <p className="leading-relaxed">
                Fallen trees can cause a lot of damage to your property and should be dealt with as soon as possible. Our team offers 24/7 emergency response services to help you get your property back on track. We understand that time is of the essence in these cases, so we will work quickly and efficiently to restore your property.
              </p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-4 md:mt-6">
                Why Choose Professional Storm Cleanup Services in Evansville, IN
              </h3>
              <p className="leading-relaxed">Storm cleanup is a job for the professionals. Owing to the complexity, safety risks, and potential for damage, it's not something that should be attempted by an untrained individual. From debris removal to tree trimming and assessment, professionals have the training and experience needed to get the job done right.</p>
              <p className="leading-relaxed">Heavy winds, lightning, and excessive rain can wreak havoc on your property. Our team of experienced arborists is trained to safely remove fallen trees, branches, and debris without risking further damage. We will make sure any hanging or broken limbs are cleared away from power lines and other structures.
                With our storm cleanup services, you can rest assured that your property will be safe and secure after a storm. To prevent future damage, we also offer preventive treatments such as cabling or staking weak limbs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full bg-[#90a99557] items-center py-10 md:py-16">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center">
          Experience You Can Trust:
        </h1>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center">
          American Tree Experts' Professional Storm Cleanup Services
        </h1>
        <img src="/divider.png" alt="Divider" className="my-6 md:my-8 h-2 w-24 md:w-32" />
        <div className="w-11/12 mx-auto">
          <p className="text-gray-700 text-sm md:text-md text-center">
            At American Tree Experts Land, we stand by our commitment to providing top-quality storm cleanup services. Our experienced arborists are here to make sure that your property is taken care of quickly and correctly after a storm.
          </p>
          <p className="text-gray-700 text-sm md:text-md text-center font-semibold mt-2 md:mt-3">
            With over 20 years of experience, we understand the complexity and potential risks associated with storm damage cleanup. That's why our team is trained and equipped with the latest tools and safety gear to ensure that your property is restored on time.
          </p>
          <p className="text-gray-700 text-sm md:text-md font-bold text-center mt-2 md:mt-3">
            If you're looking for professional storm cleanup services in Evansville, Henderson, Newburgh, or the surrounding areas, contact us at{" "}
            <a href="tel:812-457-3433" className="text-[#245b3c]">
              812-457-3433
            </a>.
          </p>
        </div>
        <button className="my-4 md:my-6 bg-[#afb236] hover:bg-[#908927] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-3xl shadow-md transition-colors duration-300 transform hover:scale-105 text-sm md:text-md">
          REQUEST A FREE ESTIMATE
        </button>
      </div>
    </div>
  );
};

export default StormCleanUp;