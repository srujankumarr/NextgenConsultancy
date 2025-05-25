import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ValueCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const values = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity in all our actions.",
      imageUrl: "/about/image11.png",
    },
    {
      title: "Operational Excellence",
      description:
        "We deliver superior services by optimizing our operations and processes.",
      imageUrl: "/about/image12.png",
    },
    {
      title: "Innovation",
      description:
        "We foster a culture of innovation to provide cutting-edge solutions.",
      imageUrl: "/about/image13.png",
    },
    {
      title: "Continuous Improvement",
      description:
        "We are committed to continuous improvement in all aspects of our business.",
      imageUrl: "/about/image14.png",
    },
  ];

  // Navigation functions
  const nextSlide = () => {
    setActiveIndex((current) =>
      current === values.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? values.length - 1 : current - 1
    );
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-6">
      <div className="flex items-center justify-center">
        {/* Left navigation button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Main carousel card */}
        <div
          className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Cards wrapper */}
          <div
            className="absolute inset-0 w-full h-full flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {values.map((value, index) => (
              <div key={index} className="min-w-full flex-shrink-0 relative">
                {/* Background image */}
                <img
                  src={value.imageUrl}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <div className="max-w-md text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right navigation button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default ValueCarousel;
