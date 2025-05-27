import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import './footer.css'
const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState(false);
   

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubscribe = () => {
    if (!email || !isValidEmail(email)) {
      setEmailError(true);
      setTimeout(() => setEmailError(false), 3000);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => {
        setSubscribed(false);
        setIsSubmitting(false);
      }, 2000);
    }, 2000);
  };
  const [isScroll,setIsScroll]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    if (target) {
      window.scrollTo({ top: target.offsetTop - headerHeight, behavior: "smooth" });
    }
  };
  const contactInfo =[
    {
                color: "bg-blue-600",
                text: "hello@developer.com",
              }, {
                color: "bg-green-600",
                text: "+1 (555) 123-4567",
              }, {
                color: "bg-purple-600",
                text: "San Francisco, CA",
              }]
  return (
    <footer id="footer" className="bg-gray-900 text-white py-16" 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 animate-fade-in-up">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 sora-family">DevCraft</h3>
            <p className="text-gray-300 leading-relaxed max-w-md inter-family">
              Full-stack developer specializing in modern web applications.
              Transforming ideas into scalable digital solutions with cutting-edge technologies.
            </p>
            <div className="flex space-x-4 mt-6">
              {["Li", "Gh", "Tw", "Em"].map((label, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`w-10 h-10 bg-gray-800 hover:${
                    label === "Li"
                      ? "bg-blue-600"
                      : label === "Tw"
                      ? "bg-blue-400"
                      : label === "Em"
                      ? "bg-red-600"
                      : "bg-gray-700"
                  } rounded-lg flex items-center justify-center 
                  transition-colors duration-300 inter-family`}
                >
                  <span className="text-sm font-bold">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 sora-family">Quick Links</h4>
            <nav className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, `#${label.toLowerCase()}`)}
                  className="block text-gray-300 hover:text-white 
                  transition-colors font-[300] duration-300 inter-family"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 sora-family">Get In Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div className="flex items-center" key={idx}>
                  <div className={`w-5 h-5 ${info.color} rounded mr-3`} />
                  <span className="text-gray-300 font-[300] inter-family">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 mb-12 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-[18px] font-medium mb-2 sora-family">Stay Updated</h4>
              <p className="text-gray-300 font-[300] inter-family">
                Get the latest insights on web development trends and project updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`flex-1 px-4 py-3 bg-gray-700 border 
                  ${emailError ? "ring-2 ring-red-500" : "border-gray-600"} rounded-lg text-white placeholder-gray-400 outline-none transition-colors duration-300`}
              />
              <button
                onClick={handleSubscribe}
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap ${
                  subscribed
                    ? "bg-green-600"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                } cursor-pointer`}
              >
                {isSubmitting ? "Subscribing..." : subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up">
          {["Frontend", "Backend", "DataBase", "Cloud"].map((service, index) => (
            <div className="text-center" key={index}>
              <div
                className={`w-12 h-12 ${[
                  "bg-blue-600",
                  "bg-green-600",
                  "bg-purple-600",
                  "bg-orange-600",
                ][index]} rounded-lg flex items-center justify-center 
                mx-auto mb-3 footer-icon`}
                style={{
                  animation: "float 3s ease-in-out 0s infinite normal none running",
                }}
              >
                <div className="w-6 h-6 bg-white rounded" />
              </div>
              <h5 className="font-semibold mb-1 sora-family">{service}</h5>
              <p className="text-gray-400 text-sm inter-family">
                {[
                  "React, Next",
                  "Node.js",
                  "MongoDB, PostgreSQL",
                  "AWS, Docker",
                ][index]}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0 inter-family">
              © 2025 DevCraft. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
                <Link
                  key={label}
                  className="text-gray-400 hover:text-white 
                  transition-colors duration-300 inter-family"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <button
          id="back-to-top"
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 w-12 h-12 bg-blue-600
           hover:bg-blue-700 text-white rounded-full 
           ${isScroll ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}
           shadow-lg transition-all duration-300 transform 
           hover:scale-110 z-50`}
        >
          <span className="text-xl">↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;