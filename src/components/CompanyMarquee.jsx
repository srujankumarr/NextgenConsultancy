import React, { useEffect, useRef } from "react";

const CompanyMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
  
    const speed = 2;

    let direction = -1;
    let scrollPosition = marquee.scrollWidth - marquee.clientWidth;
    marquee.scrollLeft = scrollPosition;
  
    let rafId;
    const step = () => {
      const maxScroll = marquee.scrollWidth - marquee.clientWidth;
  
      scrollPosition += speed * direction;
  
      if (scrollPosition <= 0) {
        scrollPosition = 0;
        direction = 1;        
      } else if (scrollPosition >= maxScroll) {
        scrollPosition = maxScroll;
        direction = -1;        
      }
  
      marquee.scrollLeft = scrollPosition;
      rafId = requestAnimationFrame(step);
    };
  
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);
  

  const companies = [
    { name: "Wipro", id: "wipro", image: "/wipro.png" },
    { name: "Infosys", id: "infosys", image: "/infosys.png" },
    { name: "Accenture", id: "accenture", image: "/accenture.png" },
    { name: "TCS", id: "tcs", image: "/tcs.png" },
    { name: "IBM", id: "ibm", image: "/ibm.png" },
    { name: "Amazon", id: "amazon", image: "/amazon.png" },
    { name: "L&T", id: "landt", image: "/landt.png" },
    { name: "P&G", id: "pandg", image: "/pandg.png" },
    { name: "Oracle", id: "oracle", image: "/oracle.png" },
    { name: "Capgemini", id: "capgemini", image: "/capgemini.png" },
    { name: "Hcl", id: "hcl", image: "/hcl.png" },
  ];

  return (
    <div className="w-full mx-auto px-4 py-18 overflow-hidden">
      <h2 className="text-center text-xl md:text-xl lg:text-xl font-bold mb-3">
        Trusted by Leading{' '}
        <span className="text-blue-600 cursor-pointer">
          Global Enterprises
        </span>
      </h2>
      <div className="relative overflow-hidden">
        {/* Gradient masks for smooth fade effect */}
        <div className="absolute left-0 top-0 h-full w-12 md:w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-12 md:w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling container */}
        <div
          ref={marqueeRef}
          className="flex items-center gap-6 overflow-x-auto scrollbar-hide px-2 py-4"
            style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* First set of logos */}
          {companies.map((company) => (
            <CompanyLogo key={company.id} company={company} />
          ))}

          {/* Duplicated set for continuous scroll effect */}
          {companies.map((company) => (
            <CompanyLogo key={`${company.id}-dup`} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Company logo component that uses images
const CompanyLogo = ({ company }) => {
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center px-2 sm:px-4 transition-transform hover:scale-110 duration-300">
      <div className="relative h-16 w-32 sm:h-16 sm:w-32 md:h-20 md:w-40 flex items-center justify-center">
        <img
          src={`${company.image}`}
          alt={`${company.name} logo`}
          className="h-full w-auto object-contain max-w-[120px]"
        />

      </div>
    </div>
  );
};

export default CompanyMarquee;
