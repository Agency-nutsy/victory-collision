"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site.config";

/**
 * LoadingScreen (React version) — handles CLIENT-SIDE navigation to the home page.
 *
 * On INITIAL page load (hard refresh / first visit), the inline vanilla-JS script
 * in layout.tsx fires BEFORE React loads and sets window.__vcLoaderActive = true.
 * In that case, this component renders null and lets the inline script handle it.
 *
 * On CLIENT-SIDE navigation to "/" (clicking logo, home link etc.),
 * window.__vcLoaderActive is false/undefined, so this component shows its own loader.
 */
export default function LoadingScreen() {
  // Lazy initializer runs synchronously on the client.
  // Since this component uses dynamic import with { ssr: false }, it's client-only.
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">(() => {
    // If the inline vanilla-JS loader is already running (initial page load), skip.
    if (
      typeof window !== "undefined" &&
      (window as unknown as Record<string, unknown>).__vcLoaderActive
    ) {
      return "gone";
    }
    // Client-side navigation: show loader immediately from the very first render.
    return "visible";
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // If we started as "gone" (inline loader handling it), nothing to do.
    if (phase === "gone") return;

    // Start the progress + fade timer sequence for client-side navigation.
    const timers = [
      setTimeout(() => setProgress(68), 80),
      setTimeout(() => setProgress(88), 1200),
      setTimeout(() => setProgress(100), 2600),
      setTimeout(() => setPhase("fading"), 3000),
      setTimeout(() => setPhase("gone"), 3500),
    ];

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#141210",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase === "fading" ? 0 : 1,
        pointerEvents: phase === "fading" ? "none" : "all",
        transition: "opacity 500ms ease-in-out",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {siteConfig.logoUrl && (
          <img
            src={siteConfig.logoUrl}
            alt={siteConfig.businessName}
            style={{
              width: "72px",
              height: "72px",
              objectFit: "contain",
              marginBottom: "16px",
              filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.8))",
            }}
          />
        )}
        <h1
          style={{
            color: "#F5F1EA",
            fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            margin: 0,
            fontFamily: "inherit",
          }}
        >
          {nameLine1}
        </h1>
        {nameLine2 && (
          <p
            style={{
              color: "#B8935F",
              fontSize: "0.72rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginTop: "8px",
              marginBottom: 0,
            }}
          >
            {nameLine2}
          </p>
        )}
      </div>

      {/* Progress bar track */}
      <div
        style={{
          width: "min(300px, 75vw)",
          height: "2px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "9999px",
          overflow: "hidden",
        }}
      >
        {/* Progress bar fill */}
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "#B8935F",
            borderRadius: "9999px",
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

      <p
        style={{
          color: "#3A3530",
          fontSize: "0.6rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          marginTop: "14px",
        }}
      >
        Loading Experience
      </p>
    </div>
  );
}
