import React, { useEffect, useRef } from "react";

const servicesData = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive interfaces using React, Vue.js, and cutting-edge CSS frameworks. Optimized for performance and user experience.",
    colorBg: "bg-blue-100",
    colorHoverBg: "group-hover:bg-blue-200",
    iconColor: "bg-blue-600",
    borderHover: "hover:border-blue-300",
    points: [
      "React & Vue.js Applications",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Scalable server-side solutions with Node.js, Python, and robust database architecture. Secure and efficient API development.",
    colorBg: "bg-green-100",
    colorHoverBg: "group-hover:bg-green-200",
    iconColor: "bg-green-600",
    borderHover: "hover:border-green-300",
    points: [
      "RESTful API Development",
      "Database Design",
      "Server Architecture",
    ],
  },
  {
    title: "Full Stack Solutions",
    description:
      "End-to-end web applications combining frontend and backend expertise. Complete project lifecycle management.",
    colorBg: "bg-purple-100",
    colorHoverBg: "group-hover:bg-purple-200",
    iconColor: "bg-purple-600",
    borderHover: "hover:border-purple-300",
    points: [
      "Complete Web Applications",
      "Project Management",
      "Technical Consulting",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS deployment, containerization with Docker, and CI/CD pipeline setup. Scalable cloud infrastructure solutions.",
    colorBg: "bg-orange-100",
    colorHoverBg: "group-hover:bg-orange-200",
    iconColor: "bg-orange-600",
    borderHover: "hover:border-orange-300",
    points: ["AWS Deployment", "Docker Containerization", "CI/CD Pipelines"],
  },
  {
    title: "E-commerce Development",
    description:
      "Custom online stores with payment integration, inventory management, and optimized checkout experiences.",
    colorBg: "bg-red-100",
    colorHoverBg: "group-hover:bg-red-200",
    iconColor: "bg-red-600",
    borderHover: "hover:border-red-300",
    points: [
      "Payment Integration",
      "Inventory Management",
      "Shopping Cart Systems",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using React Native and Progressive Web Apps. Native performance with web technologies.",
    colorBg: "bg-indigo-100",
    colorHoverBg: "group-hover:bg-indigo-200",
    iconColor: "bg-indigo-600",
    borderHover: "hover:border-indigo-300",
    points: [
      "React Native Apps",
      "Progressive Web Apps",
      "Cross-platform Solutions",
    ],
  },
];

const processSteps = [
  {
    number: 1,
    title: "Discovery",
    description: "Understanding your requirements and project goals",
    colorBg: "bg-blue-600",
  },
  {
    number: 2,
    title: "Planning",
    description: "Creating detailed project roadmap and architecture",
    colorBg: "bg-green-600",
  },
  {
    number: 3,
    title: "Development",
    description: "Agile development with regular progress updates",
    colorBg: "bg-purple-600",
  },
  {
    number: 4,
    title: "Deployment",
    description: "Testing, optimization, and seamless launch",
    colorBg: "bg-orange-600",
  },
];

function ServiceCard({ service, index }) {
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.animationDelay = `${index * 0.1}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(card);

    return () => {
      observer.unobserve(card);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group bg-gray-50 p-8 rounded-xl border border-gray-200 
        transition-all duration-300 transform  hover:shadow-lg ${service.borderHover}`}
      style={{ transform: "translateY(0) scale(1)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
      }}
    >
      <div
        className={`w-16 h-16 ${service.colorBg} rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${service.colorHoverBg}`}
      >
        <div className={`${service.iconColor} w-8 h-8 rounded`}></div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <ul className="space-y-2 text-sm text-gray-600">
        {service.points.map((point, i) => (
          <li key={i} className="flex items-center">
            <span
              className={`${service.iconColor} w-2 h-2 rounded-full mr-3 inline-block`}
            ></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({ step, index }) {
  const stepRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    const stepEl = stepRef.current;
    if (!stepEl) return;
    stepEl.style.animationDelay = `${index * 0.2}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const circle = circleRef.current;
            if (!circle) return;
            circle.classList.add("animate-pulse");
            setTimeout(() => {
              circle.classList.remove("animate-pulse");
              circle.classList.add("animate-bounce");
            }, 500);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(stepEl);

    return () => {
      observer.unobserve(stepEl);
    };
  }, [index]);

  return (
    <div
      ref={stepRef}
      className="text-center animate-fade-in-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div
        ref={circleRef}
        className={`${step.colorBg} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold animate-bounce w-16 h-16`}
      >
        {step.number}
      </div>
      <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
      <p className="text-gray-600 text-sm">{step.description}</p>
    </div>
  );
}

const Services = () => {
  // Scroll handlers for buttons
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive development solutions tailored to your business needs.
            From concept to deployment, I deliver excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              My Development Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality delivery and client
              satisfaction from initial consultation to final deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        <div class="text-center mt-16">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing
            together. Get a free consultation and project estimate.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white
           px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </button>
            <button
              class="border border-gray-300 hover:border-gray-400
           text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold
            transition-all duration-300 hover:bg-gray-50"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
