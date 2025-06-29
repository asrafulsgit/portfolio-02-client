import React from "react";
import './modal.css'
const Modal = ({ project, closeModal }) => {
  return (
    <div
      class="fixed flex justify-center items-center inset-0 bg-black/40 z-50 p-4
         opacity-0 animate-backdropFadeIn "
      onClick={() => closeModal()}
    >
      <div
      onClick={(e)=> e.stopPropagation()}
        class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto
         transform transition-all duration-300 animate-modalDropFadeIn"
      >
        <div class="relative">
          <button
            onClick={() => closeModal()}
            id="close-modal"
            class="absolute cursor-pointer top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
          >
            <span class="text-gray-600 text-xl">×</span>
          </button>

          <div id="modal-content" class="p-8">
            <div class="space-y-6">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">
                  {project?.title}
                </h2>
                <p class="text-gray-600 text-lg leading-relaxed">
                  {project?.description}
                </p>
              </div>

              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  Technologies Used
                </h3>
                <div class="flex flex-wrap gap-2">
                { project?.tags?.map((tag,index)=>{
                  return(
                    <span key={index} class={`${tag?.textColor} ${tag?.bgColor}  px-3 
                    py-1 rounded-full text-sm`}>
                    {tag?.name}
                  </span>
                  )
                })}
                  
                </div>
              </div>

              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  Key Features
                </h3>
                <ul class="grid md:grid-cols-2 gap-2">
                  {project?.features.map((feature,index)=>(
                    <li key={index} class="flex items-center text-gray-600">
                    <span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                  ))}
                  
                </ul>
              </div>

              <div class="flex gap-4 pt-4">
                <a
                  href={project?.liveUrl}
                  target="_blank"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  View Live Site
                </a>
                <a
                  href={project?.codeUrl}
                  target="_blank"
                  class="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
