import React from 'react'
import { useInView } from 'react-intersection-observer'

const Tools = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

    const toolsData = [
  {
    name: "AWS",
    iconBg: "bg-orange-100",
    iconHoverBg: "bg-orange-200",
    iconColor: "bg-orange-600",
    hoverBorder: "hover:border-orange-300"
  },
  {
    name: "Docker",
    iconBg: "bg-blue-100",
    iconHoverBg: "bg-blue-200",
    iconColor: "bg-blue-600",
    hoverBorder: "hover:border-blue-300"
  },
  {
    name: "Git",
    iconBg: "bg-red-100",
    iconHoverBg: "bg-red-200",
    iconColor: "bg-red-600",
    hoverBorder: "hover:border-red-300",
    transform: "translateY(0px) rotate(0deg)"
  },
  {
    name: "VS",
    iconBg: "bg-purple-100",
    iconHoverBg: "bg-purple-200",
    iconColor: "bg-purple-600",
    hoverBorder: "hover:border-purple-300"
  },
  {
    name: "Webpack",
    iconBg: "bg-blue-100",
    iconHoverBg: "bg-blue-200",
    iconColor: "bg-blue-500",
    hoverBorder: "hover:border-blue-300"
  },
  {
    name: "Jest",
    iconBg: "bg-green-100",
    iconHoverBg: "bg-green-200",
    iconColor: "bg-green-600",
    hoverBorder: "hover:border-green-300"
  }
];
  return (
    <>
        <div ref={ref} className={`mb-6 sora-family ${inView && 'animate-fade-in-up'}`}>
          <h3 className="text-2xl font-bold text-gray-900 text-center 
          mb-12 ">Tools &amp; Technologies</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
     
            {
                toolsData.map((tool,index)=>{
                    return(
                    <div key={index} className={`tool-card group bg-gray-50 p-6 rounded-xl border
                     border-gray-200 ${tool.hoverBorder} hover:shadow-lg 
                     transition-all duration-300 text-center animate-fade-in-up`}>

            <div className={`w-12 h-12 ${tool.iconBg} rounded-lg flex items-center 
            justify-center mx-auto mb-3  transition-colors 
            duration-300`}>
              <div className={`w-6 h-6 ${tool.iconColor} rounded`}></div>
            </div>
            <h4 className="font-semibold text-gray-800">{tool.name}</h4>
          </div>
                )
                })
            }

            

         
           
          </div>
        </div></>
  )
}

export default Tools
