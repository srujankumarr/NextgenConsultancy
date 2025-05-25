import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full text-center">
          {/* 404 Number */}
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#194aff] to-[#9747ff]">
            404
          </h1>

          {/* Error Message */}
          <h2 className="mt-8 text-3xl font-bold text-gray-900">
            Page not found
          </h2>

          {/* Supportive text */}
          <p className="mt-4 text-lg text-gray-600">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved or doesn't exist.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#194aff] to-[#9747ff] hover:from-[#0a2bb3] hover:to-[#7a29e6] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#194aff] rounded-md text-base font-medium text-[#194aff] bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
