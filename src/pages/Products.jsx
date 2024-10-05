export default function Home() {
    return (
        <>
          <div className="px-2">
        {/* Project Showcase Card */}
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
                src="https://raw.githubusercontent.com/DanishIbrahimKhan/assets/main/sanlamSS.png"
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
            Sanlam Maroc - Online Insurance Service
            </h2>
            <p className="text-gray-600 mt-2">
            I played a key role in developing the Online Car Insurance Service Page for Sanlam Maroc. The project aimed to provide users with a streamlined and efficient process for obtaining car insurance quotes and services online.

Key Contributions:

User-Friendly Interface: Designed an intuitive and visually appealing interface that guides users through the car insurance process, making it accessible for all users.
Quote Simulation Tool: Developed a quote simulation feature, allowing users to easily calculate their insurance costs based on their needs and preferences.
Camera Functionality: Integrated camera access, enabling users to upload necessary documentation, such as vehicle images, directly through the website.
Informative Sections: Organized the page with clear sections explaining different insurance options, helping users make informed decisions quickly.
            </p>
          </div>
        </div>
      </div>
      <div className="px-2">
        {/* Project Showcase Card */}
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
                src="https://raw.githubusercontent.com/DanishIbrahimKhan/assets/main/carepulseSS1.jpg"
                alt="Website screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">
              CarePulse - Online Healthcare Appointment System
            </h2>
            <p className="text-gray-600 mt-2">
              CarePulse is a healthcare web application designed to simplify the
              process of scheduling medical appointments. The platform allows
              patients to quickly and easily book appointments with healthcare
              professionals by entering basic personal information such as their
              full name, email, and phone number. The website's clean and
              professional interface reflects a modern healthcare experience,
              providing users with a smooth and user-friendly process for
              appointment management. It integrates essential elements like
              phone number validation and is likely geared towards ensuring
              accessibility and reliability for patients and healthcare
              providers alike.
            </p>
          </div>
        </div>
      </div>
        </>
    )
}