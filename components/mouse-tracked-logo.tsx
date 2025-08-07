"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Branding } from "@/lib/branding";

const EYE_RADIUS_IN_PX = 16;
const ONLY_TRACK_ON_HOVER = false;

const MouseTrackedLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [, setIsHovered] = useState(false);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const targetPosRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });

  const updateEyePos = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
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

    targetPosRef.current = { x: dx, y: dy };
  };

  useEffect(() => {
    const smoothing = 0.06; // (0.1 = smooth, 0.5 = snappy)

    const animate = () => {
      const dx = targetPosRef.current.x - currentPosRef.current.x;
      const dy = targetPosRef.current.y - currentPosRef.current.y;

      if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
        currentPosRef.current.x += dx * smoothing;
        currentPosRef.current.y += dy * smoothing;
        setEyePos({
          x: currentPosRef.current.x,
          y: currentPosRef.current.y,
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!ONLY_TRACK_ON_HOVER) {
      const handleMouseMove = (e: MouseEvent) => {
        updateEyePos(e.clientX, e.clientY);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const handleMouseLeave = () => {
    targetPosRef.current = { x: 0, y: 0 };
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ONLY_TRACK_ON_HOVER) {
      updateEyePos(e.clientX, e.clientY);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-32 h-32"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <Image
        src="/branding/logo-icon-split/back-of-eye.svg"
        fill
        unoptimized
        priority
        alt={`A part of the logo for ${Branding.Name}`}
        className="absolute inset-0 w-32 h-full select-none"
        draggable={false}
      />
      <Image
        src="/branding/logo-icon-split/eye.svg"
        fill
        unoptimized
        priority
        alt={`A part of the logo for ${Branding.Name}`}
        style={{
          transform: `translate(${eyePos.x}px, ${eyePos.y}px)`,
          willChange: "transform",
        }}
        className="absolute inset-0 w-32 h-full select-none"
        draggable={false}
      />
      <Image
        src="/branding/logo-icon-split/eyelid.svg"
        fill
        unoptimized
        priority
        alt={`A part of the logo for ${Branding.Name}`}
        className="absolute inset-0 w-32 h-full select-none"
        draggable={false}
      />
    </div>
  );
};

export default MouseTrackedLogo;
