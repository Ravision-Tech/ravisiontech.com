"use client";

import { useEffect, useRef, useState } from "react";
import { LockIcon } from "lucide-react";

const W = 500;
const H = 390;

const CANVAS_BG = "#090c0c";
const CANVAS_FADE = "rgba(9, 12, 12, 0.15)";
const CANVAS_TEXT = "#a0dde6";

const HeroWindow = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full"
      style={{
        animation: "windowFadeIn 0.7s 0.42s ease both",
      }}
    >
      <style>{`@keyframes windowFadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
      <div
        className="absolute -inset-6 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--brand-glow-sm) 0%, transparent 65%)",
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.4s ease",
        }}
      />

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "100%",
          borderRadius: 10,
          border: "1px solid var(--border-strong)",
          background: "var(--surface-window)",
          boxShadow: hovered
            ? "0 48px 96px rgba(0,0,0,0.75), 0 0 0 1px var(--border-bolder), 0 0 50px var(--brand-glow)"
            : "0 32px 72px rgba(0,0,0,0.65), 0 0 0 1px var(--border-subtle)",
          transform: hovered ? "rotate(2deg) scale(1.02)" : "rotate(3deg)",
          transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease",
          cursor: "default",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-3.5"
          style={{ height: 36, borderBottom: "1px solid var(--border-subtle)", borderRadius: "10px 10px 0 0" }}
        >
          <div className="flex gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--dot-red)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--dot-yellow)" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--dot-green)" }} />
          </div>
          <div
            className="flex-1 flex items-center gap-1.5 px-2.5 mx-2"
            style={{
              height: 20,
              background: "var(--surface-elevated)",
              borderRadius: 4,
              border: "1px solid var(--border-muted)",
            }}
          >
            <LockIcon className="w-2 h-2 opacity-80 text-faint" />
            <span className="text-faint truncate select-none" style={{ fontSize: 9, fontFamily: "monospace" }}>
              your-business.com
            </span>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          style={{ paddingBottom: `${(H / W) * 100}%`, borderRadius: "0 0 9px 9px" }}
        >
          <div className="absolute inset-0" style={{ clipPath: `polygon(100% 0%, 100% 100%, 0% 100%)` }}>
            <BinaryCanvas />
          </div>

          <div className="absolute inset-0" style={{ clipPath: `polygon(0% 0%, 100% 0%, 0% 100%)` }}>
            <WebMockup />
          </div>

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="none"
          >
            <line x1={W} y1={0} x2={0} y2={H} stroke="var(--brand-glow-lg)" strokeWidth="1" />
            {/* Subtle glow duplicate */}
            <line x1={W} y1={0} x2={0} y2={H} stroke="var(--brand-glow-md)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const BinaryCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | undefined>(undefined);
  const dropsRef = useRef<number[]>([]);
  const tickRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 11;
    const cols = Math.floor(canvas.width / fontSize);
    dropsRef.current = Array.from({ length: cols }, () => Math.floor(Math.random() * -(canvas.height / fontSize)));

    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    ctx.fillStyle = CANVAS_BG;
    ctx.fillRect(0, 0, W, H);

    const draw = () => {
      tickRef.current++;
      if (tickRef.current % 6 !== 0) {
        frameRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.fillStyle = CANVAS_FADE;
      ctx.fillRect(0, 0, W, H);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < dropsRef.current.length; i++) {
        const y = dropsRef.current[i] * fontSize;
        if (y > 0 && y < H) {
          ctx.fillStyle = CANVAS_TEXT;
          ctx.fillText(Math.random() > 0.5 ? "1" : "0", i * fontSize, y);
          ctx.fillStyle = `rgba(111,192,202,${Math.random() * 0.45 + 0.15})`;
          ctx.fillText(Math.random() > 0.5 ? "1" : "0", i * fontSize, y - fontSize);
        }
        dropsRef.current[i]++;
        if (dropsRef.current[i] * fontSize > H && Math.random() > 0.97) {
          dropsRef.current[i] = Math.floor(Math.random() * -20);
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} width={W} height={H} className="absolute inset-0 w-full h-full" />;
};

const Skeleton = ({ w, h = 5, r = 3, o = 1 }: { w: number | string; h?: number; r?: number; o?: number }) => {
  return (
    <div
      style={{ width: w, height: h, borderRadius: r, background: "var(--border-strong)", opacity: o, flexShrink: 0 }}
    />
  );
};

const WebMockup = () => {
  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ background: "var(--surface-page)" }}>
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: "1px solid var(--border-subtle)" }}
      >
        <div className="flex items-center gap-1.5">
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 3,
              background: "var(--border-subtle)",
              border: "1px solid var(--border-strong)",
            }}
          />
          <Skeleton w={30} h={4} />
        </div>
        <div className="flex gap-3 items-center">
          <Skeleton w={18} h={3.5} o={0.5} />
          <Skeleton w={22} h={3.5} o={0.5} />
          <Skeleton w={16} h={3.5} o={0.5} />
        </div>
        <Skeleton w={36} h={14} r={4} o={0.6} />
      </div>

      <div style={{ padding: "18px 16px 14px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            background: "var(--surface-elevated)",
            borderRadius: 20,
            padding: "2px 7px",
            marginBottom: 10,
          }}
        >
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--brand)", opacity: 0.5 }} />
          <Skeleton w={38} h={3} r={2} o={0.4} />
        </div>
        <Skeleton w="82%" h={12} r={3} />
        <div style={{ height: 4 }} />
        <Skeleton w="68%" h={12} r={3} />
        <div style={{ height: 4 }} />
        <Skeleton w="48%" h={12} r={3} o={0.4} />
        <div style={{ height: 10 }} />
        <Skeleton w="90%" h={3.5} o={0.25} />
        <div style={{ height: 3 }} />
        <Skeleton w="72%" h={3.5} o={0.25} />
        <div className="flex gap-2 mt-4">
          <Skeleton w={56} h={18} r={5} />
          <Skeleton w={44} h={18} r={5} o={0.35} />
        </div>
      </div>

      <div style={{ height: 1, background: "var(--surface-elevated)", margin: "0 16px" }} />

      <div className="grid grid-cols-2 gap-2 px-4 pt-3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              background: "var(--surface-card)",
              borderRadius: 6,
              border: "1px solid var(--border-subtle)",
              padding: "8px",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 3,
                position: "relative",
                marginBottom: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{ position: "absolute", inset: 0, borderRadius: 3, background: "var(--brand)", opacity: 0.15 }}
              />
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 2,
                  background: "var(--brand)",
                  opacity: 0.5,
                  position: "relative",
                }}
              />
            </div>
            <Skeleton w={[28, 36, 24, 32][i]} h={4.5} r={2} />
            <div style={{ height: 4 }} />
            <Skeleton w="90%" h={3} o={0.3} />
            <div style={{ height: 2 }} />
            <Skeleton w="65%" h={3} o={0.3} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroWindow;
