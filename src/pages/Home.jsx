import React from "react";
import { Target, BarChart3, Goal } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyMarquee from "../components/CompanyMarquee";
import { Link } from "react-router-dom";
import BusinessSolutionsGrid from "../components/BusinessSolutionsGrid";
import WhyChooseNexGen from "../components/WhyChooseNexGen";
import Testimonial from "../components/Testimonials";

const Home = () => {
  return (
    <div className="relative overflow-x-hidden"> 
      <div className="absolute top-[1250px] right-[-130px] w-[700px] h-[700px] rounded-full bg-[#809BFF] opacity-40 blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute top-[1530px] right-[1200px] w-[480px] h-[480px] rounded-full bg-[#809BFF] opacity-30 blur-3xl z-0 pointer-events-none"></div>
      <div className="relative z-10">
        <Navbar />
          <div
            className="w-full min-h-[630px]"
            style={{
              backgroundImage: `url('/purple background.gif')`,
              backgroundSize: '100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 mb-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
                {/* Left side content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <Link to="/contact">
                  <button
                    className="text-white font-medium py-5 px-11 text-lg rounded-2xl shadow-lg 
                              bg-gradient-to-r from-[#194aff] to-[#9747ff] 
                              hover:scale-105 transition-transform duration-300 
                              mt-102 ml-18"
                  >
                    Get started
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <CompanyMarquee />
          {/* Stats and Approach Sections */}
          <div className="flex flex-col md:flex-row w-full max-w-[90rem] mx-auto gap-6 p-4 mb-16">
            {/* Top Panel - Approach to Excellence */}
            <div
              className="text-white rounded-3xl py-24 px-34 w-full max-w-[78rem] mx-auto text-center"
              style={{
                  background: `
                    radial-gradient(circle at top right, #db6ce6 5%, transparent 35%),
                    radial-gradient(circle at bottom left, #db6ce6 5%, transparent 35%),
                    #613FE7
                  `,
                }}
              >
                <h2 className="text-4xl font-bold mb-4">
                  Our Approach to Excellence
                </h2>
                <p className="mb-10 text-sm sm:text-base">
                  We believe in a structured, research-backed, and result-oriented
                  methodology.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-24">
                  {[
                    {
                      title: "Approach",
                      icon: <Target className="h-16 w-16" />,
                      description:
                        "We analyze your business challenges and create customized strategies to ensure growth and efficiency.",
                    },
                    {
                      title: "Data-Driven",
                      icon: <BarChart3 className="h-16 w-16" />,
                      description:
                        "Leveraging cutting-edge analytics, we provide valuable information to guide your decision-making.",
                    },
                    {
                      title: "Goal",
                      icon: <Goal className="h-16 w-16" />,
                      description:
                        "Every strategy we implement is aligned with your business objectives to ensure long-term success.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white text-gray-900 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
                      style={{ maxWidth: '250px' }} 
                    >
                      {item.icon}
                      <h3 className="text-lg font-bold mt-3">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    </div>
                  ))}
                    
                </div>
              </div>
            </div>
            {/* Bottom Panel - Client Trust */}
            <div
              className="w-full max-w-7xl mx-auto p-8"         
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-4 md:gap-4 items-start">
              {/* Left side */}     
                <div className="text-center md:text-left md:pr-8 mt-8">
                  <h2 className="text-8xl font-semibold text-blue-600 mb-5">28K+</h2>
                  <h3 className="text-4xl font-semibold text-gray-900 mb-4">
                    Satisfied Clients<br />Trust Our Expertise
                  </h3>
                  <p className="text-gray-700 text-lg max-w-md mx-auto md:mx-0">
                    Delivering exceptional consulting services that drive business success.
                  </p>
                </div>

                {/* Right side */}
                <div className="space-y-6 md:pl-1 w-full">
                  {[
                    {
                      title: "Strategic Growth Planning",
                      description: "Helping businesses scale efficiently with data-driven strategies.",
                    },
                    {
                      title: "Business Process Optimization",
                      description: "Enhancing operational efficiency for maximum productivity.",
                    },
                    {
                      title: "Leadership & Team Development",
                      description: "Empowering teams with training and leadership insights.",
                    },
                    {
                      title: "Market & Competitive Analysis",
                      description: "Providing deep market insights for informed decision-making.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="w-full bg-white rounded-xl p-2 border border-purple-300 shadow-[0_4px_11.8px_0_rgba(97,63,231,0.17)]"
                      >
                      <div className="flex items-start space-x-3">
                        <span className="text-xl mt-1">✅</span>
                        <p className="text-gray-900 leading-relaxed">
                          <span className="font-medium">{item.title}</span> – {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          <BusinessSolutionsGrid />
          <WhyChooseNexGen />
          <Testimonial />
          <Footer />
      </div>
    </div>
  );
};

export default Home;
