import { useEffect, useRef, useState } from "react";
import { getConfigData } from "../data/configReader";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();
  const configData = getConfigData();
  const projects = configData.projects;

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="px-2">
      <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="font-medium text-lg flex items-center gap-x-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            Projects
          </div>
          <button
            onClick={() => navigate("/projects")}
            className="gap-x-2 text-gray-900 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 inline-flex items-center"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        {/* Project Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto md:flex-col md:overflow-y-auto gap-4 snap-x snap-mandatory scroll-smooth max-h-[520px] pr-1 md:pr-0"
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="min-w-full md:min-w-0 snap-start drop-shadow-sm bg-white rounded-lg px-5 py-3 gap-x-3 flex flex-col md:flex-row items-start md:items-center transition duration-300 ease-in-out hover:shadow-md border border-gray-200 hover:border-gray-300"
            >
              {/* Image */}
              <div className="rounded-full overflow-hidden flex items-center justify-center border border-gray-200 hidden md:block">
                <div className="card-image w-16 h-16 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={project["project-image-url"]}
                    alt={project["project-name"]}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <h1 className="font-medium text-lg">{project["project-name"]}</h1>
                <p className="text-gray-500 text-md">{project["project-desc"]}</p>
              </div>

              {/* Arrow Icon */}
              <div className="ml-auto hidden md:flex items-center">
                <svg
                  className={`w-6 h-6 transition duration-200 ${
                    hoveredIndex === index ? "text-gray-500" : "text-gray-300"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination Dots - Visible on All Screens */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition duration-300 ${
                index === activeIndex ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
