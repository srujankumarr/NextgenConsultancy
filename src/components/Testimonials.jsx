import { Star } from "lucide-react";
import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      recommendation:
        "If somebody were to ask me for something similar, I would definitely recommend you guys!",
      quote:
        "Their innovative solutions transformed our operations completely. The team's expertise in cloud computing helped us achieve 200% better performance.",
      name: "Victoria",
      title: "CEO, Eva Quotes",
      image: "/images/priyanka-patel.png",
      rating: 5,
    },
    {
      id: 2,
      recommendation:
        "If somebody were to ask me for something similar, I would definitely recommend you guys!",
      quote:
        "Outstanding service in AI implementation. Helped us reduce operational costs by 40% through intelligent automation.",
      name: "Yashwanth",
      title: "Co-Founder, Campalin Innovations",
      image: "/images/shashank-gupta.jpg",
      rating: 5,
    },
    {
      id: 3,
      recommendation:
        "If somebody were to ask me for something similar, I would definitely recommend you guys!",
      quote:
        "Their integration of blockchain technology introduced transparency and trust to our entire supply chain.",
      name: "Akshay",
      title: "Director, Camplyft",
      image: "/images/mahesh-singh.jpg",
      rating: 5,
    },
    {
      id: 4,
      recommendation:
        "If somebody were to ask me for something similar, I would definitely recommend you guys!",
      quote:
        "Thanks to their assistance, we’ve achieved excellent uptime and customer satisfaction has gone up significantly.",
      name: "Vamshi",
      title: "COO, Smart Clues",
      image: "/images/rajesh-iyer.png",
      rating: 5,
    },
  ];

  return (
    <div className="py-20 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 mb-[100px]">
        <p className="w-[240px] h-[64px] font-poppins font-semibold text-[32px] leading-[64px] text-center text-[#194aff]">
          Testimonials
        </p>
        <h1 className="w-[743px] h-[64px] font-poppins font-semibold text-[45px] leading-[64px] text-center text-black">
          What Our Clients Say About Us
        </h1>
      </div>

      {/* Cards Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 px-6 sm:px-12 w-max">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                width: "698px",
                height: "381px",
                padding: "2.5rem",
                borderRadius: "1rem",
                backgroundColor: "#082545",
                border: "1px solid rgba(53, 53, 255, 0.7)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Recommendation and Quote */}
              <div>
                <p className="text-white mb-10 text-[24px] font-normal leading-[100%] font-inter">
                  {testimonial.recommendation}
                </p>
                <p className="text-white mb-4 text-[20px] font-normal leading-[100%] font-inter">
                  "{testimonial.quote}"
                </p>
              </div>
              {/* Footer with Profile & Rating */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-30 h-30 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold text-lg font-inter">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-300 font-inter">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <div className="flex text-[#D64CE8]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} fill="#D64CE8" size={44} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollbar Hide Style */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
