import React, { useState } from 'react'
import { useInView } from "react-intersection-observer";
import { useSelector } from 'react-redux';
const Tools = () => {
    const { ref, inView, entry } = useInView({ triggerOnce: true });
     const skillsData = [
                { title: 'Frontend', colorClass: 'text-blue-600', skills: 'React, JavaScript,  TypeScript' },
                { title: 'Backend', colorClass: 'text-green-600', skills: 'Node.js, MongoDB, PostgreSQL' },
                { title: 'Tools', colorClass: 'text-orange-600', skills: 'Git, AI, VS' },
              ]

      const state = useSelector(state => state?.data)
  const [profile,setProfile]=useState(state?.profile)
  return (
    <div ref={ref} className="space-y-8">
            <p className='text-green-600'></p>
            <div className={`space-y-6 ${inView && 'animate-fade-in-up'}`}>
              <h3 className="text-2xl font-bold text-gray-900
              sora-family">Crafting Code, Building Dreams</h3>
              <p className="text-gray-600 leading-relaxed inter-family">
                {profile?.description1 || `With over 3 years of experience in full-stack development, I 
                specialize in creating scalable web applications using modern technologies like React,
                 Node.js, and cloud platforms.`}
              </p>
              <p className="text-gray-600 leading-relaxed inter-family">
                {profile?.description2 || `My approach combines technical expertise with creative problem-solving to deliver 
                solutions that not only work flawlessly but also provide exceptional user experiences.`}
              </p>
            </div>

            {/* Skills Grid */}
            <div className={`grid grid-cols-1  sm:grid-cols-2 
              gap-6 inter-family ${inView && 'animate-fade-in-up'}`}>
              {profile?.technologies?.map((skill, i) =>{ 
                const { name, color, value } = skill;
                return(<div
                  key={i}
                  className="bg-white p-6 rounded-lg border 
                  border-gray-200 hover:shadow-md transition-shadow 
                  duration-300 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`${color} text-2xl font-bold mb-2`}>{name}</div>
                  <p className="text-gray-600 text-sm">{value}</p>
                </div>)
              })}
            </div>

            {/* CTA Button */}
            <div className={`pt-4  ${inView && 'animate-fade-in-up'}`}>
             <a href="https://drive.google.com/file/d/1zBmVWCUDpBjt4GiR6VUpEImKcr4_WJpZ/view?usp=sharing"
            target='_blank'> 
              
              <button
            
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 
                py-3 rounded-lg font-semibold transition-all duration-300 
                transform"
              >
                Download Resume
              </button></a>
            </div>
    </div>
  )
}

export default Tools
