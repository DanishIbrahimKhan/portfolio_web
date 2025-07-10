import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectShowCard({
  screenShot,
  title,
  description,
  liveLink,
  githubLink,
  techStack = [],
}) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.01] w-full min-h-[520px] p-4 overflow-hidden my-4">
      
      {/* MacBook Frame */}
      <div className="relative w-full h-[200px] mb-4 group">
        <img
          src="https://raw.githubusercontent.com/DanishIbrahimKhan/assets/main/macbook-air-medium.png"
          alt="Mac Frame"
          className="w-full h-full object-contain z-10 pointer-events-none"
        />
        <div className="absolute top-[5%] left-[11%] w-[78%] h-[86%] z-0 overflow-hidden rounded-lg">
          <img
            src={screenShot}
            alt="Screenshot"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 text-center mb-2 px-2 break-words">
        {title}
      </h3>

      {/* Truncated Description (3 lines) */}
      <p className="text-sm text-gray-600 text-center px-2 leading-snug mb-2 line-clamp-3">
        {description}
      </p>

      {/* Tech Stack */}
      {techStack.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 my-2 min-h-[40px]">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full border"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-3">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-blue-600 hover:underline hover:text-blue-800 transition"
          >
            <FaExternalLinkAlt className="text-sm" />
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-700 hover:underline hover:text-black transition"
          >
            <FaGithub className="text-base" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectShowCard;
