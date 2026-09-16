"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  simulateDirtyBefore?: boolean;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  simulateDirtyBefore = false
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Use motion value for handle position (0 to 1)
  const position = useMotionValue(0.5);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrag = (event: any, info: any) => {
    if (!containerWidth) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    // Calculate new position based on clientX relative to container
    let clientX = info.point.x;
    let newPos = (clientX - rect.left) / containerWidth;
    newPos = Math.max(0, Math.min(1, newPos)); // clamp between 0 and 1
    position.set(newPos);
  };

  const clipPathValue = useTransform(position, (pos) => `inset(0 ${100 - pos * 100}% 0 0)`);
  const handleLeft = useTransform(position, (pos) => `${pos * 100}%`);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden cursor-col-resize group bg-[#1A1815] border border-[#38332C] touch-none select-none"
    >
      {/* Before Image (Background) */}
      <img
        src={beforeImage}
        alt={beforeLabel}
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${
          simulateDirtyBefore ? "contrast-75 brightness-[0.85] sepia-[.15] blur-[0.5px] saturate-50" : ""
        }`}
      />
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[#F5F1EA] px-3 py-1 rounded-full text-sm font-medium z-10 pointer-events-none border border-white/10">
        {beforeLabel}
      </div>

      {/* After Image (Foreground, clipped) */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ clipPath: clipPathValue }}
      >
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-[#F5F1EA] px-3 py-1 rounded-full text-sm font-medium border border-white/10">
          {afterLabel}
        </div>
      </motion.div>

      {/* Draggable Handle */}
      <motion.div
        className="absolute top-0 bottom-0 z-30 flex items-center justify-center w-1 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ 
          left: handleLeft,
          backgroundColor: "var(--accent-color, #B8935F)",
          x: "-50%" 
        }}
        drag="x"
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={containerRef}
        onDrag={handleDrag}
      >
        <div className="w-10 h-10 bg-[#24211D] rounded-full flex items-center justify-center shadow-2xl border-2 border-accent">
          <MoveHorizontal className="w-5 h-5 text-accent" />
        </div>
      </motion.div>
    </div>
  );
}
