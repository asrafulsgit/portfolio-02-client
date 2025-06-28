import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Contact_info = () => {
    
    const state = useSelector(state => state?.data)
    const [profile,setProfile]=useState(state?.profile)
    const contactInfo = [
        {
            name : 'Eamil',
            value : profile?.email || "sourob2356@gmail.com",
            iconColor : 'bg-blue-600',
            iconBg  : 'bg-blue-100'
        },
        {
            name : 'phone',
            value : "+" + profile?.phone || '8801820286432',
            iconColor : 'bg-green-600',
            iconBg  : 'bg-green-100'
        },
        {
            name : 'Loacation',
            value : profile?.location || 'Dactar Para, Feni Sadar, Feni, Bangladesh',
            iconColor : 'bg-purple-600',
            iconBg  : 'bg-purple-100'
        }
    ]
  return (
    <div className="space-y-8">
            <div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6
              sora-family">
                Let's Connect
              </h3>

              <div className="space-y-6">
                {/* Email */}
              {contactInfo.map((info,index)=>{
                return(
                <div key={index} className="flex items-center">
                  <div className={`w-12 h-12 ${info.iconBg} rounded-lg 
                  flex items-center justify-center mr-4`}>
                    <div className={`w-6 h-6 ${info.iconColor} rounded`}></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 
                    sora-family">{info.name}</h4>
                    <p className="text-gray-600 inter-family">
                        {info.value}
                    </p>
                  </div>
                </div>
                )
              })}
              </div>
            </div>

            {/* Images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1607294846590-fd005d7973e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGV2ZWxvcGVyJTI1MjBjb250YWN0JTI1MjBmb3JtJTI1MjBtb2Rlcm4lMjUyMG1pbmltYWwlMjUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NDgyMzQxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Developer working with headphones in modern workspace"
                  className="w-full h-60 object-cover"
                  loading="lazy"
                />
              </div>

                <div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 sora-fa">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-bold">Li</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-bold">Gh</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-bold">Tw</span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-bold">Em</span>
                </a>
              </div>
            </div>
            </div>

            {/* Social Links */}
          

          </div>
  )
}

export default Contact_info
