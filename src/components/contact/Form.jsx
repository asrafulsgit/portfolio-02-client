import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim() || !isValidEmail(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.message.trim())
      newErrors.message = "Please describe your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    });

    setTimeout(() => setSuccess(false), 5000);
  };
  return (
    <>
      <div
        className="bg-white rounded-2xl p-8 shadow-sm border
           border-gray-200 animate-fade-in-up"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6 sora-family">
          Get In Touch
        </h3>
        <form className="space-y-6 inter-family" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 
              rounded-lg   outline-none
               focus:border-blue-500 transition-colors duration-300"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 
              rounded-lg outline-none
               focus:border-blue-500 transition-colors duration-300"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 
              rounded-lg outline-none focus:border-blue-500 
              transition-colors duration-300"
            >
              <option value="">Select project type</option>
              <option value="web-app">Web Application</option>
              <option value="mobile-app">Mobile Application</option>
              <option value="ecommerce">E-commerce Platform</option>
              <option value="api">API Development</option>
              <option value="consulting">Technical Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 
              rounded-lg outline-none  focus:border-blue-500 transition-colors duration-300"
            >
              <option value="">Select budget range</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
               outline-none focus:border-blue-500 transition-colors duration-300 resize-vertical"
              placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700
             text-white font-semibold py-3 px-6 rounded-lg
              transition-all duration-300 transform cursor-pointer
              focus:ring-offset-2"
          >
            Send Message
          </button>

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              Thank you! Your message has been sent successfully. I'll get back
              to you within 24 hours.
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Form;
