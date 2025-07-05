import React, { useState } from 'react';
import { apiRequiestWithCredentials } from '../../utilities/ApiCall';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

// const avatars = [
//   'https://avatar.iran.liara.run/public/42',
//   'https://avatar.iran.liara.run/public/43',
//   'https://avatar.iran.liara.run/public/44',
//   'https://avatar.iran.liara.run/public/45',
//   'https://avatar.iran.liara.run/public/46',
//   'https://avatar.iran.liara.run/public/47',
// ];

// const Profile = () => {
//   const [form, setForm] = useState({
//     name: 'John Doe',
//     title: 'Full Stack Developer',
//     description:
//       'Passionate developer with 5+ years of experience creating innovative web solutions. I specialize in modern JavaScript frameworks and love turning complex problems into simple, beautiful designs.',
//     experience: '5+ Years',
//     location: 'New York, USA',
//     image: avatars[0],
//   });

//   const [showImageModal, setShowImageModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   const handleChange = (field) => (e) => {
//     setForm({ ...form, [field]: e.target.value });
//   };

//   const selectImage = (url) => {
//     setForm({ ...form, image: url });
//     setShowImageModal(false);
//   };

//   const resetForm = () => {
//     setForm({
//       name: 'John Doe',
//       title: 'Full Stack Developer',
//       description:
//         'Passionate developer with 5+ years of experience creating innovative web solutions. I specialize in modern JavaScript frameworks and love turning complex problems into simple, beautiful designs.',
//       experience: '5+ Years',
//       location: 'New York, USA',
//       image: avatars[0],
//     });
//   };

//   const saveChanges = () => {
//     setShowSuccessModal(true);
//   };

//   return (
//     <section id="about-management" className="page-section min-h-screen bg-gray-50 p-6">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2 sora-family">About Management</h1>
//         <p className="text-gray-600 inter-family">Update your about section content and profile information</p>
//       </div>

//       {/* About Preview */}
//       <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
//         <h2 className="text-xl font-semibold text-gray-900 mb-4 inter-family">Current About Section</h2>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-lg">
//           <div className="flex justify-center">
//             <img src={form.image} alt="Profile" className="w-64 h-64 rounded-lg object-cover border border-gray-200" />
//           </div>
//           <div className="space-y-4">
//             <h3 className="text-2xl font-bold text-gray-900 sora-family">{form.name}</h3>
//             <p className="text-lg text-blue-600 font-medium inter-family">{form.title}</p>
//             <p className="text-gray-600 leading-relaxed inter-family">{form.description}</p>
//             <div className="grid grid-cols-2 gap-4 pt-4">
//               <div>
//                 <span className="text-sm text-gray-500 sora-family">Experience</span>
//                 <p className="font-semibold text-gray-900 inter-family">{form.experience}</p>
//               </div>
//               <div>
//                 <span className="text-sm text-gray-500 sora-family">Location</span>
//                 <p className="font-semibold text-gray-900 inter-family">{form.location}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Edit Form */}
//       <div className="bg-white rounded-lg border border-gray-200 p-6">
//         <h2 className="text-xl font-semibold text-gray-900 mb-6 sora-family">Edit About Content</h2>

//         <form className="space-y-6 inter-family">
//           {/* Profile Image */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
//             <div className="flex items-center space-x-4">
//               <img src={form.image} alt="Current profile" className="w-20 h-20 rounded-lg object-cover border border-gray-200" />
//               <div className="flex-1">
//                 <button
//                   type="button"
//                   onClick={() => setShowImageModal(true)}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Change Image
//                 </button>
//                 <p className="text-sm text-gray-500 mt-1">Click to select a new profile image</p>
//               </div>
//             </div>
//           </div>

//           {/* Inputs */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//             <input
//               type="text"
//               value={form.name}
//               onChange={handleChange('name')}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
//             <input
//               type="text"
//               value={form.title}
//               onChange={handleChange('title')}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">About Description</label>
//             <textarea
//               rows="4"
//               value={form.description}
//               onChange={handleChange('description')}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
//               <input
//                 type="text"
//                 value={form.experience}
//                 onChange={handleChange('experience')}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//               <input
//                 type="text"
//                 value={form.location}
//                 onChange={handleChange('location')}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
//             <button
//               type="button"
//               onClick={() => {}}
//               className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
//             >
//               Update Preview
//             </button>
//             <button
//               type="button"
//               onClick={saveChanges}
//               className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
//             >
//               Save Changes
//             </button>
//             <button
//               type="button"
//               onClick={resetForm}
//               className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700"
//             >
//               Reset
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Image Modal */}
//       {showImageModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-900">Select Profile Image</h3>
//               <button onClick={() => setShowImageModal(false)} className="text-gray-400 hover:text-gray-600">
//                 ✕
//               </button>
//             </div>
//             <div className="grid grid-cols-3 gap-4 mb-6">
//               {avatars.map((url) => (
//                 <div key={url} onClick={() => selectImage(url)} className="cursor-pointer hover:opacity-75 transition-opacity">
//                   <img src={url} alt="Avatar" className="w-full h-24 object-cover rounded-lg border border-gray-200" />
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => setShowImageModal(false)}
//               className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-gray-900">Success!</h3>
//               <button onClick={() => setShowSuccessModal(false)} className="text-gray-400 hover:text-gray-600">
//                 ✕
//               </button>
//             </div>
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                 ✓
//               </div>
//               <div>
//                 <p className="text-gray-900 font-medium">About section updated successfully!</p>
//                 <p className="text-gray-600 text-sm">Your changes have been saved.</p>
//               </div>
//             </div>
//             <button
//               onClick={() => setShowSuccessModal(false)}
//               className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };



const avatars = [
  "https://i.ibb.co.com/hRGTZWdX/download.jpg",
  "https://i.ibb.co/album/avatar1.jpg",
  "https://i.ibb.co/album/avatar2.jpg",
];

const intitForm ={
    name: "",
    designation: "",
    subtitle: "",
    phone: "",
    email: "",
    location: "",
    avatar: "",
    projectsCompleted: "",
    yearsOfExperience: "",
    responseTime: "",
    aboutImage: "",
    description1: "",
    description2: "",
    technologies: [],
    isActive : false
  }
const Profile = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState(intitForm);

  const [technologie, setTechnologie] = useState({
    name: "",
    value: "",
    color: ""
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const addTechnology = () => {
    if (
      !technologie.name.trim() ||
      !technologie.value.trim() ||
      !technologie.color.trim()
    ) {
      alert("Please fill all fields for the technology.");
      return;
    }

    if (
      form.technologies.some(
        (t) => t.name.toLowerCase() === technologie.name.trim().toLowerCase()
      )
    ) {
      alert("This technology name already exists!");
      return;
    }

    setForm((prev) => ({
      ...prev,
      technologies: [
        ...prev.technologies,
        {
          name: technologie.name.trim(),
          value: technologie.value.trim(),
          color: technologie.color.trim(),
        },
      ],
    }));

    setTechnologie({ name: "", value: "", color: "" });
  };

  const deleteTechnology = (nameToDelete) => {
    setForm((prev) => ({
      ...prev,
      technologies: prev.technologies.filter(
        (t) => t.name !== nameToDelete
      ),
    }));
  };


  

  const selectImage = (url) => {
    setForm({ ...form, avatar: url });
    setShowImageModal(false);
  };

  const getProfileInfo =async()=>{
    try {
      const data = await apiRequiestWithCredentials('get','/admin/profile/info')
      setForm(data?.profile)
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  useEffect(()=>{
    getProfileInfo()
  },[])

const saveChanges = async() => {
  if (
      (!form.name ||
      !form.designation ||
      !form.subtitle ||
      !form.phone ||
      !form.location ||
      !form.yearsOfExperience ||
      !form.responseTime || 
      !form.projectsCompleted 
      || !form.aboutImage 
      || !form.avatar
      || !form.technologies.length
    )
    ) {
      toast.error('Please complete required filed!')
      return;
    }
   
    try {
      const data = await apiRequiestWithCredentials('put','/admin/profile/update',form)
      setShowSuccessModal(true);
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
    
  };

  return (
    <section id="about-management" className="page-section min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 sora-family">About Management</h1>
        <p className="text-gray-600 inter-family">Update your about section content and profile information</p>
      </div>

      {/* Edit Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 sora-family">Edit About Content</h2>

        <form className="space-y-6 inter-family">
          {/* Avatar */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
            <div className="flex items-center space-x-4">
              {form.avatar ? (
                <img
                  src={form.avatar}
                  alt="Current profile"
                  className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                />
              ) : (
                <div className="w-20 h-20 rounded-lg border border-gray-200 bg-gray-100 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
              <div className="flex-1">
                <button
                  type="button"
                  onClick={() => setShowImageModal(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Change Image
                </button>
              </div>
            </div>
          </div>

          {/* Text Inputs */}
          {[
            { label: "Full Name", field: "name" },
            { label: "Designation", field: "designation" },
            { label: "Subtitle", field: "subtitle" },
            { label: "Phone", field: "phone" },
            { label: "Email", field: "email" },
            { label: "Location", field: "location" },
            { label: "Projects Completed", field: "projectsCompleted", type: "number" },
            { label: "Years of Experience", field: "yearsOfExperience", type: "number" },
            { label: "Response Time", field: "responseTime" },
            { label: "About Image URL", field: "aboutImage" },
          ].map(({ label, field, type }) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
              <input
                type={type || "text"}
                value={form[field]}
                disabled = {field === 'email'}
                readOnly = {field === 'email'}
                onChange={handleChange(field)}
                className={`w-full px-4 py-3 border  outline-none border-gray-300
                rounded-lg focus:ring-2 focus:ring-blue-500 ${field === 'email' && 'bg-gray-100 cursor-not-allowed ' }`}
              />
            </div>
          ))}

          {/* Descriptions */}
          {[
            { label: "About Description 1", field: "description1" },
            { label: "About Description 2", field: "description2" },
          ].map(({ label, field }) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
              <textarea
                rows="3"
                value={form[field]}
                onChange={handleChange(field)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Add Technology */}
          <div className="border p-4 rounded-lg space-y-4">
            <h3 className="font-medium text-gray-700">Add Technology</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={technologie.name}
                onChange={(e) => setTechnologie({ ...technologie, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Values (comma separated)</label>
              <input
                type="text"
                value={technologie.value}
                onChange={(e) => setTechnologie({ ...technologie, value: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
              <input
                type="text"
                value={technologie.color}
                onChange={(e) => setTechnologie({ ...technologie, color: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="button"
              onClick={addTechnology}
              className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Add Technology
            </button>
          </div>

          {/* Technology List */}
          <div className="mt-4 space-y-2">
            {form.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center border px-3 py-2 rounded"
              >
                <span>{tech.name}</span>
                <button
                  type="button"
                  onClick={() => deleteTechnology(tech.name)}
                  className="text-red-500 cursor-pointer hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div className="border p-4 rounded-lg space-y-4">
              <label className="inline-flex items-center space-x-2">
        <input
          type="checkbox"
          checked={form.isActive}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              isActive: e.target.checked,
            }));
          }}
          className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="text-gray-700">Enable feature</span>
      </label>
      <p className="mt-2 text-sm text-gray-500">Checkbox state: {form.isActive ? "true" : "false"}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={saveChanges}
              className="flex-1 cursor-pointer bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
            >
              Save Changes
            </button>
           
          </div>
        </form>
      </div>

      {/* Image Modal */}
      {/* {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Select Profile Image</h3>
              <button onClick={() => setShowImageModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {avatars.map((url) => (
                <div key={url} onClick={() => selectImage(url)} className="cursor-pointer hover:opacity-75 transition-opacity">
                  <img src={url} alt="Avatar" className="w-full h-24 object-cover rounded-lg border border-gray-200" />
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowImageModal(false)}
              className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )} */}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg  font-semibold text-gray-900">Success!</h3>
              <button onClick={() => setShowSuccessModal(false)} 
              className="text-gray-400 cursor-pointer hover:text-gray-600">✕</button>
            </div>
            <p className="text-gray-900 font-medium mb-4">Your profile has been saved.</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-green-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;

