import React, { useState } from "react";

function ProjectShowCard({ screenShot, title, description }) {
  const [showFull, setShowFull] = useState(false);

  const MAX_LENGTH = 120;
  const isLong = description.length > MAX_LENGTH;
  const displayText = showFull || !isLong
    ? description
    : description.slice(0, MAX_LENGTH) + "...";

  return (
    <div className="flex flex-col justify-start bg-white rounded-xl shadow-md w-full h-[460px] p-4 overflow-hidden">
      {/* Macbook image */}
      <div className="relative w-full h-[200px] mb-4">
        <img
          src="https://raw.githubusercontent.com/DanishIbrahimKhan/assets/main/macbook-air-medium.png"
          alt="Mac Frame"
          className="w-full h-full object-contain pointer-events-none z-10"
        />
        <div className="absolute top-[5%] left-[11%] w-[78%] h-[86%] z-0 overflow-hidden rounded">
          <img
            src={screenShot}
            alt="Screenshot"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[16px] font-semibold text-gray-800 text-center leading-snug mb-1 break-words">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 text-center px-2 leading-snug break-words">
        {displayText}
        {isLong && (
          <button
            onClick={() => setShowFull(!showFull)}
            className="text-blue-500 text-sm ml-1 hover:underline"
          >
            {showFull ? "Show Less" : "Learn More"}
          </button>
        )}
      </p>
    </div>
  );
}

export default ProjectShowCard;
