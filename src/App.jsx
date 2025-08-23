import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFount";
import Contact from "./pages/Contact";
import Trends from "./pages/Trends";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Services from "./pages/Services";
import SuccessStoryDetail from "./pages/SuccessStoryDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/services" element={<Services />} />
        <Route path="/success-story/:id" element={<SuccessStoryDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
