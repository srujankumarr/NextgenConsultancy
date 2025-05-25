import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ValueCarousel from "../components/ValueCarousel";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-4 sm:py-6 md:py-8 lg:py-12">
        {/* Story Section */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
          <div
            className="border border-[#194aff]/40 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 text-center bg-white/50 shadow-sm"
            style={{
              backgroundImage: "url('/fullEllipse.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
              <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full bg-white text-[#613fe7] border-2 border-[#194aff]/40 text-xs sm:text-sm lg:text-base shadow-sm">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-1.5 lg:mr-2 text-[#613fe7]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                About Us
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#194aff] mb-4 sm:mb-6 lg:mb-8">
              Our Story
            </h1>

            <p className="text-gray-800 max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Founded in 2008, NexGen Consultancy has over 15 years of
              experience in Business Formation, Business Management, Business
              Automation, Marketing Strategy Development, Graphics and Website
              Design, Search Engine Optimization, Point of Sale Software,
              Content Management Systems (CMS), CRM, and Customized Software
              Development. We have been serving valued customers across the
              globe, including regions like Bahrain, Saudi Arabia, the United
              Arab Emirates, Oman, the United States, Canada, Australia, New
              Zealand, Singapore, and other Asian countries.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10">
            <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-full bg-white text-[#613fe7] border-2 border-[#194aff]/40 text-xs sm:text-sm lg:text-base shadow-md">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-1.5 lg:mr-2 text-[#613fe7]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Our Values
            </span>
          </div>

          <div className="mb-4">
            <ValueCarousel />
          </div>
        </div>

        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16">
          <div
            className="border border-[#194aff]/40 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 text-center bg-white/50 shadow-sm"
            style={{
              backgroundImage: "url('/fullEllipse.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
              <span className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded-full bg-white text-[#613fe7] border-2 border-[#194aff]/40 text-xs sm:text-sm lg:text-base shadow-sm">
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-1.5 lg:mr-2 text-[#613fe7]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Our Vision
              </span>
            </div>

            <p className="text-gray-800 max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              At NexGen Consultancy, our vision is to build long-term
              relationships between businesses and their recruits. We reject
              cookie-cutter, one-size-fits-all solutions, striving instead to
              find the most suitable talent to meet your specific needs. Our
              success depends upon your satisfaction.
            </p>
          </div>
        </div>

        <div className="max-w-[85rem] mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-24 px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
          {/* Our Approach Card */}
          <div className="flex-1 bg-[#082545] text-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-center items-center mb-3 sm:mb-4 md:mb-6">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mr-1.5 sm:mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <h3 className="text-lg sm:text-xl md:text-2xl text-center font-medium">
                  Our Approach
                </h3>
              </div>

              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-center">
                We conflict directly with business problems. Every client is
                different, and we don't treat our clients with a
                one-size-fits-all approach. Before first having clients into a
                project contract with a minimum number of hours, we devise a
                specific action plan for them. We always make a comprehensive
                client's goal to complete the project on time and within budget.
                We go beyond problem-solving for reaching a sustainable solution
                that stays in place so they can better equipped to address
                similar technical and business issues in the future.
              </p>
            </div>
          </div>

          {/* Our Global Presence Card */}
          <div className="flex-1 bg-[#082545] text-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-between mt-4 md:mt-0">
            <div>
              <div className="flex justify-center items-center mb-3 sm:mb-4 md:mb-6">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white mr-1.5 sm:mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <h3 className="text-lg sm:text-xl md:text-2xl text-center font-medium">
                  Our Global Presence
                </h3>
              </div>

              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-center">
                We have a physical presence in several countries with
                representatives who are always ready to provide professional
                support and service. Our global reach allows us to assist
                clients in increasing their knowledge, which is always helpful
                for their businesses.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
