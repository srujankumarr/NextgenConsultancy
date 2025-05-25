import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Trends = () => {
  const trendsData = [
    {
      id: 1,
      title: "Technological Advancements",
      image: "/technological-advancements.png",
      alt: "Digital technology interface with blue glowing circuits",
      colSpan: 1,
      text: "Technological Advancements\n\nAgentic AI: Artificial Intelligence is evolving towards more autonomous and proactive systems, enabling machines to make decisions with minimal human intervention. This shift is expected to revolutionize various sectors by enhancing efficiency and innovation.\ngartner.com\n\nQuantum Computing: The advent of quantum computing is set to solve complex problems beyond the capabilities of classical computers, impacting industries such as cryptography, material science, and pharmaceuticals.\n6G Connectivity: Anticipated to provide unprecedented data transfer speeds and ultra-low latency, 6G technology will facilitate advancements in communication, automation, and the Internet of Things (IoT).",
    },
    {
      id: 2,
      title: "Business Strategies",
      image: "/business-strategies.png",
      alt: "Business team reviewing charts and graphs",
      colSpan: 1,
      text: "Business Strategies\n\nAI Integration: Businesses are increasingly adopting AI for predictive analytics, decision-making, and operational efficiency, transforming traditional business models and creating new value propositions.\nquantive.com\n\nSustainable Practices: There is a growing emphasis on sustainability, with companies integrating eco-friendly practices to meet regulatory requirements and consumer expectations.\nbusinesswire.com\n\nData-Driven Decision Making: The fusion of structured and unstructured data is providing a comprehensive view of consumers, enabling personalized strategies and real-time analytics.\ninsightsassociation.org ",
    },
    {
      id: 3,
      title: "Industry-Specific Trends",
      image: "/industry-specific-trends.png",
      alt: "Person using digital interface with industry icons",
      colSpan: 1,
      text: "Industry-Specific Trends\n\nHealthcare: Advancements in biotechnology and AI are leading to personalized medicine, improved diagnostics, and innovative treatment options.\n\nFinance: The rise of fintech and blockchain technologies is revolutionizing financial services, offering enhanced security, transparency, and efficiency.\n\nManufacturing: The adoption of automation and robotics is optimizing production processes, reducing costs, and increasing precision.",
    },
    {
      id: 4,
      title: "Workforce Evolution",
      image: "/workforce-evolution.png",
      alt: "Diverse team collaborating on laptop",
      colSpan: 1,
      text: "Workforce Evolution\n\nRemote Work: The shift towards remote and hybrid work models is reshaping organizational structures, requiring new management approaches and digital collaboration tools.\n\nSkill Development: Continuous learning and upskilling are becoming essential as technological advancements demand new competencies from the workforce.\n\nEmployee Well-being: Organizations are placing greater emphasis on mental health and work-life balance to enhance productivity and employee satisfaction.",
    },
    {
      id: 5,
      title: "Consumer Behavior",
      image: "/consumer-behaviour.png",
      alt: "Team analyzing consumer data on screens",
      colSpan: 1,
      text: "Consumer Behavior\n\nDigital Engagement: Consumers are increasingly interacting with brands through digital platforms, necessitating robust online presence and engagement strategies.\n\nPersonalization: There is a growing demand for personalized products and services, prompting businesses to leverage data analytics to meet individual customer preferences.\n\nEthical Consumption: Consumers are becoming more conscious of ethical and sustainable practices, influencing their purchasing decisions and brand loyalty.",
    },
  ];

  // Function to process text and make .com and .org links clickable
  const processText = (text) => {
    // Split text by newlines to maintain formatting
    const lines = text.split("\n");

    return lines.map((line, index) => {
      // Check for .com and .org domains
      const domainMatch = line.match(/([a-zA-Z0-9-]+\.(com|org))/);

      if (domainMatch) {
        const domain = domainMatch[1];
        const parts = line.split(domain);

        return (
          <React.Fragment key={index}>
            {parts[0]}
            <a
              href={`https://${domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {domain}
            </a>
            {parts[1] || ""}
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        );
      }

      return (
        <React.Fragment key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div
        className="max-w-[85rem] mx-auto border border-[#194aff]/40 rounded-lg p-4 sm:p-6 mb-8 text-center mt-8"
        style={{
          backgroundImage: "url('/fullEllipse.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // backgroundSize: "contain",
        }}
      >
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white text-[#613fe7] border-2 border-[#194aff]/40 text-sm sm:text-base">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-[#613fe7]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Trends and Insights
          </span>
        </div>
        <p className="text-gray-800 max-w-4xl mx-auto text-sm sm:text-base">
          In today's rapidly evolving business landscape, staying abreast of
          emerging trends and insights is crucial for maintaining a competitive
          edge. At NexGen Techno Consulting, we are committed to providing our
          clients with the latest information and analyses to navigate the
          dynamic market effectively. This page offers a comprehensive overview
          of the most significant trends shaping industries in 2025 and beyond.
        </p>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {trendsData.map((trend) => (
            <div
              key={trend.id}
              className={`overflow-hidden transition-shadow duration-300 text-center ${
                trend.colSpan > 1 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-base sm:text-lg p-3 sm:p-4 text-center">
                {trend.title}
              </h3>
              <div className="aspect-w-16 aspect-h-9 relative group">
                <img
                  src={trend.image || `/api/placeholder/400/300`}
                  alt={trend.alt}
                  className="w-96 h-auto object-cover mx-auto transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay text that appears on hover with clickable links */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-opacity duration-300 flex flex-col justify-start p-4 text-white text-left w-96 mx-auto rounded-xl">
                  <div className="whitespace-pre-line text-xs">
                    {processText(trend.text)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trends;
