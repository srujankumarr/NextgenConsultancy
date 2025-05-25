import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white ${
        scrolled ? "shadow-md" : ""
      } transition-shadow duration-300`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          {/* Logo section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="w-[281px] h-[121.93px]"
                src="/nexgenlogo.png"
                alt="NexGen Logo"
              />
            </Link>
          </div>

          {/* Desktop navigation (medium and large screens) */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6 ml-4">
          <Link
              to="/"
              className={`text-base lg:text-lg px-6 py-3 text-gray-900 hover:text-[#194aff] transition-colors duration-300 font-medium ${
                location.pathname === "/" ? "text-[#194aff]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-base lg:text-lg px-6 py-3 text-gray-900 hover:text-[#194aff] transition-colors duration-300 font-medium ${
                location.pathname === "/" ? "text-[#194aff]" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              to="/case-studies"
              className={`text-lg lg:text-lg px-6 py-3 text-gray-900 hover:text-[#194aff] transition-colors duration-300 font-medium ${
                location.pathname === "/" ? "text-[#194aff]" : ""
              }`}
            >
              Case Studies
            </Link>
            <Link
              to="/trends"
              className={`text-lg lg:text-lg px-6 py-3 text-gray-900 hover:text-[#194aff] transition-colors duration-300 font-medium ${
                location.pathname === "/" ? "text-[#194aff]" : ""
              }`}
            >
              Trends & Insights
            </Link>
            {/* <Link
              to="/contact"
              className={`text-lg lg:text-lg px-6 py-3 text-gray-900 hover:text-[#194aff] transition-colors duration-300 font-medium ${
                location.pathname === "/" ? "text-[#194aff]" : ""
              }`}
            >
              Contact
            </Link> */}
          </div>

          {/* CTA Button - visible on tablets and desktop */}
          <div className="hidden md:flex md:items-center">
            <Link
              to="/contact"
              className="ml-4 lg:ml-8 inline-flex items-center justify-center px-3 py-1.5 lg:px-4 lg:py-2 border border-transparent rounded-xl shadow-sm text-sm lg:text-base text-white bg-gradient-to-r from-[#194aff] to-[#9747ff] hover:from-[#0a2bb3] hover:to-[#7a29e6] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Get Consultant
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#194aff] transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`block pl-3 pr-4 py-2 text-base text-gray-900 hover:bg-gray-50 hover:text-[#194aff] hover:pl-4 transition-all duration-200 ${
              location.pathname === "/"
                ? "bg-gray-50 text-[#194aff] border-l-4 border-[#194aff]"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block pl-3 pr-4 py-2 text-base text-gray-900 hover:bg-gray-50 hover:text-[#194aff] hover:pl-4 transition-all duration-200 ${
              location.pathname === "/about"
                ? "bg-gray-50 text-[#194aff] border-l-4 border-[#194aff]"
                : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/case-study"
            className={`block pl-3 pr-4 py-2 text-base text-gray-900 hover:bg-gray-50 hover:text-[#194aff] hover:pl-4 transition-all duration-200 ${
              location.pathname === "/case-study"
                ? "bg-gray-50 text-[#194aff] border-l-4 border-[#194aff]"
                : ""
            }`}
          >
            Case Study
          </Link>
          <Link
            to="/trends"
            className={`block pl-3 pr-4 py-2 text-base text-gray-900 hover:bg-gray-50 hover:text-[#194aff] hover:pl-4 transition-all duration-200 ${
              location.pathname.includes("/trends")
                ? "bg-gray-50 text-[#194aff] border-l-4 border-[#194aff]"
                : ""
            }`}
          >
            Trends & Insights
          </Link>
          <Link
            to="/contact"
            className={`block pl-3 pr-4 py-2 text-base text-gray-900 hover:bg-gray-50 hover:text-[#194aff] hover:pl-4 transition-all duration-200 ${
              location.pathname === "/contact"
                ? "bg-gray-50 text-[#194aff] border-l-4 border-[#194aff]"
                : ""
            }`}
          >
            Contact
          </Link>
          {/* CTA Button for mobile */}
          <div className="mt-4 pl-3 pr-4 pb-2">
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-base text-white bg-gradient-to-r from-[#194aff] to-[#9747ff] hover:from-[#0a2bb3] hover:to-[#7a29e6] transition-all duration-300 hover:shadow-md transform hover:scale-105"
            >
              Get Consultant
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
