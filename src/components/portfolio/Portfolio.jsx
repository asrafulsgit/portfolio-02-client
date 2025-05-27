import React, { useState } from 'react'
import './portfolio.css'
import Modal from './Modal';
const Portfolio = () => {

const projectsData = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with interactive charts and comprehensive reporting features.",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: [
      { name: "React", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "Node.js", bgColor: "bg-green-100", textColor: "text-green-800" },
      { name: "D3.js", bgColor: "bg-purple-100", textColor: "text-purple-800" }
    ],
    overlayColor: "bg-blue-600/70",
    animationDelay: "0s"
  },
  {
    id: 2,
    title: "Team Collaboration Hub",
    description: "Comprehensive workspace solution for remote teams with real-time communication and project management.",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: [
      { name: "Vue.js", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "Firebase", bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
      { name: "Socket.io", bgColor: "bg-red-100", textColor: "text-red-800" }
    ],
    overlayColor: "bg-green-600/70",
    animationDelay: "0.1s"
  },
  {
    id: 3,
    title: "Online Code Editor",
    description: "Browser-based IDE with syntax highlighting, live preview, and collaborative coding features.",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: [
      { name: "TypeScript", bgColor: "bg-orange-100", textColor: "text-orange-800" },
      { name: "Monaco Editor", bgColor: "bg-indigo-100", textColor: "text-indigo-800" },
      { name: "WebSockets", bgColor: "bg-pink-100", textColor: "text-pink-800" }
    ],
    overlayColor: "bg-purple-600/70",
    animationDelay: "0.2s"
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-featured online marketplace with advanced search, payment processing, and vendor management.",
    category: "ecommerce",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: [
      { name: "Next.js", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "Stripe", bgColor: "bg-green-100", textColor: "text-green-800" },
      { name: "PostgreSQL", bgColor: "bg-gray-100", textColor: "text-gray-800" }
    ],
    overlayColor: "bg-orange-600/70",
    animationDelay: "0.3s"
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    description: "Cross-platform mobile application for workout tracking, nutrition monitoring, and progress analytics.",
    category: "mobile",
    imageUrl: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: [
      { name: "React Native", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "Redux", bgColor: "bg-purple-100", textColor: "text-purple-800" },
      { name: "SQLite", bgColor: "bg-green-100", textColor: "text-green-800" }
    ],
    overlayColor: "bg-indigo-600/70",
    animationDelay: "0.4s"
  },
  {
    id: 6,
    title: "Creative Portfolio Site",
    description: "Interactive portfolio website with stunning animations, smooth transitions, and immersive user experience.",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8d2ViJTI1MjBkZXZlbG9wZXIlMjUyMHBvcnRmb2xpbyUyNTIwcHJvZmVzc2lvbmFsJTI1MjBtb2Rlcm4lMjUyMG1vY2t1cHxlbnwxfDB8fHwxNzQ4MjMzOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: [
      { name: "Three.js", bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
      { name: "GSAP", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "WebGL", bgColor: "bg-purple-100", textColor: "text-purple-800" }
    ],
    overlayColor: "bg-pink-600/70",
    animationDelay: "0.5s"
  }
];
  const [isActive,setIsActive] = useState(null)
  const [isOpenModal,setIsOpenModal] = useState(false)

  return (

  <section id="portfolio" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sora-family">Portfolio</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto inter-family">
          Showcasing innovative solutions and successful projects that demonstrate
          technical expertise and creative problem-solving.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['all', 'web','ecommerce'].map((type, index) => (
          <button
            key={index}
            className={`filter-btn ${type === 'all' ?  
              'active bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}
               px-6 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer inter-family `}
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
        {projectsData.map((project, i) => (
          <div
            key={i}
            onMouseEnter={()=>{
              setIsActive(i)
            }}
            onMouseLeave={()=>setIsActive(null)}
            className="portfolio-item group bg-white rounded-xl overflow-hidden 
            shadow-sm  hover:shadow-md transition-all duration-300 transform animate-fade-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.alt}
                className="w-full h-64 object-cover group-hover:scale-110 
                transition-transform duration-500"
                loading="lazy"
              />
              <div className={`absolute inset-0  
               ${project.overlayColor} bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 
               flex items-center justify-center  ${isActive == i ? 'visible' : 'invisible'} `}>
                <button
                  className={`view-project-btn opacity-0 group-hover:opacity-100
                     bg-white ${project.textColor} px-6 py-2 rounded-lg font-semibold
                      transform translate-y-4 group-hover:translate-y-0 transition-all 
                      duration-300 inter-family cursor-pointer`}
                >
                  View Project
                </button>
              </div>

            </div>
            <div className="py-6 px-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2 sora-family
              ">{project.title}</h3>
              <p className="text-gray-600 mb-4 inter-family">{project.description}</p>
              <div className="flex flex-wrap gap-2 inter-family">
                {project.tags.map((tag, j) => (
                  <span key={j} className={`${tag.bgColor} ${tag.textColor} 
                  px-3 py-1 rounded-full text-sm inter-family`}>
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* contact for project */}
      <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 sora-family">
        Interested in Working Together?
      </h3>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto inter-family">
        Let's discuss your project requirements and create something exceptional.
        View more projects or get in touch for a consultation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center inter-family">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 
        py-3 rounded-lg font-semibold transition-all duration-300 transform cursor-pointer">
          View All Projects
        </button>
        <button className="border border-gray-300 hover:border-gray-400 text-gray-700
         hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all
          duration-300 hover:bg-gray-50 cursor-pointer">
          Start a Project
        </button>
      </div>
      </div>

    </div>




    {/* <!-- Project Modal --> */}
    {isOpenModal && <Modal /> }

  </section>

  )
}

export default Portfolio
