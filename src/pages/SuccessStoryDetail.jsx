import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Calendar, Users, TrendingUp, CheckCircle, Clock, DollarSign, Target, Lightbulb, Award } from "lucide-react";

const SuccessStoryDetail = () => {
  const { id } = useParams();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Success stories data with expanded content
  const stories = {
    "01": {
      id: "01",
      title: "Rapid Team Assembly for New Feature Development",
      subtitle: "How we helped a tech company assemble a complete development team in just two weeks",
      image: "/story1.png",
      challenge: "Client hired three separate programmers to kickstart a new feature from scratch.",
      challengeDetails: [
        "They needed three specialized programmers with specific technical skills",
        "The project had to start immediately with no delay",
        "Previous attempts to hire had failed due to skill mismatch",
        "Any delay would result in significant revenue loss"
      ],
      solution: "Recruit sourced and onboarded top candidates within two weeks.",
      solutionDetails: [
        "Rapid assessment of technical requirements and skill combinations",
        "Strategic sourcing using extensive talent network and AI-powered matching",
        "Intensive technical interviews and cultural fit assessment",
        "Seamless onboarding coordination with client's HR team"
      ],
      outcome: "All three positions filled, and the project launched on time and within budget.",
      outcomeDetails: [
        "Project launched successfully on time with all specifications met",
        "Perfect team integration with existing development team",
        "Budget compliance with no unexpected costs or delays",
        "Long-term partnership established for future recruitment needs"
      ],
      metrics: [
        { icon: Clock, value: "2 Weeks", label: "Time to Fill", color: "blue" },
        { icon: Users, value: "3", label: "Positions Filled", color: "green" },
        { icon: DollarSign, value: "On Budget", label: "Project Delivery", color: "purple" }
      ],
      learnings: [
        "Speed without compromise - rapid recruitment doesn't mean sacrificing quality",
        "Technical precision - understanding exact requirements is crucial",
        "Cultural integration - team fit is as important as technical skills",
        "Partnership approach - treating recruitment as partnership leads to better outcomes"
      ]
    },
    "02": {
      id: "02",
      title: "Fintech Team Assembly Under Pressure",
      subtitle: "Building a high-performing development team for a growing fintech company",
      image: "/story2.png",
      challenge: "Fintech development team was highly skilled engineers on short notice.",
      challengeDetails: [
        "Urgent need for specialized fintech developers with regulatory knowledge",
        "Critical project deadline with no room for delays",
        "Required expertise in blockchain, security, and compliance",
        "Previous recruitment efforts had failed to find suitable candidates"
      ],
      solution: "Our expert recruiters matched the company with pre-vetted tech talent in record time.",
      solutionDetails: [
        "Comprehensive fintech talent mapping and assessment",
        "Pre-vetted candidate pool with proven track records",
        "Specialized screening for regulatory and compliance knowledge",
        "Rapid onboarding process with immediate project integration"
      ],
      outcome: "A fully functional team, delivering better product development and growth.",
      outcomeDetails: [
        "Complete fintech development team assembled in record time",
        "Enhanced product development capabilities and innovation",
        "Improved project delivery timelines and quality",
        "Established foundation for future team expansion"
      ],
      metrics: [
        { icon: Clock, value: "1 Week", label: "Time to Fill", color: "blue" },
        { icon: Users, value: "5", label: "Engineers Hired", color: "green" },
        { icon: TrendingUp, value: "40%", label: "Productivity Boost", color: "purple" }
      ],
      learnings: [
        "Industry expertise matters - fintech requires specialized knowledge",
        "Pre-vetting saves time - quality candidates are worth the investment",
        "Regulatory compliance is non-negotiable in fintech",
        "Team dynamics are crucial for fintech project success"
      ]
    },
    "03": {
      id: "03",
      title: "AI Platform Development Team Success",
      subtitle: "Supporting a startup's journey from concept to cutting-edge AI product",
      image: "/story3.png",
      challenge: "A startup in need of specialized developers to build a complex AI-driven platform.",
      challengeDetails: [
        "Required niche AI/ML developers with specific technical expertise",
        "Limited budget and resources for extensive recruitment",
        "Complex technical requirements including deep learning and NLP",
        "Need for developers who could work in a fast-paced startup environment"
      ],
      solution: "Recruit sourced niche talent with the exact skill set needed.",
      solutionDetails: [
        "Targeted search for AI/ML specialists with startup experience",
        "Technical assessment focusing on practical AI implementation skills",
        "Cultural fit evaluation for startup environment compatibility",
        "Flexible engagement models to accommodate budget constraints"
      ],
      outcome: "The startup successfully launched a cutting-edge AI product and secured new investors.",
      outcomeDetails: [
        "AI platform successfully developed and launched to market",
        "Product received positive feedback and user adoption",
        "Successfully secured additional funding from investors",
        "Established strong foundation for future growth and expansion"
      ],
      metrics: [
        { icon: Clock, value: "3 Weeks", label: "Time to Fill", color: "blue" },
        { icon: Users, value: "4", label: "AI Developers", color: "green" },
        { icon: Award, value: "100%", label: "Project Success", color: "purple" }
      ],
      learnings: [
        "Niche expertise is invaluable - specialized skills drive innovation",
        "Startup culture fit is critical - technical skills alone aren't enough",
        "Flexible engagement models can accommodate budget constraints",
        "Success breeds success - good hires attract more investment"
      ]
    },
    "04": {
      id: "04",
      title: "Global E-commerce Expansion Success",
      subtitle: "Supporting international growth through strategic talent acquisition",
      image: "/story4.png",
      challenge: "A growing e-commerce business required marketing and designers to expand globally.",
      challengeDetails: [
        "Need for marketing professionals with international market knowledge",
        "Required designers who understood cultural nuances and preferences",
        "Expansion into multiple new markets simultaneously",
        "Need for talent that could work across different time zones"
      ],
      solution: "Candidate sourced designers who understood cultural nuances and market differences.",
      solutionDetails: [
        "International talent search with cultural competency assessment",
        "Multi-language and multi-cultural team building approach",
        "Remote work setup and cross-timezone collaboration tools",
        "Cultural training and market-specific knowledge development"
      ],
      outcome: "A 45% increase in international user engagement and higher conversions.",
      outcomeDetails: [
        "Successful expansion into 5 new international markets",
        "45% increase in international user engagement",
        "Higher conversion rates in new markets",
        "Established sustainable international growth framework"
      ],
      metrics: [
        { icon: Users, value: "8", label: "Team Members", color: "blue" },
        { icon: TrendingUp, value: "45%", label: "Engagement Boost", color: "green" },
        { icon: Target, value: "5", label: "New Markets", color: "purple" }
      ],
      learnings: [
        "Cultural competency is as important as technical skills for global expansion",
        "Remote team building requires different strategies and tools",
        "Market-specific knowledge drives better user engagement",
        "International expansion success depends on local talent insights"
      ]
    }
  };

  const story = stories[id];

  if (!story) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Story Not Found</h1>
          <p className="text-gray-600 mb-8">The success story you're looking for doesn't exist.</p>
          <Link
            to="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600",
      green: "bg-green-50 text-green-600",
      purple: "bg-purple-50 text-purple-600",
      orange: "bg-orange-50 text-orange-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Link
          to="/case-studies"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              Success Story #{story.id}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {story.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {story.subtitle}
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {story.metrics.map((metric, index) => (
                <div key={index} className={`text-center p-4 rounded-lg ${getColorClasses(metric.color)}`}>
                  <metric.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src={story.image}
              alt={`Success story ${story.id}`}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The <span className="text-red-600">Challenge</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {story.challenge}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {story.challengeDetails.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our <span className="text-blue-600">Solution</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {story.solution}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {story.solutionDetails.map((detail, index) => (
                      <div key={index} className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-3">
                          Phase {index + 1}: {detail.split(':')[0]}
                        </h4>
                        <p className="text-blue-800 text-sm">{detail.split(':')[1] || detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The <span className="text-green-600">Outcome</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {story.outcome}
                  </h3>
                  <div className="space-y-6">
                    {story.outcomeDetails.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-green-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-green-900">
                            {detail.split(':')[0]}
                          </h4>
                          <p className="text-green-800 text-sm">
                            {detail.split(':')[1] || detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key <span className="text-indigo-600">Learnings</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {story.learnings.map((learning, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {learning.split(' - ')[0]}
                  </h3>
                  <p className="text-gray-700">
                    {learning.split(' - ')[1] || learning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-xl shadow-lg text-lg font-medium text-blue-600 bg-white hover:bg-gray-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started Today
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 border border-white rounded-xl text-lg font-medium text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View More Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStoryDetail;
