import profile from "../assets/profile.png";
import CopyEmailButton from "../components/CopyEmailButton";
import { getConfigData } from "../data/configReader";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";

export default function About() {
  const configData = getConfigData();

  return (
    <>
      {/* Section Header */}
      <div className="px-7 pt-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-gray-400 rounded-full"></div>
          About
        </h1>
      </div>

      {/* Intro and Profile Section */}
      <div className="px-7 py-10 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
        <div className="flex flex-col gap-y-5 max-w-3xl">
          <h1 className="text-4xl font-semibold text-center md:text-left tracking-tight">
            It's me {configData.name}
          </h1>
          <p className="text-lg text-gray-600 text-center md:text-left">
            {configData.aboutIntro}
          </p>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="px-7 py-3 space-y-6 max-w-5xl mx-auto">
        <AboutSection title="Frontend Expertise" text={configData.aboutFrontend} icon={<FaReact className="text-blue-500" />} />
        <AboutSection title="Backend & Real-Time Systems" text={configData.aboutBackend} icon={<FaNodeJs className="text-green-600" />} />
        <AboutSection title="Integrations & Responsiveness" text={configData.aboutIntegrations} icon={<FaTools className="text-yellow-600" />} />
        <AboutSection title="Tools & DevOps" text={configData.aboutTools} icon={<FaDatabase className="text-purple-600" />} />
        <AboutSection title="Core Skills" text={configData.aboutSkills} />
        <AboutSection title="My Approach" text={configData.aboutClosing} />
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center text-center py-10 px-4">
        <h1 className="text-3xl font-semibold">Let's work together.</h1>
        <p className="text-md text-gray-500 mt-2">
          Creating user experiences and visually appealing designs
        </p>

        <div className="mt-6 flex items-center gap-4 flex-wrap justify-center">
          <a href={configData.hireMeLink}>
            <button
              type="button"
              className="gap-x-1 relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-xl transition-all hover:shadow-md font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
              Hire Me
            </button>
          </a>
          <div className="mt-2">
          <CopyEmailButton />
          </div>
        </div>
      </div>
    </>
  );
}

// Reusable section component
function AboutSection({ title, text, icon }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
        {icon && <span className="text-lg">{icon}</span>}
        {title}
      </h2>
      <p className="text-gray-600 text-md leading-relaxed">{text}</p>
    </div>
  );
}
