import React from 'react'

const Modal = () => {
  return (
   <div class="fixed flex justify-center items-center inset-0 bg-black/40 bg-opacity-50 z-50 
     p-4 ">
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto 
      transform transition-all duration-300 scale-95 ">
        <div class="relative">
          <button id="close-modal" class="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10">
            <span class="text-gray-600 text-xl">×</span>
          </button>
          
          <div id="modal-content" class="p-8">
            <div class="space-y-6">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Fitness Tracking App</h2>
                <p class="text-gray-600 text-lg leading-relaxed">Cross-platform mobile application for comprehensive fitness tracking, nutrition monitoring, workout planning, and progress analytics.</p>
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Technologies Used</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React Native</span><span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Redux</span><span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SQLite</span><span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Firebase</span><span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Chart.js</span>
                </div>
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                <ul class="grid md:grid-cols-2 gap-2">
                  <li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Workout tracking</li><li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Nutrition monitoring</li><li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Progress analytics</li><li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Social features</li><li class="flex items-center text-gray-600"><span class="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Offline support</li>
                </ul>
              </div>
              
              <div class="flex gap-4 pt-4">
                <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  View Live Site
                </a>
                <a href="#" class="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
