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
    <div className=" overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 px-4 text-center mb-16">
        <p className="text-[#194aff] text-2xl sm:text-3xl font-semibold font-poppins">
          Testimonials
        </p>
        <h1 className="text-black text-2xl sm:text-4xl font-semibold font-poppins max-w-3xl leading-snug">
          What Our Clients Say About Us
        </h1>
      </div>

      {/* Cards Container */}
      <div >
        <div className="grid lg:grid-cols-2 grid cols-1 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[300px] sm:min-w-[500px] lg:min-w-[650px] max-w-full bg-[#082545] border border-[rgba(53,53,255,0.7)] rounded-2xl p-6 sm:p-10 flex flex-col justify-between"
            >
              {/* Recommendation and Quote */}
              <div>
                <p className="text-white mb-6 text-base sm:text-xl font-inter">
                  {testimonial.recommendation}
                </p>
                <p className="text-white mb-4 text-sm sm:text-lg font-inter leading-snug">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Footer with Profile & Rating */}
              <div className="flex items-center justify-between mt-6 flex-wrap gap-4 ">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base font-inter">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-300 font-inter">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                <div className="flex text-[#D64CE8]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} fill="#D64CE8" size={24} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollbar Hide */}
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
