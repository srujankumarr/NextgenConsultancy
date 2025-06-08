import React from "react";

const WhyChooseNexGen = () => {
  const steps = [
    {
      number: "01",
      title: "Innovative Solutions",
      description:
        "We leverage cutting-edge tools and strategies to drive results.",
    },
    {
      number: "02",
      title: "Proven Expertise",
      description: "Our team brings years of experience in diverse industries.",
    },
    {
      number: "03",
      title: "Customized Approach",
      description: "Every business is unique, and so are our solutions.",
    },
    {
      number: "04",
      title: "Results-Oriented Strategies",
      description: "We focus on measurable outcomes and long-term growth.",
    },
  ];

  return (
    <div
      className="relative bg-slate-900 bg-cover bg-center py-12 sm:py-16"
      style={{
        backgroundImage: `url('/whychoosenextgenImage.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#082545dd]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Why Choose NexGen?
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-4 gap-x-6 relative px-4 py-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              {/* Number Circle */}
              <div
                className="w-20 h-20 flex items-center justify-center rounded-full shadow-lg mb-6 z-10"
                style={{
                  background:
                    "linear-gradient(180deg, #E26EE5 0%, #9D62EE 19.9%, #354FFB 45.9%, #194AFF 58.4%, #0B2C69 88.9%, #0B2C69 88.91%, #082545 100%)",
                }}
              >
                <span className="text-2xl font-bold text-white">
                  {step.number}
                </span>
              </div>

              {/* Horizontal connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-10 right-0 transform translate-x-1/2 w-full border-t-4 border-dashed border-cyan-400 z-0"></div>
              )}

              {/* Two-line Title */}
              <h3 className="text-white text-lg font-medium leading-snug">
                {step.title.split(" ")[0]}
              </h3>
              <h3 className="text-[#194AFF] text-xl font-semibold leading-snug mb-4">
                {step.title.split(" ").slice(1).join(" ")}
              </h3>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed max-w-[14rem]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile + Tablet View */}
        <div className="lg:hidden space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start relative">
              {/* Number Circle */}
              <div className="relative mr-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(180deg, #E26EE5 0%, #9D62EE 19.9%, #354FFB 45.9%, #194AFF 58.4%, #0B2C69 88.9%, #0B2C69 88.91%, #082545 100%)",
                  }}
                >
                  <span className="text-xl font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Vertical connector */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block absolute top-14 left-6 w-px h-20 border-l-4 border-dashed border-cyan-400"></div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1 pt-1">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-cyan-200">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseNexGen;
