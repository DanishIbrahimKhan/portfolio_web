import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [speed, setSpeed] = useState(0);
  const timeoutRef = useRef(null);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    const moveCursor = (e) => {
      const now = performance.now();
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const dt = now - lastTimeRef.current;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const calculatedSpeed = distance / dt;

      setSpeed(calculatedSpeed);
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);

      lastPosRef.current = { x: e.clientX, y: e.clientY };
      lastTimeRef.current = now;

      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setVisible(false), 1000);
    };

    const addHoverEvents = () => {
      const hoverables = document.querySelectorAll("a, button, .hoverable");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    document.addEventListener("mousemove", moveCursor);
    addHoverEvents();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const scale = hovered ? 1.5 : speed > 0.3 ? 0.7 : 1;
  const opacity = !visible ? 0 : speed > 0.5 ? 0.4 : 1;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none transition-all duration-150 ease-out"
      style={{
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0) scale(${scale})`,
        opacity,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "2px solid black",  // or any width you prefer
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)", // red glow
        transition: "opacity 0.2s, transform 0.2s",
      }}
    ></div>
  );
}
