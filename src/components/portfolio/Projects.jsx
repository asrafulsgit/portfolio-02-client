import   { useState } from 'react'
import { useInView } from "react-intersection-observer";
import Modal from './Modal';

const projectsData = [
  {
    id: 1,
    title: "AthleticHub",
    description: "AthleticHub is a sports event management platform that enables users to discover, register for, and manage various athletic events. It provides features for both users and administrators, such as event creation, participant tracking, and performance insights.",
    category: "web",
    imageUrl: "https://i.ibb.co/4wfhfD6n/pngtree-a-vector-illustration-of-athletes-in-different-sports-poster-image-1102701.jpg",
    tags: [
      { name: "React", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "Node.js", bgColor: "bg-green-100", textColor: "text-green-800" },
      { name: "MongoDB.js", bgColor: "bg-purple-100", textColor: "text-purple-800" }
    ],
    features : ['Manage events and users','Review and feedback system','Participant registration','Responsive and modern UI using Tailwind CSS'],
    overlayColor: "bg-blue-600/70",
    animationDelay: "0s",
    liveUrl : 'https://athletichub25.netlify.app',
    codeUrl : 'https://github.com/asrafulsgit/athleticHub-client'
  },
  {
    id: 2,
    title: "GardenHub",
    description: "Garden Hub is a community-driven web application designed to support new and experienced gardeners alike. It allows users to share their gardening knowledge, ask questions, attend events, and connect with other passionate gardeners. Whether you’re troubleshooting a plant issue or attending a community event, Garden Hub provides a collaborative platform for all your gardening needs.",
    category: "web",
    imageUrl: "https://i.ibb.co/wN0nBz9w/gardener-7089417-1280.webp",
    tags: [
      { name: "React.js", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "Firebase", bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
      { name: "Express.js", bgColor: "bg-red-100", textColor: "text-red-800" },
      { name: "MongoDB", bgColor: "bg-blue-100", textColor: "text-blue-800" }
    ],
    features : ['Gardener Profiles','Share Gardening Tips','Gardening Events','Expert Advice'],
    overlayColor: "bg-green-600/70",
    animationDelay: "0.1s",
    liveUrl : 'https://gardenhub25.netlify.app',
    codeUrl : 'https://github.com/asrafulsgit/gardenhub-client'
  },
  {
    id: 3,
    title: "X clothes",
    description: "A full-stack eCommerce application for a clothing store. It allows users to browse products, add to cart, make payments, and track orders. Admins can manage products, orders, and users.",
    category: "E-commerce",
    imageUrl: "https://i.ibb.co/MkNr1cDy/ecommerce-web-page-concept-illustration-114360-8204.jpg",
    tags: [
      { name: "React", bgColor: "bg-orange-100", textColor: "text-orange-800" },
      { name: "Firebase", bgColor: "bg-pink-100", textColor: "text-pink-800" },
      { name: "Node.js", bgColor: "bg-indigo-100", textColor: "text-indigo-800" },
      { name: "Socket.io", bgColor: "bg-pink-100", textColor: "text-pink-800" },
      { name: "MongoDB", bgColor: "bg-orange-100", textColor: "text-orange-800" },
    ],
    features : ['Browse, filter, and search clothing products','Wishlist (Favorites)','Add to cart & checkout','SSLCOMMERZ payment integration','Order history & tracking','Admin dashboard','Mobile responsive UI'],
    overlayColor: "bg-purple-600/70",
    animationDelay: "0.2s",
    liveUrl : '',
    codeUrl : 'https://github.com/asrafulsgit/X-clothes-1.1'
  }
];

const Projects = () => {
  const { ref, inView} = useInView({ triggerOnce: true });

      const [isActive,setIsActive] = useState(null)
      const [project,setProject] = useState(null)

     const [isOpenModal,setIsOpenModal] = useState(false)
     const handleModal=(project)=>{
        setProject(project)
        setIsOpenModal(true)
     }

  return (
    <>
    {/* Filter Tabs */}
      <div ref={ref} className={`flex flex-wrap justify-center gap-4 mb-12
        ${inView && 'animate-fade-in-up'}`}>
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
      <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${inView && 'animate-fade-in-up'}`}>
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
                onClick={()=>handleModal(project)}
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
              <p className="text-gray-600 mb-4 inter-family">{
              project?.description.length > 100 ? `${project?.description.slice(0,100)}...` : project?.description
              }</p>
              <div className="flex flex-wrap gap-2 inter-family">
                {project?.tags.slice(0,3).map((tag, j) => (
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

       {/* <!-- Project Modal --> */}
      {isOpenModal && <Modal project={project} closeModal={()=>setIsOpenModal(false)} /> }
    </>
  )
}

export default Projects
