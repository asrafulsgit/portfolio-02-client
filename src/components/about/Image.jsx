import React from 'react'
import { useInView } from "react-intersection-observer";
const Image = () => {
 const { ref, inView, entry } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className={`relative ${inView && 'animate-fade-in-up'}`}>
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRyYWl0JTI1MjBjb25maWRlbnQlMjUyMG1vZGVybnxlbnwxfHx8fDE3NDgyMzM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional developer portrait confident modern"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-xl overflow-hidden shadow-lg border-4 border-white transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <img
 
                src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRyYWl0JTI1MjBjb25maWRlbnQlMjUyMG1vZGVybnxlbnwxfHx8fDE3NDgyMzM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elegant professional developer"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ transform: 'translateY(180.2px) rotate(-6deg)' }}
              />
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full -z-10 opacity-50"></div>
     </div>
  )
}

export default Image
