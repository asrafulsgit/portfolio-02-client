import React from "react";

const testimonials = [
  {
    initials: "JS",
    name: "John Smith",
    role: "CEO, TechStart",
    bgColor: "bg-blue-500",
    quote:
      "Exceptional work on our e-commerce platform. The attention to detail and technical expertise exceeded our expectations. Delivered on time and within budget.",
  },
  {
    initials: "MJ",
    name: "Maria Johnson",
    role: "Product Manager, InnovateCorp",
    bgColor: "bg-green-500",
    quote:
      "Outstanding full-stack development skills. Built our entire web application from scratch with modern technologies. Highly recommend for complex projects.",
  },
  {
    initials: "DW",
    name: "David Wilson",
    role: "Founder, StartupLab",
    bgColor: "bg-purple-500",
    quote:
      "Incredible problem-solving abilities and clean code architecture. Transformed our MVP into a scalable production application. A true professional.",
  },
  {
    initials: "SB",
    name: "Sarah Brown",
    role: "CTO, DigitalFlow",
    bgColor: "bg-red-500",
    quote:
      "Excellent communication and project management. Delivered a complex dashboard application with real-time features. Will definitely work together again.",
  },
  {
    initials: "RT",
    name: "Robert Taylor",
    role: "Director, CloudSolutions",
    bgColor: "bg-indigo-500",
    quote:
      "Top-notch development skills with modern frameworks. Built our mobile app and web platform seamlessly. Great attention to user experience and performance.",
  },
  {
    initials: "LG",
    name: "Lisa Garcia",
    role: "VP Engineering, DataTech",
    bgColor: "bg-orange-500",
    quote:
      "Impressive technical depth and reliability. Handled our backend infrastructure and API development flawlessly. A valuable addition to any development team.",
  },
];



const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          What clients say about working with me and the results we've achieved together on their projects.
        </p>
      </div>

      <div className="w-full h-96 relative overflow-hidden">
        <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
          {testimonials.concat(testimonials.slice(0, 3)).map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 mx-4 bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              style={{
                transform: "translateY(0px) scale(1)",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 ${t.bgColor} rounded-full flex items-center justify-center text-white font-bold mr-4`}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed">"{t.quote}"</blockquote>
              <div className="flex text-yellow-400 mt-4">
                <span>★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

