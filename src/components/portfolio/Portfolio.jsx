import React, { useState } from 'react'
import './portfolio.css'
const Portfolio = () => {
// const projects = [
//   {
//     title: "Analytics Dashboard",
//     description: "Real-time data visualization platform with interactive charts and comprehensive reporting features.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
//     technologies: ["React", "Node.js", "D3.js"],
//     category: "web"
//   },
//   {
//     title: "Team Collaboration Hub",
//     description: "Comprehensive workspace solution for remote teams with real-time communication and project management.",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
//     technologies: ["Vue.js", "Firebase", "Socket.io"],
//     category: "web"
//   },
//   {
//     title: "Online Code Editor",
//     description: "Browser-based IDE with syntax highlighting, live preview, and collaborative coding features.",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
//     technologies: ["TypeScript", "Monaco Editor", "WebSockets"],
//     category: "web"
//   },
//   {
//     title: "E-commerce Platform",
//     description: "Full-featured online marketplace with advanced search, payment processing, and vendor management.",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
//     technologies: ["Next.js", "Stripe", "PostgreSQL"],
//     category: "ecommerce"
//   },
//   {
//     title: "Fitness Tracking App",
//     description: "Cross-platform mobile application for workout tracking, nutrition monitoring, and progress analytics.",
//     image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
//     technologies: ["React Native", "Redux", "SQLite"],
//     category: "mobile"
//   }
// ];
const projects = [
  {
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?...',
    alt: 'Analytics Dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform with interactive charts and comprehensive reporting features.',
    overlayColor: 'bg-blue-600',
    textColor: 'text-blue-600',
    tags: [
      { label: 'React', bg: 'bg-blue-100', text: 'text-blue-800' },
      { label: 'Node.js', bg: 'bg-green-100', text: 'text-green-800' },
      { label: 'D3.js', bg: 'bg-purple-100', text: 'text-purple-800' },
    ],
  },
  // ...Repeat for other projects
];
  const [isActive,setIsActive] = useState(false)
  return (

  <section id="portfolio" class="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Showcasing innovative solutions and successful projects that demonstrate
          technical expertise and creative problem-solving.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['all', 'web', 'mobile', 'ecommerce'].map((type, index) => (
          <button
            key={index}
            className={`filter-btn ${type === 'all' ? 'active bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'} px-6 py-2 rounded-full font-medium transition-all duration-300`}
            data-filter={type}
          >
            {type === 'all' ? 'All Projects' :
              type === 'web' ? 'Web Apps' :
              type === 'mobile' ? 'Mobile Apps' :
              'E-commerce'}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, i) => (
          <div
            key={i}
            onMouseEnter={()=>setIsActive(true)}
            onMouseLeave={()=>setIsActive(false)}
            className="portfolio-item group bg-white rounded-xl overflow-hidden shadow-lg 
            hover:shadow-xl transition-all duration-300 transform animate-fade-in-up"

            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-64 object-cover group-hover:scale-110 
                transition-transform duration-500"
                loading="lazy"
              />
              <div className={`absolute inset-0  
               bg-blue-600/70 bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 
               flex items-center justify-center  ${isActive ? 'visible' : 'invisible'} `}>
                <button
                  className={`view-project-btn opacity-0 group-hover:opacity-100 bg-white ${project.textColor} px-6 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}
                >
                  View Project
                </button>
              </div>

            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className={`${tag.bg} ${tag.text} px-3 py-1 rounded-full text-sm`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* <!-- Project Modal --> */}
    <div id="project-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 items-center justify-center p-4 hidden" aria-modal="true" aria-hidden="true">
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95">
        <div class="relative">
          <button id="close-modal" class="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10">
            <span class="text-gray-600 text-xl">×</span>
          </button>
          
          <div id="modal-content" class="p-8">
            <div class="space-y-6">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Fitness Tracking App</h2>
                <p class="text-gray-600 text-lg leading-relaxed">Cross-platform mobile application for comprehensive fitness tracking, nutrition monitoring, workout planning, and progress analytics.</p>
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Technologies Used</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React Native</span><span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Redux</span><span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SQLite</span><span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Firebase</span><span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Chart.js</span>
                </div>
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                <ul class="grid md:grid-cols-2 gap-2">
                  <li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Workout tracking</li><li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Nutrition monitoring</li><li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Progress analytics</li><li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Social features</li><li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Offline support</li>
                </ul>
              </div>
              
              <div class="flex gap-4 pt-4">
                <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  View Live Site
                </a>
                <a href="#" class="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

  )
}

export default Portfolio
