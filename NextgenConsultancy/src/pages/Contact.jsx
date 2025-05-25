import React, { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import Navbar from "../components/Navbar";
import LocationMap from "../components/LocationMap";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9()-\s]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitting(true);

      try {
        const scriptURL =
          "https://script.google.com/macros/s/AKfycbyltH4t68HujZCqSxaHrUUjfyQnC6if96LOyANrzpDW7IYY75RQTJXli8dP262UZHPx/exec";

        const formDataObject = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        };

        const queryString = new URLSearchParams(formDataObject).toString();
        const finalURL = `${scriptURL}?${queryString}`;

        const jsonpCallback = `callback_${Date.now()}`;
        const script = document.createElement("script");
        script.src = `${finalURL}&callback=${jsonpCallback}`;

        window[jsonpCallback] = function (response) {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });

          setTimeout(() => {
            setSubmitted(false);
          }, 5000);

          document.body.removeChild(script);
          delete window[jsonpCallback];
        };

        document.body.appendChild(script);

        script.onerror = function () {
          alert("An error occurred. Please try again later.");
          document.body.removeChild(script);
          delete window[jsonpCallback];
          setSubmitting(false);
        };
      } catch (error) {
        alert("An error occurred. Please try again later.");
        setSubmitting(false);
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20">
            {/* Contact Information Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
                Have Questions?
              </h2>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8">
                Contact Information
              </h1>

              <p className="text-gray-700 mb-8 sm:mb-12 text-base sm:text-lg">
                Plan upon yet way get cold spot its week. Almost do am or limits
                hearts. Resolve parties but why she shewing.
              </p>

              <div className="space-y-6 sm:space-y-10">
                <div className="flex items-center flex-wrap sm:flex-nowrap">
                  <div className="bg-[#194aff] rounded-full p-3 sm:p-4 flex items-center justify-center mr-4 sm:mr-6 mb-2 sm:mb-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <span className="text-base sm:text-lg w-full sm:w-auto">
                    +1 984-355-0788
                  </span>
                </div>

                <div className="flex items-start sm:items-center flex-wrap sm:flex-nowrap">
                  <div className="bg-[#194aff] rounded-full p-3 sm:p-4 flex items-center justify-center mr-4 sm:mr-6 mb-2 sm:mb-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <span className="text-base sm:text-lg">
                    3347 Belterra Point Dr,New Hill, NC 27562
                  </span>
                </div>

                <div className="flex items-start sm:items-center flex-wrap sm:flex-nowrap">
                  <div className="bg-[#194aff] rounded-full p-3 sm:p-4 flex items-center justify-center mr-4 sm:mr-6 mb-2 sm:mb-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <span className="text-base sm:text-lg break-all sm:break-normal">
                    operations@newdomainname.com
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="w-full lg:w-2/5 mt-12 lg:mt-0">
              <div className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-lg shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                  Send Us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-3 sm:p-4 bg-green-100 text-green-700 rounded-lg text-sm sm:text-base">
                    Thank you! Your message has been submitted successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 sm:p-4 border-b ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } bg-transparent outline-none text-sm sm:text-base`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 sm:p-4 border-b ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } bg-transparent outline-none text-sm sm:text-base`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 sm:p-4 border-b ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } bg-transparent outline-none text-sm sm:text-base`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <textarea
                      name="message"
                      placeholder="Tell Us about Project"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-3 sm:p-4 border-b ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } bg-transparent outline-none resize-none h-20 sm:h-24 text-sm sm:text-base`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-to-r from-[#194aff] to-[#9747ff] hover:from-[#0a2bb3] hover:to-[#7a29e6] text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 w-full text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Submitting..." : "Get In Touch"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LocationMap />
      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
