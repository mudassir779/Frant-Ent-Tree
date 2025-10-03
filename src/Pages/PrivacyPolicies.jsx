import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy bg-gray-50">
      {/* Hero Section with Image */}
      <section className="relative w-full mb-8 sm:mb-12">
              <div className="h-48 sm:h-60 md:h-70 w-full">
                <div className="absolute inset-0 bg-[url('/hero-img.jpg')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#000000b3] to-[#0000008c]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 uppercase">
                    Privacy Policy
                  </h1>
                </div>
              </div>
            </section>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-gray-700">
        {/* Last Updated */}
        <div className="mb-8 md:mb-12">
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-2'>Privacy Policy</h1>
          <p className="text-gray-600">Last updated: February 24, 2023</p>
        </div>

        {/* Introduction */}
        <section className="mb-8 md:mb-12">
          <p className="mb-4 leading-relaxed">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p className="leading-relaxed">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the TermsFeed Privacy Policy Generator.
          </p>
        </section>

        {/* Interpretation and Definitions */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Interpretation and Definitions</h2>
          
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Interpretation</h3>
            <p className="leading-relaxed">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Definitions</h3>
            <p className="mb-4 leading-relaxed">For the purposes of this Privacy Policy:</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">Account</h4>
                <p className="leading-relaxed">means a unique account created for You to access our Service or parts of our Service.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Affiliate</h4>
                <p className="leading-relaxed">means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Company</h4>
                <p className="leading-relaxed">(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to American Tree Experts Land, Evansville, IN.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Cookies</h4>
                <p className="leading-relaxed">are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Country</h4>
                <p className="leading-relaxed">refers to: Indiana, United States</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Device</h4>
                <p className="leading-relaxed">means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Personal Data</h4>
                <p className="leading-relaxed">is any information that relates to an identified or identifiable individual.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Service</h4>
                <p className="leading-relaxed">refers to the Website.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Service Provider</h4>
                <p className="leading-relaxed">means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Third-party Social Media Service</h4>
                <p className="leading-relaxed">refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Usage Data</h4>
                <p className="leading-relaxed">refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Website</h4>
                <p className="leading-relaxed">refers to American Tree Experts Land, accessible from http://www.americantreesexpert.com/</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">You</h4>
                <p className="leading-relaxed">means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Collecting and Using Personal Data */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Collecting and Using Your Personal Data</h2>
          
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Types of Data Collected</h3>
            
            <div className="mb-6">
              <h4 className="text-md sm:text-lg font-medium text-gray-800 mb-2">Personal Data</h4>
              <p className="mb-3 leading-relaxed">
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1 leading-relaxed">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Usage Data</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-md sm:text-lg font-medium text-gray-800 mb-2">Usage Data</h4>
              <p className="mb-3 leading-relaxed">
                Usage Data is collected automatically when using the Service.
              </p>
              <p className="mb-3 leading-relaxed">
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
              <p className="mb-3 leading-relaxed">
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
              </p>
              <p className="leading-relaxed">
                We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Information from Third-Party Social Media Services</h3>
            <p className="mb-3 leading-relaxed">
              The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3 leading-relaxed">
              <li>Google</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
            <p className="mb-3 leading-relaxed">
              If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.
            </p>
            <p className="leading-relaxed">
              You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Tracking Technologies and Cookies</h3>
            <p className="mb-3 leading-relaxed">
              We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
            </p>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-1">Cookies or Browser Cookies</h4>
              <p className="leading-relaxed">
                A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
              </p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-1">Web Beacons</h4>
              <p className="leading-relaxed">
                Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
              </p>
            </div>
            
            <p className="mb-3 leading-relaxed">
              Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies on TermsFeed website article.
            </p>
            
            <p className="mb-3 leading-relaxed">
              We use both Session and Persistent Cookies for the purposes set out below:
            </p>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-1">Necessary / Essential Cookies</h4>
              <p className="leading-relaxed"><span className="font-medium">Type:</span> Session Cookies</p>
              <p className="leading-relaxed"><span className="font-medium">Administered by:</span> Us</p>
              <p className="leading-relaxed">
                <span className="font-medium">Purpose:</span> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
              </p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-1">Cookies Policy / Notice Acceptance Cookies</h4>
              <p className="leading-relaxed"><span className="font-medium">Type:</span> Persistent Cookies</p>
              <p className="leading-relaxed"><span className="font-medium">Administered by:</span> Us</p>
              <p className="leading-relaxed">
                <span className="font-medium">Purpose:</span> These Cookies identify if users have accepted the use of cookies on the Website.
              </p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-1">Functionality Cookies</h4>
              <p className="leading-relaxed"><span className="font-medium">Type:</span> Persistent Cookies</p>
              <p className="leading-relaxed"><span className="font-medium">Administered by:</span> Us</p>
              <p className="leading-relaxed">
                <span className="font-medium">Purpose:</span> These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
              </p>
            </div>
            
            <p className="mt-4 leading-relaxed">
              For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
            </p>
          </div>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="mb-4 leading-relaxed">
            If you have any questions about this Privacy Policy, You can contact us:
          </p>
          <ul className="space-y-2 leading-relaxed">
            <li><strong>By email:</strong> Thetreexperts@gmail.com</li>
            <li><strong>By visiting this page on our website:</strong> http://www.americantreesexpert.com/</li>
            <li><strong>By phone number:</strong> 812-457-3433</li>
            <li><strong>By mail:</strong> Evansville, IN</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;