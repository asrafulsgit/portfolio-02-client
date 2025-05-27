import React, { useEffect, useRef } from 'react'
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
  }
];
const Service_cards = () => {
  return (
    <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
    </div>
  )
}
const  ServiceCard =({ service, index })=> {
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
        transition-all duration-300 transform  hover:shadow-lg 
        ${service.borderHover} `}
      style={{ transform: "translateY(0) scale(1)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
      }}
    >
      <div
        className={`w-16 h-16 ${service.colorBg} rounded-lg flex items-center 
        justify-center mb-6 transition-colors duration-300 ${service.colorHoverBg}`}
      >
        <div className={`${service.iconColor} w-8 h-8 rounded`}></div>
      </div>
      <h3 className="text-xl font-[700] text-gray-900 mb-4 sora-family">{service.title}</h3>
      <p className="text-gray-600 mb-6 inter-family">{service.description}</p>
      <ul className="space-y-2 text-sm text-gray-600">
        {service.points.map((point, i) => (
          <li key={i} className="flex items-center inter-family">
            <span
              className={`${service.iconColor}  w-2 h-2 rounded-full mr-3 inline-block`}
            ></span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Service_cards
