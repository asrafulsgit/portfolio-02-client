import React from 'react'
import { useInView } from 'react-intersection-observer'
const Contact = () => {
const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <div ref={ref}  className={`text-center mt-16 ${inView && 'animate-fade-in-up'}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 sora-family">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto inter-family">
            Let's discuss your requirements and create something amazing
            together. Get a free consultation and project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center inter-family">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white
           px-8 py-3 rounded-lg font-semibold transition-all 
           duration-300 transform cursor-pointer"
            >
              Get Free Quote
            </button>
            <button
              className="border border-gray-300 hover:border-gray-400
           text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold
            transition-all duration-300 hover:bg-gray-50 cursor-pointer"
            >
              View Portfolio
            </button>
          </div>
        </div>
  )
}

export default Contact
