import { useEffect, useRef, useState } from "react";
import ProjectShowCard from "../components/ProjectShowCard";
import { getConfigData } from "../data/configReader";

export default function Home() {
  const { projectShow: projects } = getConfigData();

  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // 🟢 Track active dot

  // 🟢 Update active dot on scroll
  const updateActiveIndex = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.querySelector(".snap-start")?.offsetWidth || 320;
    const index = Math.round(container.scrollLeft / cardWidth) % projects.length;
    setActiveIndex(index);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      pauseAutoScroll();
      updateActiveIndex();
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  // ✅ Wheel Scroll Horizontal
  useEffect(() => {
    const el = scrollRef.current;
    const handleWheel = (e) => {
      if (!el || e.deltaY === 0) return;
      pauseAutoScroll();
      e.preventDefault();
      el.scrollLeft += e.deltaY * 10;
    };
    el?.addEventListener("wheel", handleWheel);
    return () => el?.removeEventListener("wheel", handleWheel);
  }, []);

  // ✅ Drag Scroll
  const handleMouseDown = (e) => {
    pauseAutoScroll();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    resumeAutoScrollAfterDelay();
  };

  // ✅ Auto Scroll
  useEffect(() => {
    const autoScroll = () => {
      const el = scrollRef.current;
      if (!el || isAutoScrollPaused || isDragging) return;

      el.scrollLeft += 0.5;
      const halfScroll = el.scrollWidth / 2;
      if (el.scrollLeft >= halfScroll) {
        el.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isDragging, isAutoScrollPaused]);

  const pauseAutoScroll = () => {
    setIsAutoScrollPaused(true);
    clearTimeout(timeoutRef.current);
  };

  const resumeAutoScrollAfterDelay = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 3000);
  };

  return (
    <div className="px-4 select-none">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>

      {/* ⬇️ Pagination Dots */}
      <div className="flex justify-center gap-2 mb-3">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition ${
              activeIndex === i ? "bg-gray-800 scale-110" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-3 text-center">⇠ Scroll ⇢</p>

      {/* 🟢 Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {[...projects, ...projects].map((project, index) => (
          <div
            key={index}
            className="min-w-[320px] max-w-sm flex-shrink-0 snap-start"
          >
            <ProjectShowCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
