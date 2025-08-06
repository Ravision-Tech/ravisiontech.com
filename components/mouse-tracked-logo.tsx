"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { Branding } from "@/lib/branding";

const EYE_RADIUS_IN_PX = 16;

const MouseTrackedLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let dx = mouseX - centerX;
    let dy = mouseY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > EYE_RADIUS_IN_PX) {
      const scale = EYE_RADIUS_IN_PX / distance;
      dx *= scale;
      dy *= scale;
    }

    setEyePos({ x: dx, y: dy });
  };

  const handleMouseLeave = () => {
    setEyePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-32 h-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/branding/logo-icon-split/back-of-eye.svg"
        fill
        unoptimized
        alt={`The Logomark of ${Branding.Name}`}
        className="absolute inset-0 w-32 h-full"
        draggable={false}
      />
      <Image
        src="/branding/logo-icon-split/eye.svg"
        fill
        unoptimized
        alt={`The Logomark of ${Branding.Name}`}
        style={{
          transform: `translate(${eyePos.x}px, ${eyePos.y}px)`,
          transition: "transform 0.1s linear",
        }}
        className="absolute inset-0 w-32 h-full"
        draggable={false}
      />
      <Image
        src="/branding/logo-icon-split/eyelid.svg"
        fill
        unoptimized
        alt={`The Logomark of ${Branding.Name}`}
        className="absolute inset-0 w-32 h-full"
        draggable={false}
      />
    </div>
  );
};

export default MouseTrackedLogo;
