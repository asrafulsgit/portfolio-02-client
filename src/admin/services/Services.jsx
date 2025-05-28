import React, { useState } from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    price: '$2,500+',
    status: 'Active',
    iconColor: 'bg-blue-100',
    iconStroke: 'text-blue-600',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    price: '$3,500+',
    status: 'Active',
    iconColor: 'bg-green-100',
    iconStroke: 'text-green-600',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User interface and experience design for web and mobile applications',
    price: '$2,800+',
    status: 'Active',
    iconColor: 'bg-purple-100',
    iconStroke: 'text-purple-600',
    iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
  }
];

const  Services = ()=> {
  const [showModal, setShowModal] = useState(false);

  const openAddServiceModal = () => setShowModal(true);
  const closeServiceModal = () => setShowModal(false);

  const editService = (id) => alert(`Edit service with ID: ${id}`);
  const deleteService = (id) => alert(`Delete service with ID: ${id}`);

  return (
    <section id="services-management" className="page-section min-h-screen bg-gray-50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Services Management</h1>
        <p className="text-gray-600">Manage your portfolio services and offerings</p>
      </div>

      <div className="mb-6">
        <button
          onClick={openAddServiceModal}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {servicesData.map(service => (
          <div key={service.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${service.iconColor} rounded-lg flex items-center justify-center`}>
                <svg className={`w-6 h-6 ${service.iconStroke}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.iconPath} />
                </svg>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => editService(service.id)} className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button onClick={() => deleteService(service.id)} className="text-gray-400 hover:text-red-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">{service.status}</span>
              <span className="text-sm text-gray-500">{service.price}</span>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 transform transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add New Service</h3>
              <button onClick={closeServiceModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="service-name" className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                <input id="service-name" type="text" placeholder="Enter service name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
              </div>
              <div>
                <label htmlFor="service-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea id="service-description" rows="3" placeholder="Enter service description" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"></textarea>
              </div>
              <div>
                <label htmlFor="service-price" className="block text-sm font-medium text-gray-700 mb-1">Starting Price</label>
                <input id="service-price" type="text" placeholder="e.g., $2,500+" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" />
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
