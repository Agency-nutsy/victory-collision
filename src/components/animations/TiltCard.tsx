"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const [isHovered, setIsHovered] = useState(false);

  // Use springs for smooth snap and follow
  const xSpring = useSpring(0, { stiffness: 300, damping: 40 });
  const ySpring = useSpring(0, { stiffness: 300, damping: 40 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Only apply on desktop devices (non-touch)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    // Max tilt angles
    xSpring.set(xPct * 15); // max 15deg
    ySpring.set(yPct * -15);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    xSpring.set(0);
    ySpring.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: xSpring,
        rotateX: ySpring,
        transformStyle: "preserve-3d",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`relative h-full ${className}`}
    >
      <div 
        style={{ transform: "translateZ(30px)", height: "100%" }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
