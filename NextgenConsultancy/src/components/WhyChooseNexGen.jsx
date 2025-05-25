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
     {/* Overlay for darkening background */}
<div
       className="absolute inset-0"
       style={{ backgroundColor: 'rgba(8, 37, 69, 0.87)' }}
></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Title Section */}
<div className="mb-12 text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white" style={{fontWeight: "600"}}>
           Why Choose NexGen?
</h2>
</div>
       {/* Desktop view */}
<div className="hidden lg:flex relative justify-between items-start px-6 py-20">
         {steps.map((step, index) => (
<div
             key={index}
             className="flex flex-col items-center text-center relative"
             style={{ width: `${100 / steps.length}%` }}
>
             {/* Circle with number */}
<div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mb-10 relative z-10 shadow-lg"
               style={{
                 background: "linear-gradient(180deg, #E26EE5 0%, #9D62EE 19.9%, #354FFB 45.9%, #194AFF 58.4%, #0B2C69 88.9%, #0B2C69 88.91%, #082545 100%)",
                 borderRadius: "9999px",
                 padding: "4px", // spacing between wrapper and inner circle
                 marginBottom: "2.5rem", // matches mb-10
               }}>
<span className="text-2xl font-bold text-white">{step.number}</span>
</div>
             {/* Dotted line between circles except after last */}
             {index < steps.length - 1 && (
<div
                 className="absolute top-10 border-t-4 border-dashed border-cyan-400"
                 style={{
                   width: "100%",
                   transform: "translateX(50%)",
                   zIndex: 0,
                 }}
></div>
             )}
             {/* Title with two lines and colors */}
<h3 className="mb-1 text-base font-medium text-white leading-snug" style={{fontSize: "26px"}}>
               {/* First line - smaller and white */}
               {index === 0 && "Innovative"}{/* Customize per step */}
               {index === 1 && "Proven"}
               {index === 2 && "Customized"}
               {index === 3 && "Results-Oriented"}
</h3>
<h3 className="text-2xl font-bold text-[#194AFF] leading-snug mb-4" style={{fontSize: "26px", fontWeight: "600"}}>
               {/* Second line - bigger and cyan */}
               {index === 0 && "Solutions"}
               {index === 1 && "Expertise"}
               {index === 2 && "Approach"}
               {index === 3 && "Strategies"}
</h3>
<p className="text-sm text-white max-w-[14rem] mx-auto leading-relaxed" style={{fontSize: "16px", fontWeight: "400"}}>
               {step.description}
</p>
</div>
         ))}
</div>
       {/* Mobile and Tablet view */}
<div className="lg:hidden">
         {steps.map((step, index) => (
<div key={index} className="flex mb-10 items-start relative">
<div className="relative mr-6" >
<div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{
                 background: "linear-gradient(180deg, #E26EE5 0%, #9D62EE 19.9%, #354FFB 45.9%, #194AFF 58.4%, #0B2C69 88.9%, #0B2C69 88.91%, #082545 100%)",
                 borderRadius: "9999px",
                 padding: "2px",
               }}>
<span className="text-xl font-bold text-white" >{step.number}</span>
</div>
               {/* Vertical connector */}
               {index < steps.length - 1 && (
<div className="absolute top-14 left-6 w-px h-20 border-l-4 border-dashed border-cyan-400"></div>
               )}
</div>
<div className="flex-1 pt-1">
<h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
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