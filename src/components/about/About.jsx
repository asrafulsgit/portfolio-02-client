import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import './about.css'
import Tools from './Tools';
import Image from './Image';
const About = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });
 
  return (
    <section  id="about-section" className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className={`text-center mb-8 sm:mb-16 ${inView && 'animate-fade-in-up'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900
           mb-4 sora-family">About</h2>
          <p className={`text-[18px] sm:text-xl text-gray-600 max-w-3xl mx-auto
          inter-family`}>
            Passionate developer with a mission to create exceptional digital experiences
            that solve real-world problems and drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <Tools />

          {/* Right Content - Images */}
          <Image />
        </div>
      </div>
    </section>
  );
};

export default About;









// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             Passionate developer with a love for creating innovative solutions and beautiful user experiences.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column */}
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
//             <p className="text-gray-600 mb-6">
//               With over 3 years of experience in web development, I specialize in creating modern, responsive applications using React, Node.js, and cutting-edge technologies.
//             </p>
//             <p className="text-gray-600 mb-8">
//               I believe in writing clean, maintainable code and delivering exceptional user experiences that make a real impact.
//             </p>

//             {/* Skills */}
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
//                 <p className="text-sm text-gray-600">React, TypeScript, Tailwind CSS</p>
//               </div>
//               <div className="bg-green-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
//                 <p className="text-sm text-gray-600">Node.js, Express, MongoDB</p>
//               </div>
//               <div className="bg-purple-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2">Design</h4>
//                 <p className="text-sm text-gray-600">Figma, Adobe XD, UI/UX</p>
//               </div>
//               <div className="bg-orange-50 p-4 rounded-lg">
//                 <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
//                 <p className="text-sm text-gray-600">Git, Docker, AWS</p>
//               </div>
//             </div>

//             {/* Resume Button */}
//             <a
//               href="#"
//               className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                 />
//               </svg>
//               Download Resume
//             </a>
//           </div>

//           {/* Right Column: Stats */}
//           <div className="bg-gray-50 p-8 rounded-2xl">
//             <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">By the Numbers</h3>

//             <div className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">Projects Completed</span>
//                 <span className="text-2xl font-bold text-blue-600">50+</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">Years Experience</span>
//                 <span className="text-2xl font-bold text-green-600">3+</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">Happy Clients</span>
//                 <span className="text-2xl font-bold text-purple-600">25+</span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <span className="text-gray-600">Code Commits</span>
//                 <span className="text-2xl font-bold text-orange-600">1000+</span>
//               </div>
//             </div>

//             {/* Progress Bars */}
//             <div className="mt-8 space-y-4">
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-gray-700">React</span>
//                   <span className="text-sm text-gray-500">95%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }} />
//                 </div>
//               </div>
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-gray-700">Node.js</span>
//                   <span className="text-sm text-gray-500">90%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }} />
//                 </div>
//               </div>
//               <div>
//                 <div className="flex justify-between mb-1">
//                   <span className="text-sm font-medium text-gray-700">UI/UX Design</span>
//                   <span className="text-sm text-gray-500">85%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
