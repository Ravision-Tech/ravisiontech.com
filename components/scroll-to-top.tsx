"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";

const SCROLL_THRESHOLD = 400;
const FACE_OFFSET = 24;
const MAX_TILT = 10;
const REST_TRANSFORM = "rotateX(-16deg) rotateY(-20deg)";

const faces: { rotate: string; brightness: number; content?: React.ReactNode }[] = [
  {
    rotate: `rotateY(0deg) translateZ(${FACE_OFFSET}px)`, // front
    brightness: 1.1,
    content: <ChevronUp className="h-6 w-6" strokeWidth={2.5} />,
  },
  { rotate: `rotateX(90deg) translateZ(${FACE_OFFSET}px)`, brightness: 1.45 }, // top
  { rotate: `rotateY(90deg) translateZ(${FACE_OFFSET}px)`, brightness: 0.7 }, // right
  { rotate: `rotateY(-90deg) translateZ(${FACE_OFFSET}px)`, brightness: 0.55 }, // left
  { rotate: `rotateY(180deg) translateZ(${FACE_OFFSET}px)`, brightness: 0.7 }, // back
  { rotate: `rotateX(-90deg) translateZ(${FACE_OFFSET}px)`, brightness: 0.4 }, // bottom
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const GAP = 24;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);

      const button = buttonRef.current;
      if (!button) return;
      const footer = document.querySelector("footer");
      const overlap = footer ? window.innerHeight - footer.getBoundingClientRect().top : 0;
      button.style.bottom = `${overlap > 0 ? overlap + GAP : GAP}px`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const frameRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cube = cubeRef.current;
    if (!cube || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rotateY = clamp(px * 2 * MAX_TILT, -MAX_TILT, MAX_TILT);
      const rotateX = clamp(-py * 2 * MAX_TILT, -MAX_TILT, MAX_TILT);
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(frameRef.current);
    if (cubeRef.current) cubeRef.current.style.transform = REST_TRANSFORM;
  };

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={scrollToTop}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Scroll back to top"
      style={{ bottom: GAP }}
      className={`fixed right-6 z-50 h-12 w-12 cursor-pointer transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] [perspective:340px] motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div
        ref={cubeRef}
        className="relative h-full w-full transition-transform duration-[600ms] ease-out [transform-style:preserve-3d]"
        style={{ transform: REST_TRANSFORM }}
      >
        {faces.map((face, i) => (
          <span
            key={i}
            aria-hidden={i !== 0}
            className="absolute inset-0 flex items-center justify-center bg-[#23272e] text-primary ring-1 ring-white/10 [backface-visibility:hidden] ring-inset"
            style={{ transform: face.rotate, filter: `brightness(${face.brightness})` }}
          >
            {face.content}
          </span>
        ))}
      </div>
    </button>
  );
};

export default ScrollToTop;
