import React from 'react'

const Learning = () => {
    const learningGoals = [
  {
    id: 1,
    title: "Docker Mastery",
    description: "Containerization & Orchestration",
    iconBg: "bg-blue-100",
    iconColor: "bg-blue-600",
    animationDelay: "0s"
  },
  {
    id: 2,
    title: "AWS Certified",
    description: "Cloud Solutions Architect",
    iconBg: "bg-orange-100",
    iconColor: "bg-orange-600",
    animationDelay: "0.5s"
  },
  {
    id: 3,
    title: "Kubernetes",
    description: "Cluster Management",
    iconBg: "bg-indigo-100",
    iconColor: "bg-indigo-600",
    animationDelay: "1s"
  }
];
  return (
    <>
      <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-4
        sora-family">Next Learning Goals</h3>
        <p className="text-gray-600 max-w-2xl mx-auto inter-family">
          Technologies and certifications I'm currently working towards mastering.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {learningGoals.map((goal) => (
          <div 
            key={goal.id}
            className="bg-white p-6 rounded-xl border
             border-gray-200 text-center transition-all duration-300"
          >
            <div 
              className={`w-16 h-16 ${goal.iconBg} rounded-full flex items-center 
              justify-center mx-auto mb-4`}
              style={{
                  animation: "float 3s ease-in-out 0s infinite normal none running",
                }}
            >
              <div className={`w-8 h-8 ${goal.iconColor} rounded-full `}></div>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 sora-family">{goal.title}</h4>
            <p className="text-gray-600 text-sm inter-family">{goal.description}</p>
            <span className="text-xs text-gray-500 mt-1 inter-family">
                {goal.id === 1 ? 'In progress' : goal.id === 2 ? 'Started' : 'Planning'}
            </span>
            
          </div>
        ))}
      </div>
     
    </div>
    </>
  )
}

export default Learning
