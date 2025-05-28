import React, { useState } from 'react'

const Skills = () => {

    const [addSkill,setAddSkill]=useState(false)
    
  return (
    <section id="skills-management" className="page-section   
    min-h-screen bg-gray-50 p-6" style={{display: "block"}}>
  {/*  Header  */}
    <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Skills Management</h1>
        <p className="text-gray-600">Manage your technical skills and proficiency levels</p>
    </div>

   {/* Add New Skill Button */}
      <div className="mb-6">
        <button
          onClick={() => setAddSkill(!addSkill)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add New Skill
        </button>
      </div>

  {/* Skills Categories */}
    {/* <div className="space-y-8">
        <SkillCategory title="Frontend Development" categoryId="frontend" />
        <SkillCategory title="Backend Development" categoryId="backend" />
    </div> */}

   
    {/* <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 transform transition-all">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Add New Skill</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="skill-name" className="block text-sm font-medium text-gray-700 mb-1">Skill Name</label>
            <input type="text" id="skill-name" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter skill name" />
          </div>

          <div>
            <label htmlFor="skill-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <input type="text" id="skill-description" className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., JavaScript Framework" />
          </div>

          <div>
            <label htmlFor="skill-category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select id="skill-category" className="w-full px-3 py-2 border rounded-lg">
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="tools">Tools & Technologies</option>
            </select>
          </div>

          <div>
            <label htmlFor="skill-proficiency" className="block text-sm font-medium text-gray-700 mb-1">Proficiency Level (%)</label>
            <input type="range" min="0" max="100" value={proficiency} onChange={(e) => setProficiency(e.target.value)} className="w-full" />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>0%</span>
              <span>{proficiency}%</span>
              <span>100%</span>
            </div>
          </div>

          <div>
            <label htmlFor="skill-level" className="block text-sm font-medium text-gray-700 mb-1">Skill Level</label>
            <select id="skill-level" className="w-full px-3 py-2 border rounded-lg">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Icon Color</label>
            <div className="flex space-x-2">
              {['blue', 'green', 'yellow', 'purple', 'orange', 'red'].map(color => (
                <button key={color} type="button" className={`w-8 h-8 rounded-full bg-${color}-500 border-2 border-transparent hover:border-gray-400`} />
              ))}
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button type="button" onClick={onSave} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Save Skill</button>
            <button type="button" onClick={onClose} className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Cancel</button>
          </div>
        </form>
    </div> */}
  <>{addSkill && <AddEditSkillModal  addSkill={addSkill} setAddSkill={()=> setAddSkill(!addSkill)} />}</>
</section>
  )
}




const SkillCategory = ({ title, categoryId }) => {
  const skills = {
    frontend: [
      {
        id: 1,
        name: 'React',
        description: 'JavaScript Library',
        proficiency: 90,
        level: 'Expert',
        color: 'blue',
        icon: 'R',
      },
      {
        id: 2,
        name: 'Vue.js',
        description: 'JavaScript Framework',
        proficiency: 75,
        level: 'Advanced',
        color: 'green',
        icon: 'V',
      },
      {
        id: 3,
        name: 'TypeScript',
        description: 'Programming Language',
        proficiency: 85,
        level: 'Expert',
        color: 'blue',
        icon: 'TS',
      },
    ],
    backend: [
      {
        id: 4,
        name: 'Node.js',
        description: 'Runtime Environment',
        proficiency: 80,
        level: 'Advanced',
        color: 'green',
        icon: 'N',
      },
      {
        id: 5,
        name: 'Python',
        description: 'Programming Language',
        proficiency: 70,
        level: 'Intermediate',
        color: 'yellow',
        icon: 'P',
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <button
          onClick={() => addSkillToCategory(categoryId)}
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills[categoryId].map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};


const SkillCard = ({ skill }) => {
    const openAddSkillModal = () => {
  console.log("Open Add Skill Modal");
};

const addSkillToCategory = (categoryId) => {
  console.log("Add skill to category:", categoryId);
};

const editSkill = (id) => {
  console.log("Edit skill", id);
};

const deleteSkill = (id) => {
  console.log("Delete skill", id);
};
  return (
    <div className="skill-card border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 bg-${skill.color}-100 rounded-lg flex items-center justify-center`}>
            <span className={`text-${skill.color}-600 font-semibold text-sm`}>{skill.icon}</span>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{skill.name}</h3>
            <p className="text-sm text-gray-500">{skill.description}</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <button
            onClick={() => editSkill(skill.id)}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
          <button
            onClick={() => deleteSkill(skill.id)}
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex items-center justify-between text-sm mb-1">
          <span className="text-gray-600">Proficiency</span>
          <span className="text-gray-900 font-medium">{skill.proficiency}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`bg-${skill.color}-600 h-2 rounded-full`}
            style={{ width: `${skill.proficiency}%` }}
          ></div>
        </div>
      </div>
      <span className={`text-xs bg-${skill.color}-100 text-${skill.color}-700 px-2 py-1 rounded-full`}>
        {skill.level}
      </span>
    </div>
  );
};


const AddEditSkillModal = ({ addSkill,setAddSkill}) => {
  const [proficiency, setProficiency] = React.useState(50);

  if (!addSkill) return null;

  return (
    <div className="fixed max-h-[100vh] inset-0 bg-gray-500/20 
    bg-opacity-50 py-10 flex items-center justify-center z-50" onClick={()=> setAddSkill()} >

      <div className="max-h-[550px] bg-white rounded-lg p-6 max-w-md w-full mx-4 transform transition-all 
      overflow-y-auto" onClick={(e) => e.stopPropagation()} >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Add New Skill</h3>
          <button onClick={()=>setAddSkill()}  className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="skill-name" className="block text-sm font-medium text-gray-700 mb-1">Skill Name</label>
            <input type="text" id="skill-name" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter skill name" />
          </div>

          <div>
            <label htmlFor="skill-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <input type="text" id="skill-description" className="w-full px-3 py-2 border rounded-lg" placeholder="e.g., JavaScript Framework" />
          </div>

          <div>
            <label htmlFor="skill-category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select id="skill-category" className="w-full px-3 py-2 border rounded-lg">
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="tools">Tools & Technologies</option>
            </select>
          </div>

          <div>
            <label htmlFor="skill-proficiency" className="block text-sm font-medium text-gray-700 mb-1">Proficiency Level (%)</label>
            <input type="range" min="0" max="100" value={proficiency} onChange={(e) => setProficiency(e.target.value)} className="w-full" />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>0%</span>
              <span>{proficiency}%</span>
              <span>100%</span>
            </div>
          </div>

          <div>
            <label htmlFor="skill-level" className="block text-sm font-medium text-gray-700 mb-1">Skill Level</label>
            <select id="skill-level" className="w-full px-3 py-2 border rounded-lg">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Icon Color</label>
            <div className="flex space-x-2">
              {['blue', 'green', 'yellow', 'purple', 'orange', 'red'].map(color => (
                <button key={color} type="button" className={`w-8 h-8 rounded-full bg-${color}-500 border-2 border-transparent hover:border-gray-400`} />
              ))}
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button type="button" className="flex-1 bg-blue-600 text-white px-4 py-2 
            rounded-lg hover:bg-blue-700">Save Skill</button>
            <button type="button" onClick={()=>setAddSkill()}  className="flex-1 bg-gray-600 text-white 
            px-4 py-2 rounded-lg hover:bg-gray-700">Cancel</button>
          </div>
        </form>
      </div>

    </div>

  );
};





const DeleteSkillModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Delete Skill</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-600 mb-6">Are you sure you want to delete this skill? This action cannot be undone.</p>
        <div className="flex space-x-3">
          <button onClick={onConfirm} className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">Delete</button>
          <button onClick={onClose} className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Cancel</button>
        </div>
      </div>
    </div>
  );
};


const SuccessModal = ({ isOpen, onClose, message = "Skill saved successfully!" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Success!</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-gray-900 font-medium">{message}</p>
            <p className="text-gray-600 text-sm">Your changes have been applied.</p>
          </div>
        </div>
        <button onClick={onClose} className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Close</button>
      </div>
    </div>
  );
};







export default Skills
