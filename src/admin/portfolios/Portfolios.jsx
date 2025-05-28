import { useState } from 'react';

const Portfolios =()=> {
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Modern online shopping platform with payment integration',
      category: 'Web Development',
      tags: ['React', 'Node.js'],
      status: 'Completed',
      image: 'https://placehold.co/400x200?text=E-commerce+Platform',
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure banking application with biometric authentication',
      category: 'Mobile App',
      tags: ['Flutter', 'Firebase'],
      status: 'In Progress',
      image: 'https://placehold.co/400x200?text=Mobile+Banking+App',
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Data visualization dashboard for business insights',
      category: 'UI/UX Design',
      tags: ['Vue.js', 'D3.js'],
      status: 'Completed',
      image: 'https://placehold.co/400x200?text=Dashboard+Analytics',
    },
  ]);

  const handleEdit = (id) => console.log('Edit', id);
  const handleDelete = (id) => console.log('Delete', id);

  return (
   <> 
   <section id="projects-management" className="page-section min-h-screen bg-gray-50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 sora-family">Projects Management</h1>
        <p className="text-gray-600 inter-family">Manage your portfolio projects and showcase your work</p>
      </div>

      <div className="mb-6">
        <button
          onClick={() => setShowModal(!showModal)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg 
          font-medium hover:bg-blue-700 transition-colors flex items-center inter-family"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-sm px-2 py-1 rounded-full ${project.category === 
                  'Web Development' ? 'text-blue-600 bg-blue-100' : project.category === 
                  'Mobile App' ? 'text-green-600 bg-green-100' : 'text-purple-600 bg-purple-100'} inter-family`}
                  >{project.category}</span>
                <div className="flex space-x-2">
                  <button onClick={() => handleEdit(project.id)} className="text-gray-400 hover:text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button onClick={() => handleDelete(project.id)} className="text-gray-400 hover:text-red-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 sora-family">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 inter-family">{project.description}</p>
              <div className="flex items-center justify-between inter-family">
                <div className="flex space-x-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className={`text-sm font-medium ${project.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>{project.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

     
   </section>
    {showModal && <ProjectModal showModal={showModal} setShowModal={()=>setShowModal(!showModal)}/>}
    </>
  );
}


const ProjectModal = ({showModal,setShowModal }) => {
  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-500/30 bg-opacity-50 flex items-center 
      justify-center z-50 inter-family"
      onClick={()=> setShowModal()}
    >
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 
      max-h-96 overflow-y-auto transform transition-all"
      onClick={(e)=>e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 id="project-modal-title" className="text-lg font-semibold text-gray-900">
            Add New Project
          </h3>
          <button onClick={()=>setShowModal()} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="project-name" className="block text-sm font-medium text-gray-700 mb-1">
              Project Name
            </label>
            <input
              type="text"
              id="project-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              transition-colors"
              placeholder="Enter project name"
            />
          </div>

          <div>
            <label htmlFor="project-description" 
            className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="project-description"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter project description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Image</label>
            <div className="flex items-center space-x-4">
              <img id="project-preview-image" 
              src="https://placehold.co/400x200?text=Preview" 
              alt="Project preview" class="w-20 h-12 object-cover rounded 
              border border-gray-200" />
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg 
                hover:bg-blue-700 transition-colors"
              >
                Select Image
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="project-category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="project-category"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="data-analysis">Data Analysis</option>
            </select>
          </div>

          <div>
            <label htmlFor="project-technologies" className="block text-sm font-medium text-gray-700 mb-1">
              Technologies (comma separated)
            </label>
            <input
              type="text"
              id="project-technologies"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="e.g., React, Node.js, MongoDB"
            />
          </div>

          <div>
            <label htmlFor="project-status" className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              id="project-status"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
              <option value="planning">Planning</option>
            </select>
          </div>

          <div>
            <label htmlFor="project-url" className="block text-sm font-medium text-gray-700 mb-1">
              Project URL (optional)
            </label>
            <input
              type="url"
              id="project-url"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="https://example.com"
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Save Project
            </button>
            <button
              type="button"
              onClick={()=>setShowModal()}
              className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Portfolios;