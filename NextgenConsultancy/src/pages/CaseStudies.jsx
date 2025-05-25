import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const stories = [
    {
      id: "01",
      image: "/story1.png",
      challenge:
        "Client hired three separate programmers to kickstart a new feature from scratch.",
      solution:
        "Recruit sourced and onboarded top candidates within two weeks.",
      outcome:
        "All three positions filled, and the project launched on time and within budget.",
    },
    {
      id: "02",
      image: "/story2.png",
      challenge:
        "Fintech development team was highly skilled engineers on short notice.",
      solution:
        "Our expert recruiters matched the company with pre-vetted tech talent in record time.",
      outcome:
        "A fully functional team, delivering better product development and growth.",
    },
    {
      id: "03",
      image: "/story3.png",
      challenge:
        "A startup in need of specialized developers to build a complex AI-driven platform.",
      solution: "Recruit sourced niche talent with the exact skill set needed.",
      outcome:
        "The startup successfully launched a cutting-edge AI product and secured new investors.",
    },
    {
      id: "04",
      image: "/story4.png",
      challenge:
        "A growing e-commerce business required marketing and designers to expand globally.",
      solution:
        "Candidate sourced designers who understood cultural nuances and market differences.",
      outcome:
        "A 45% increase in international user engagement and higher conversions.",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <div className="p-4 sm:p-6 mb-6 sm:mb-8 text-center mt-6 sm:mt-8">
          <h1 className="text-4xl sm:text-5xl font-semibold">
            Case Studies: Your Success Stories
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex-grow mb-10 sm:mb-15">
          <div className="overflow-hidden">
            <div className="flex flex-col md:flex-row md:gap-0">
              {/* Image Section - Moved to start/left */}
              <div className="w-full md:w-1/2 lg:w-7/12 order-2 md:order-1">
                <div className="h-full">
                  <img
                    src="/case-study.png"
                    alt="Business team meeting around table with data visualizations"
                    className="w-3xl h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content Section - Reduced padding for smaller gap with image */}
              <div className="w-full md:w-1/2 lg:w-5/12 p-4 sm:p-6 md:p-6 flex flex-col justify-center order-1 md:order-2">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
                  Real Businesses. Real Impact. Real Results.
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8">
                  At Recruit, we specialize in connecting businesses with
                  top-tier tech talent—helping them scale, innovate, and
                  succeed. Explore how we've helped companies like yours find
                  the perfect candidates to drive their vision forward.
                </p>

                {/* Buttons with Hover Effects */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-1 sm:mt-2">
                  <a
                    href="#"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 border border-[#195aff] text-[#195aff] rounded-xl text-center text-sm sm:text-base hover:scale-105 transition-transform duration-300"
                  >
                    Learn More
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#194aff] to-[#9747ff] text-white rounded-xl text-center text-sm sm:text-base hover:scale-105 transition-transform"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[90rem] mx-auto px-6 py-16 sm:py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-14 sm:mb-20 px-4">
            How We Deliver <span className="text-[#195aff]">Success</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap px-4">
            {/* Card 1 - Tailored Hiring Solutions */}
            <div
              className="border border-[#194aff]/40 rounded-xl p-6 sm:p-10 flex flex-col items-center justify-center text-center h-80 sm:h-96 max-w-md mx-auto w-full"
              style={{
                backgroundImage: 'url("/leftEllipse.png")',
                backgroundPosition: "center",
                // backgroundSize: "contain",
                // backgroundRepeat: "no-repeat",
              }}
            >
              <div className="mb-8 mt-4">
                <img src="/list.png" alt="" className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Tailored Hiring Solutions
              </h3>
              <p className="text-gray-800">
                No one-size-fits-all approach, only strategic hiring.
              </p>
            </div>

            {/* Card 2 - Fast & Efficient Recruitment */}
            <div
              className="border border-[#194aff]/40 rounded-xl p-6 sm:p-10 flex flex-col items-center justify-center text-center h-80 sm:h-96 max-w-md mx-auto w-full"
              style={{
                backgroundImage: 'url("/leftEllipse.png")',
                backgroundPosition: "center",
                // backgroundSize: "contain",
                // backgroundRepeat: "no-repeat",
              }}
            >
              <div className="mb-8 mt-4">
                <img src="/search.png" alt="" className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Fast & Efficient Recruitment
              </h3>
              <p className="text-gray-800">
                Fill key positions in record time.
              </p>
            </div>

            {/* Card 3 - End-to-End Support */}
            <div
              className="border border-[#194aff]/40 rounded-xl p-6 sm:p-10 flex flex-col items-center justify-center text-center h-80 sm:h-96 max-w-md mx-auto w-full"
              style={{
                backgroundImage: 'url("/leftEllipse.png")',
                backgroundPosition: "center",
                // backgroundSize: "contain",
                // backgroundRepeat: "no-repeat",
              }}
            >
              <div className="mb-8 mt-4">
                <img src="/support.png" alt="" className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-bold mb-4">End-to-End Support</h3>
              <p className="text-gray-800">
                From screening to onboarding, we handle it all.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[90rem] mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Featured <span className="text-[#194aff]">Success</span> Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
            {stories.map((story) => (
              <div
                key={story.id}
                className="border border-blue-200 rounded-lg overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <img
                    src={story.image}
                    alt={`Company success story ${story.id}`}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-sm font-bold uppercase tracking-wider">
                      Company Success Story
                    </p>
                    <span className="text-2xl font-bold text-[#d4e0fa]">
                      {story.id}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6 flex-grow">
                    <div>
                      <p className="font-bold text-sm">Challenge:</p>
                      <p className="text-sm text-gray-700">{story.challenge}</p>
                    </div>

                    <div>
                      <p className="font-bold text-sm">Solution:</p>
                      <p className="text-sm text-gray-700">{story.solution}</p>
                    </div>

                    <div>
                      <p className="font-bold text-sm">Outcome:</p>
                      <p className="text-sm text-gray-700">{story.outcome}</p>
                    </div>
                  </div>

                  <div className="flex justify-end mt-auto">
                    <button className="bg-gradient-to-r from-[#194aff] to-[#9747ff] hover:from-[#0e38cc] hover:to-[#7e3ad6] text-white text-sm px-4 py-2 rounded-xl transition-all duration-300 flex items-center hover:shadow-lg transform hover:-translate-y-1">
                      Read More
                      <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-[#1F2B38] text-white py-16 mb-8">
          <div className="max-w-[90rem] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-around">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
                Need the Right Candidates
                <br />
                <span className="mt-4 inline-block">for Your Business?</span>
              </h1>
            </div>

            <div className="md:w-1/2 text-center md:text-right">
              <p className="text-lg md:text-xl mb-8">
                We'll help you find the tech talent you need, so
                <br className="hidden md:block" />
                you can focus on running your business.
              </p>

              <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4">
                <Link to="/contact">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Give us a call
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="bg-[#194aff] text-white border border-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Write Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
