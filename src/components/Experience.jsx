import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey and career milestones
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden lg:block"></div>

          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="relative flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Senior Full Stack Developer</h3>
                      <p className="text-blue-600 font-medium">TechCorp Solutions</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">2022 - Present</p>
                  <p className="text-gray-600 mb-4">
                    Leading development of enterprise web applications using React, Node.js, and cloud technologies.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {[
                      "Led team of 5 developers on major projects",
                      "Improved application performance by 40%",
                      "Implemented CI/CD pipelines"
                    ].map((text, index) => (
                      <li className="flex items-center" key={index}>
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-8">
                <img
                  src="https://images.unsplash.com/photo-1534527489986-3e3394ca569c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Modern tech office"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
            </div>

            {/* Additional experiences go here... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;