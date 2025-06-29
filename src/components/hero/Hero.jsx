import React from 'react';
import profile from '../../assets/profile.png'
import './hero.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  const state = useSelector(state => state?.data)
  const [profileData,setProfileData]=useState(state?.profile)
  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-blue-50 to-indigo-100 pt-15 pb-5  relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 
        items-center animate-fade-in-up" >
          {/* Content Column */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            <div className='animate-fade-in-up'>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold
                 text-gray-900 mb-4 sm:mb-6 inter-family">
                  Hi, I'm <span className="text-blue-600">{profileData?.name || 'MD ASRAFUL ISLAM'}</span>
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl
                 text-gray-700 mb-4 sm:mb-6 inter-family">
                  {profileData?.designation || 'Full Stack Developer'}
                </h2>
                <p className="text-lg text-gray-600 mb-4 sm:mb-8 max-w-2xl inter-family">
                  {profileData?.subtitle || 'I create beautiful, functional digital experiences that solve real problems and delight users.'}
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center 
            lg:justify-start animate-fade-in-up">
              <button
               
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </button>
            <Link to='contact' smooth={true} duration={0}>  <button
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </button></Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 inter-family">
              <div className="text-center">
                <div className="sm:text-2xl font-bold text-gray-900">{profileData?.projectCompleted || '10'}+</div>
                <div className="text-[10px] sm:text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="sm:text-2xl font-bold text-gray-900">{profileData?.yearsOfExperience || '2.5'}+</div>
                <div className="text-[10px] sm:text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="sm:text-2xl font-bold text-gray-900">{profileData?.responseTime || '24'}h</div>
                <div className="text-[10px] sm:text-sm text-gray-600">Response Time</div>
              </div>
            </div>
          </div> 

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end 
          order-1 lg:order-2 pt-10 lg:pt-0">
            <div className="relative">
              <div className="w-80 h-80 sm:w-100 sm:h-100 rounded-full 
              overflow-hidden shadow-2xl">
                <img
                  src={profile}
                  alt="Alex Johnson - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-1  sm:top-8 lg:-top-4 
              -right-2 sm:-right-22  lg:-right-4 bg-white 
              rounded-lg shadow-lg p-2  sm:p-4 inter-family"
              style={{
                animation: "hero-badge 3s ease-in-out 0s infinite normal none running",
              }}
              >
                <div className="flex sm:flex-row flex-col items-center gap-1 sm:gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Available <br className='sm:hidden'/> for work</span>
                </div>
              </div>

              <div className="absolute -bottom-3 sm:-bottom-4 -left-5  sm:-left-8 inter-family
               bg-blue-600 text-white rounded-lg shadow-lg p-2 sm:p-4">
                <div className="text-center">
                  <div className="text-lg font-bold">JavaScript</div>
                  <div className="text-xs">Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute lg:block hidden bottom-8 left-1/2"
        style={{
          animation: "float 3s ease-in-out 0s infinite normal none running",
        }}
        >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
