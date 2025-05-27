import React from 'react'
import { useInView } from "react-intersection-observer";

const Header = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={`text-center mb-16 ${inView && 'animate-fade-in-up'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 
          mb-4 sora-family">Contact</h2>
          <p className="text-[18px] sm:text-xl text-gray-600 max-w-3xl mx-auto
          inter-family">
            Ready to bring your project to life? Let's discuss your requirements
            and create something exceptional together.
          </p>
        </div>
  )
}

export default Header
