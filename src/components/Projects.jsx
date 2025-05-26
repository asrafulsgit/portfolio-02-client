import React, { useState, useEffect } from 'react';
const Projects = ({ isOpen, onClose, projectId }) => {
   const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern React-based shopping platform with advanced features",
    category: "web",
    image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8UmVhY3QlMjUyMHBvcnRmb2xpbyUyNTIwd2Vic2l0ZSUyNTIwbW9kZXJuJTI1MjBjbGVhbiUyNTIwcmVzcG9uc2l2ZXxlbnwxfDB8fHwxNzQ4MjM0NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Node.js", "MongoDB"],
    links: {
      liveDemo: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Intuitive mobile app for productivity and team collaboration",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8UmVhY3QlMjUyMHBvcnRmb2xpbyUyNTIwd2Vic2l0ZSUyNTIwbW9kZXJuJTI1MjBjbGVhbiUyNTIwcmVzcG9uc2l2ZXxlbnwxfDB8fHwxNzQ4MjM0NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React Native", "Firebase", "Redux"],
    links: {
      liveDemo: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Real-time data visualization and business intelligence platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8UmVhY3QlMjUyMHBvcnRmb2xpbyUyNTIwd2Vic2l0ZSUyNTIwbW9kZXJuJTI1MjBjbGVhbiUyNTIwcmVzcG9uc2l2ZXxlbnwxfDB8fHwxNzQ4MjM0NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Vue.js", "D3.js", "Express"],
    links: {
      liveDemo: "#",
      github: "#"
    }
  },
  {
    id: 4,
    title: "Brand Identity Design",
    description: "Complete brand identity and design system for startup",
    category: "design",
    image: "https://images.unsplash.com/photo-1678138091332-432d4a1ac407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8UmVhY3QlMjUyMHBvcnRmb2xpbyUyNTIwd2Vic2l0ZSUyNTIwbW9kZXJuJTI1MjBjbGVhbiUyNTIwcmVzcG9uc2l2ZXxlbnwxfDB8fHwxNzQ4MjM0NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Figma", "Adobe XD", "Illustrator"],
    links: {
      liveDemo: "#View Case Study",
      github: "#Behance"
    }
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "Full-stack social networking app with real-time features",
    category: "web",
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8UmVhY3QlMjUyMHBvcnRmb2xpbyUyNTIwd2Vic2l0ZSUyNTIwbW9kZXJuJTI1MjBjbGVhbiUyNTIwcmVzcG9uc2l2ZXxlbnwxfDB8fHwxNzQ4MjM0NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Socket.io", "PostgreSQL"],
    links: {
      liveDemo: "#",
      github: "#"
    }
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "Health and fitness mobile app with workout tracking",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1591267990439-bc68529677c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Nnx8UmVhY3QlMjUyMHBvcnRmb2xpbyUyNTIwd2Vic2l0ZSUyNTIwbW9kZXJuJTI1MjBjbGVhbiUyNTIwcmVzcG9uc2l2ZXxlbnwxfDB8fHwxNzQ4MjM0NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Flutter", "Firebase", "HealthKit"],
    links: {
      liveDemo: "#App Store",
      github: "#"
    }
  }
];

const projectData = {
  1: {
    title: 'E-commerce Platform',
    description:
      'A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, payment processing, inventory management, and admin dashboard.',
    features: [
      'User Authentication',
      'Payment Integration',
      'Inventory Management',
      'Admin Dashboard',
      'Responsive Design',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'JWT'],
    challenges:
      'Implementing secure payment processing and optimizing performance for large product catalogs.',
    outcome:
      'Successfully launched with 99.9% uptime and processing over 100K in transactions monthly.',
  },
  2: {
    title: 'Task Management App',
    description:
      'A mobile-first task management application with real-time collaboration features, built using React Native and Firebase.',
    features: [
      'Real-time Collaboration',
      'Push Notifications',
      'Offline Support',
      'Team Management',
      'Progress Tracking',
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage', 'FCM'],
    challenges:
      'Implementing offline functionality and real-time synchronization across multiple devices.',
    outcome:
      'Achieved 4.8/5 rating on app stores with over 10,000 active users.',
  },
  // ... Add remaining projects as needed ...
};

  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectId) {
      setProject(projectData[projectId]);
    }
  }, [projectId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // if (!isOpen || !project) return null;
  return (
  
    <section id="projects" class="py-20 bg-white">
            <div id="portfolio" className="py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Portfolio</h2>
                <p className="text-gray-500 mt-4">
                    Check out some of my latest work across branding, design, and graphics.
                </p>
                </div>

                {/* Filter menu (can be made functional later) */}
                <div className="mb-8 flex justify-center gap-4 flex-wrap">
                {["All", "Brand", "Design", "Graphic"].map((filter) => (
                    <button
                    key={filter}
                    className="px-4 py-2 border rounded-md hover:bg-black hover:text-white transition"
                    data-filter={filter.toLowerCase()}
                    >
                    {filter}
                    </button>
                ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                   <div
      className="project-card bg-white rounded-2xl shadow-lg hover:shadow-xl 
      transition-shadow overflow-hidden"
      data-category="web"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt="E-commerce Platform"
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-0 hover:bg-opacity-90 
        transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
          <button
            className="project-modal-btn bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold"
            data-project="1"
          >
            View Details
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((item,index)=>{(
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{item}</span>
          )})}
          
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Live Demo
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
            GitHub
          </a>
        </div>
      </div>
    </div>
                ))} 
                </div>
            </div>
            </div>


            {/* <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      aria-hidden="false"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-gray-600 text-lg">{project.description}</p>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenges & Solutions</h4>
            <p className="text-gray-600">{project.challenges}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Outcome</h4>
            <p className="text-gray-600">{project.outcome}</p>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">View Live Demo</a>
            <a href="#" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">View Code</a>
          </div>
        </div>
      </div>
    </div> */}
    </section>
  )
}

export default Projects
