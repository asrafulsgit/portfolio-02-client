import React, { useState } from 'react'
import './portfolio.css'
import Modal from './Modal';
import { useInView } from "react-intersection-observer";
import Projects from './Projects';
import Contact from './Contact';

const Portfolio = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (

  <section id="portfolio" className="pt-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div ref={ref} className={`text-center mb-16  ${inView && 'animate-fade-in-up'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sora-family">Portfolio</h2>
        <p className="text-[18px] sm:text-xl text-gray-600 max-w-3xl mx-auto inter-family">
          Showcasing innovative solutions and successful projects that demonstrate
          technical expertise and creative problem-solving.
        </p>
      </div>
      
      {/* portfolios */}
      <Projects />

      {/* contact for project */}
      <Contact />

    </div>




   

  </section>

  )
}

export default Portfolio
