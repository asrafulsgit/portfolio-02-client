import React, { useState } from 'react';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !isValidEmail(formData.email))
      newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Please describe your project';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSuccess(true);
    setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your project to life? Let's discuss your requirements
            and create something exceptional together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
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
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-vertical"
                  placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>

              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </div>

          {/* You can convert and include the right-hand contact information/images in similar fashion here */}
              <div className="space-y-8">
  {/* Contact Info */}
  <div
    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 animate-fade-in-up"
    style={{ animationDelay: "0.2s" }}
  >
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>

    <div className="space-y-6">
      {/* Email */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
          <div className="w-6 h-6 bg-blue-600 rounded"></div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Email</h4>
          <p className="text-gray-600">hello@developer.com</p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
          <div className="w-6 h-6 bg-green-600 rounded"></div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Phone</h4>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
          <div className="w-6 h-6 bg-purple-600 rounded"></div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Location</h4>
          <p className="text-gray-600">San Francisco, CA</p>
        </div>
      </div>

      {/* Response Time */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
          <div className="w-6 h-6 bg-orange-600 rounded"></div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Response Time</h4>
          <p className="text-gray-600">Within 24 hours</p>
        </div>
      </div>
    </div>
  </div>

  {/* Images */}
  <div className="space-y-4">
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1607294846590-fd005d7973e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGV2ZWxvcGVyJTI1MjBjb250YWN0JTI1MjBmb3JtJTI1MjBtb2Rlcm4lMjUyMG1pbmltYWwlMjUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NDgyMzQxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Developer working with headphones in modern workspace"
        className="w-full h-48 object-cover"
        loading="lazy"
      />
    </div>

    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1622674777904-386b3ef30c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGV2ZWxvcGVyJTI1MjBjb250YWN0JTI1MjBmb3JtJTI1MjBtb2Rlcm4lMjUyMG1pbmltYWwlMjUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NDgyMzQxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Team meeting discussing app development collaboration"
        className="w-full h-48 object-cover"
        loading="lazy"
      />
    </div>
  </div>

  {/* Social Links */}
  <div
    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 animate-fade-in-up"
    style={{ animationDelay: "0.4s" }}
  >
    <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Me</h3>
    <div className="flex space-x-4">
      <a
        href="#"
        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
      >
        <span className="text-sm font-bold">Li</span>
      </a>
      <a
        href="#"
        className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
      >
        <span className="text-sm font-bold">Gh</span>
      </a>
      <a
        href="#"
        className="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
      >
        <span className="text-sm font-bold">Tw</span>
      </a>
      <a
        href="#"
        className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
      >
        <span className="text-sm font-bold">Em</span>
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
