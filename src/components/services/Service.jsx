import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Service_cards from "./Service_cards";
import './service.css'
import Process from "./Process";
import Contact from "./Contact";


const Services = () => {
const { ref, inView, entry } = useInView({ triggerOnce: true });
  return (
    <section id="service-section" className="pb-15 pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className={`text-center mb-16 ${inView && 'animate-fade-in-up'} `}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900
           mb-4 sora-family">
            Services
          </h2>
          <p className="text-[18px] sm:text-xl text-gray-600 max-w-3xl mx-auto inter-family">
            Comprehensive development solutions tailored to your business needs.
            From concept to deployment, I deliver excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <Service_cards />

        {/* Process Section */}
        <Process />
        {/* contact for project */}
        <Contact />
      </div>
    </section>
  );
};




export default Services;
