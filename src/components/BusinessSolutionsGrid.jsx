// SmartSolutions.jsx
import React from "react";

const services = [
  {
    title: 'Business Strategy & Transformation',
    details: 'We help redefine your business direction and implement impactful strategies.',
    image: '/EmpoweringImages/bs.jpg',
    icon: '/vectorimages/vector1.png'
  },
  {
    title: 'Digital Transformation & Automation',
    details: 'Automate operations with cutting-edge digital tools and AI-powered systems.',
    image: '/EmpoweringImages/dt.jpg',
    icon: '/vectorimages/vector2.png'
  },
  {
    title: 'Market Expansion & Growth Acceleration',
    details: 'Accelerate your reach and revenue through intelligent market positioning.',
    image: '/EmpoweringImages/me.png',
    icon: '/vectorimages/vector3.png'
  },
  {
    title: 'Financial Planning & Risk Management',
    details: 'Deliver memorable customer journeys with data-driven insights.',
    image: '/EmpoweringImages/fp.png',
    icon: '/vectorimages/vector4.png'
  },
  {
    title: 'Human Resource & Talent Optimization',
    details: 'Streamline internal processes to boost productivity and reduce costs.',
    image: '/EmpoweringImages/hr.png',
    icon: '/vectorimages/vector5.png'
  },
  {
    title: 'Brand Development & Marketing Strategy',
    details: 'Make informed decisions with real-time data dashboards and reporting.',
    image: '/EmpoweringImages/bd.png',
    icon: 'vectorimages/vector6.png'
  },
];

export default function SmartSolutions() {
  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Empowering Your Business with{" "}
        <span className="text-blue-600">Smart Solutions</span>
      </h2>
      <p className="text-black-600 font-semibold mb-10 max-w-2xl mx-auto">
        Our team of experts is dedicated to crafting customized business
        strategies that align with your vision and goals. We specialize in:
      </p>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative w-full sm:w-[380px] h-[300px] sm:h-[380px] rounded-xl overflow-hidden shadow-md group bg-cover bg-center"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              {/* Gradient base overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(20, 47, 146, 0.5) 41.9%, rgba(11, 25, 79, 0.42) 73.9%, rgba(6, 14, 44, 0.89) 89.4%)",
                }}
              ></div>

              {/* Dark hover overlay */}
              <div className="absolute inset-0 z-20 bg-[#060E2C]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text Content */}
              <div className="absolute inset-0 z-30 flex flex-col justify-end group-hover:justify-center items-start group-hover:items-center px-4 sm:px-6 transition-all duration-300 text-left group-hover:text-center">
                <div className="w-full max-w-[260px] mt-auto group-hover:mt-0 transition-all duration-300">
                  <h3 className="text-[24px] sm:text-[30px] font-semibold leading-snug text-white group-hover:text-[20px] group-hover:mb-6">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.details}
                  </p>
                </div>
              </div>

              {/* Optional Icon (bottom-right) */}
              <div className="absolute bottom-4 right-4 z-30 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-14 h-10 sm:w-16 sm:h-12"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


