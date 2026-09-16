"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({ 
  children, 
  className = "",
  strength = 15 // px max distance
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const xSpring = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const ySpring = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    xSpring.set(middleX * 0.3);
    ySpring.set(middleY * 0.3);
  };

  const handleMouseLeave = () => {
    xSpring.set(0);
    ySpring.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
