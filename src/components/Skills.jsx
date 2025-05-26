import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Skills</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Frontend Skills */}
          <SkillCard
            color="blue"
            iconPath="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            title="Frontend Development"
            skills={[
              { name: 'React', level: '95%' },
              { name: 'TypeScript', level: '90%' },
              { name: 'Tailwind CSS', level: '95%' }
            ]}
          />

          {/* Backend Skills */}
          <SkillCard
            color="green"
            iconPath="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
            title="Backend Development"
            skills={[
              { name: 'Node.js', level: '90%' },
              { name: 'Express.js', level: '85%' },
              { name: 'MongoDB', level: '80%' }
            ]}
          />

          {/* Design & Tools */}
          <SkillCard
            color="purple"
            iconPath="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
            title="Design & Tools"
            skills={[
              { name: 'Figma', level: '85%' },
              { name: 'Git', level: '90%' },
              { name: 'Docker', level: '75%' }
            ]}
          />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technologies I Work With</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              { label: 'React', color: 'blue', short: 'R' },
              { label: 'Node.js', color: 'green', short: 'N' },
              { label: 'TypeScript', color: 'blue', short: 'TS' },
              { label: 'MongoDB', color: 'green', short: 'M' },
              { label: 'Tailwind', color: 'cyan', short: 'TW' },
              { label: 'AWS', color: 'orange', short: 'AWS' },
              { label: 'Docker', color: 'blue', short: 'D' },
              { label: 'Git', color: 'red', short: 'Git' }
            ].map((tech, i) => (
              <div
                key={i}
                className={`flex flex-col items-center p-4 rounded-lg hover:bg-${tech.color}-50 transition-colors group`}
              >
                <div className={`w-12 h-12 bg-${tech.color}-100 rounded-lg flex items-center justify-center mb-2 group-hover:bg-${tech.color}-200 transition-colors`}>
                  <span className={`text-${tech.color}-600 font-bold text-lg`}>{tech.short}</span>
                </div>
                <span className="text-sm text-gray-600">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ color, iconPath, title, skills }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-6`}>
        <svg className={`w-6 h-6 text-${color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">{skill.name}</span>
              <span className={`text-${color}-600 font-semibold`}>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`bg-${color}-600 h-2 rounded-full`}
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;