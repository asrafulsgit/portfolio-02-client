import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900
           mb-4 sora-family">Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto inter-family">
            Comprehensive technical expertise across modern web technologies, frameworks, and development tools for building scalable applications.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Frontend Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frontend Development</h3>
            <div className="space-y-6">
              {[
                { name: 'React', percent: 95, color: 'bg-blue-600' },
                { name: 'JavaScript', percent: 90, color: 'bg-yellow-500' },
                { name: 'TypeScript', percent: 85, color: 'bg-blue-500' },
                { name: 'Vue.js', percent: 80, color: 'bg-green-500' },
                { name: 'CSS/Tailwind', percent: 92, color: 'bg-purple-500' }
              ].map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`} style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Backend Development</h3>
            <div className="space-y-6">
              {[
                { name: 'Node.js', percent: 88, color: 'bg-green-600' },
                { name: 'Python', percent: 82, color: 'bg-blue-500' },
                { name: 'PostgreSQL', percent: 85, color: 'bg-indigo-600' },
                { name: 'MongoDB', percent: 78, color: 'bg-green-500' },
                { name: 'Express.js', percent: 90, color: 'bg-gray-700' }
              ].map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.percent}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`} style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'AWS', color: 'orange' },
              { name: 'Docker', color: 'blue' },
              { name: 'Git', color: 'red' },
              { name: 'Figma', color: 'purple' },
              { name: 'Webpack', color: 'blue' },
              { name: 'Jest', color: 'green' },
            ].map((tool, idx) => (
              <div key={tool.name} className={`tool-card group bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-${tool.color}-300 hover:shadow-lg transition-all duration-300 text-center animate-fade-in-up`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={`w-12 h-12 bg-${tool.color}-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-${tool.color}-200 transition-colors duration-300`}>
                  <div className={`w-6 h-6 bg-${tool.color}-600 rounded`}></div>
                </div>
                <h4 className="font-semibold text-gray-800">{tool.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Learning */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Staying current with the latest technologies and best practices through ongoing education and professional development.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'AWS Certified', desc: 'Solutions Architect Associate', color: 'blue', delay: '0s' },
              { title: 'Google Cloud Training', desc: 'Foundational Knowledge', color: 'green', delay: '0.2s' },
              { title: 'OpenAI Developer', desc: 'AI Integration Specialist', color: 'indigo', delay: '0.4s' },
            ].map((cert, i) => (
              <div key={cert.title} className="bg-white p-6 rounded-xl border border-gray-200 text-center animate-fade-in-up" style={{ animationDelay: cert.delay }}>
                <div className={`w-16 h-16 bg-${cert.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className={`w-8 h-8 bg-${cert.color}-600 rounded-full`}></div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;