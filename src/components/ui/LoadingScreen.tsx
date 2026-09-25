"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    // Progress timeline:
    // 0 → 68% in 1100ms (very fast, feels responsive)
    // 68% → 88% in next 1400ms (slows down noticeably)
    // 88% → 100% in last 600ms (crawls to finish)
    // Fade starts at 3000ms, removed from DOM at 3500ms

    const timers = [
      setTimeout(() => setProgress(68), 80),
      setTimeout(() => setProgress(88), 1200),
      setTimeout(() => setProgress(100), 2600),
      setTimeout(() => setPhase("fading"), 3000),
      setTimeout(() => setPhase("gone"), 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === "gone") return null;

  const nameParts = siteConfig.businessName.split(" & ");
  const nameLine1 = nameParts[0] || siteConfig.businessName;
  const nameLine2 = nameParts[1] ? `& ${nameParts[1]}` : "";

  return (
    <div
      aria-label="Loading"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`fixed inset-0 z-[9999] bg-[#141210] flex flex-col items-center justify-center select-none transition-opacity duration-500 ease-in-out ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Center content */}
      <div className="relative flex flex-col items-center gap-10">
        {/* Logo / Brand */}
        <div className="text-center">
          <h1
            className="text-4xl md:text-5xl font-heading font-bold tracking-[0.12em] uppercase leading-tight"
            style={{ color: "#F5F1EA" }}
          >
            {nameLine1}
          </h1>
          {nameLine2 && (
            <p
              className="text-sm md:text-base tracking-[0.35em] uppercase mt-2"
              style={{ color: "var(--accent-color, #B8935F)" }}
            >
              {nameLine2}
            </p>
          )}
        </div>

        {/* Progress bar container */}
        <div className="flex flex-col items-center gap-3 w-full">
          {/* Track */}
          <div className="w-64 md:w-80 h-[2px] rounded-full overflow-hidden bg-white/10">
            {/* Fill */}
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: "var(--accent-color, #B8935F)",
                transition:
                  progress === 0
                    ? "none"
                    : progress === 68
                    ? "width 1100ms cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    : progress === 88
                    ? "width 1400ms cubic-bezier(0.65, 0, 0.35, 1)"
                    : "width 600ms cubic-bezier(0.33, 1, 0.68, 1)",
              }}
            />
          </div>

          {/* Percentage label */}
          <span
            className="text-xs font-mono tracking-[0.2em]"
            style={{ color: "#6B6158" }}
          >
            {String(Math.round(progress)).padStart(3, "0")}%
          </span>
        </div>

        {/* Tagline */}
        <p
          className="text-xs tracking-[0.3em] uppercase animate-pulse"
          style={{ color: "#4A453E" }}
        >
          Loading Experience
        </p>
      </div>
    </div>
  );
}
