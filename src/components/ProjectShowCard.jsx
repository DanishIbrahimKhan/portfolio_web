import React from 'react'

function ProjectShowCard({screenShot,title,description}) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg mb-2">
          <div className="relative w-full h-auto">
            {/* Mac PNG Frame */}
            <img
              src="https://raw.githubusercontent.com/DanishIbrahimKhan/assets/main/macbook-air-medium.png"
              alt="Mac frame"
              className="w-full h-auto z-10"
            />
            {/* Website Screenshot Inside Mac */}
            <div className="absolute top-[5%] left-[11%] w-[78%] h-[86%] z-0 overflow-hidden">
              <img
                src={screenShot}
                alt="Website screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* <button
              type="button"
              className="gap-x-2 text-gray-900 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            >
              Visit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button> */}
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">
            {title}
            </h2>
            <p className="text-gray-600 mt-2">
           {description}   </p>
          </div>
        </div>
  )
}

export default ProjectShowCard