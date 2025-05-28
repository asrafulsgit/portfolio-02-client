import React, { useState } from 'react';

const avatars = [
  'https://avatar.iran.liara.run/public/42',
  'https://avatar.iran.liara.run/public/43',
  'https://avatar.iran.liara.run/public/44',
  'https://avatar.iran.liara.run/public/45',
  'https://avatar.iran.liara.run/public/46',
  'https://avatar.iran.liara.run/public/47',
];

const Profile = () => {
  const [form, setForm] = useState({
    name: 'John Doe',
    title: 'Full Stack Developer',
    description:
      'Passionate developer with 5+ years of experience creating innovative web solutions. I specialize in modern JavaScript frameworks and love turning complex problems into simple, beautiful designs.',
    experience: '5+ Years',
    location: 'New York, USA',
    image: avatars[0],
  });

  const [showImageModal, setShowImageModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const selectImage = (url) => {
    setForm({ ...form, image: url });
    setShowImageModal(false);
  };

  const resetForm = () => {
    setForm({
      name: 'John Doe',
      title: 'Full Stack Developer',
      description:
        'Passionate developer with 5+ years of experience creating innovative web solutions. I specialize in modern JavaScript frameworks and love turning complex problems into simple, beautiful designs.',
      experience: '5+ Years',
      location: 'New York, USA',
      image: avatars[0],
    });
  };

  const saveChanges = () => {
    setShowSuccessModal(true);
  };

  return (
    <section id="about-management" className="page-section min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 sora-family">About Management</h1>
        <p className="text-gray-600 inter-family">Update your about section content and profile information</p>
      </div>

      {/* About Preview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 inter-family">Current About Section</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-lg">
          <div className="flex justify-center">
            <img src={form.image} alt="Profile" className="w-64 h-64 rounded-lg object-cover border border-gray-200" />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 sora-family">{form.name}</h3>
            <p className="text-lg text-blue-600 font-medium inter-family">{form.title}</p>
            <p className="text-gray-600 leading-relaxed inter-family">{form.description}</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <span className="text-sm text-gray-500 sora-family">Experience</span>
                <p className="font-semibold text-gray-900 inter-family">{form.experience}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500 sora-family">Location</span>
                <p className="font-semibold text-gray-900 inter-family">{form.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 sora-family">Edit About Content</h2>

        <form className="space-y-6 inter-family">
          {/* Profile Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
            <div className="flex items-center space-x-4">
              <img src={form.image} alt="Current profile" className="w-20 h-20 rounded-lg object-cover border border-gray-200" />
              <div className="flex-1">
                <button
                  type="button"
                  onClick={() => setShowImageModal(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Change Image
                </button>
                <p className="text-sm text-gray-500 mt-1">Click to select a new profile image</p>
              </div>
            </div>
          </div>

          {/* Inputs */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
            <input
              type="text"
              value={form.title}
              onChange={handleChange('title')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">About Description</label>
            <textarea
              rows="4"
              value={form.description}
              onChange={handleChange('description')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
              <input
                type="text"
                value={form.experience}
                onChange={handleChange('experience')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={form.location}
                onChange={handleChange('location')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => {}}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Update Preview
            </button>
            <button
              type="button"
              onClick={saveChanges}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Select Profile Image</h3>
              <button onClick={() => setShowImageModal(false)} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
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
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Success!</h3>
              <button onClick={() => setShowSuccessModal(false)} className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                ✓
              </div>
              <div>
                <p className="text-gray-900 font-medium">About section updated successfully!</p>
                <p className="text-gray-600 text-sm">Your changes have been saved.</p>
              </div>
            </div>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
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
