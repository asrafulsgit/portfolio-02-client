import React, { useEffect } from 'react';

const About = () => {
  const skillsData = [
                { title: 'Frontend', colorClass: 'text-blue-600', skills: 'React, JavaScript,  TypeScript' },
                { title: 'Backend', colorClass: 'text-green-600', skills: 'Node.js, MongoDB, PostgreSQL' },
                { title: 'Tools', colorClass: 'text-orange-600', skills: 'Git, AI, VS' },
              ]
  return (
    <section id="about" className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900
           mb-4 sora-family">About</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto
          inter-family">
            Passionate developer with a mission to create exceptional digital experiences
            that solve real-world problems and drive business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900
              sora-family">Crafting Code, Building Dreams</h3>
              <p className="text-gray-600 leading-relaxed inter-family">
                With over 3 years of experience in full-stack development, I specialize in creating 
                scalable web applications using modern technologies like React, Node.js, and cloud platforms.
              </p>
              <p className="text-gray-600 leading-relaxed inter-family">
                My approach combines technical expertise with creative problem-solving to deliver 
                solutions that not only work flawlessly but also provide exceptional user experiences.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6 inter-family">
              {skillsData.map((skill, i) =>{ 
                const { title, colorClass, skills } = skill;
                return(<div
                  key={title}
                  
                  className="bg-white p-6 rounded-lg border 
                  border-gray-200 hover:shadow-md transition-shadow 
                  duration-300 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`${colorClass} text-2xl font-bold mb-2`}>{title}</div>
                  <p className="text-gray-600 text-sm">{skills}</p>
                </div>)
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4  ">
              <button
            
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 
                py-3 rounded-lg font-semibold transition-all duration-300 
                transform"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRyYWl0JTI1MjBjb25maWRlbnQlMjUyMG1vZGVybnxlbnwxfHx8fDE3NDgyMzM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional developer portrait confident modern"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>

            {/* Floating Images */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <img
 
                src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRyYWl0JTI1MjBjb25maWRlbnQlMjUyMG1vZGVybnxlbnwxfHx8fDE3NDgyMzM3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer workspace with favorite mug"
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ transform: 'translateY(90.1px) rotate(12deg)' }}
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
