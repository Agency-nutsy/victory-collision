"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useVelocity, useSpring, useTransform, useAnimationFrame } from "framer-motion";
import { getFramerMotionTransition } from "@/utils/motion";

export default function MiniCar() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const [rotation, setRotation] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Pause animation when tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useAnimationFrame((t, delta) => {
    if (!isVisible) return;
    
    // Base rotation speed + scroll-based speed
    const baseSpeed = 0.5;
    const velocityFactor = smoothVelocity.get() * 0.05; // Adjust multiplier as needed
    
    // Keep it rotating smoothly
    let moveBy = (baseSpeed + Math.abs(velocityFactor)) * (delta / 16);
    
    // Reverse direction based on scroll direction if desired, 
    // but a constant forward direction + speedup is usually better for a wheel
    if (velocityFactor < 0) {
      moveBy = moveBy * -1;
    }
    
    setRotation(prev => (prev + moveBy) % 360);
  });

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center justify-center w-16 h-16 pointer-events-none mix-blend-difference"
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={getFramerMotionTransition(1, 0.5)}
    >
      {/* Sleek Minimalist Wheel / Rim SVG */}
      <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="white" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="50" cy="50" r="38" stroke="white" strokeWidth="4" />
        <circle cx="50" cy="50" r="12" stroke="white" strokeWidth="2" />
        <path d="M50 12L50 38M50 62L50 88M12 50L38 50M62 50L88 50" stroke="white" strokeWidth="3" />
        <path d="M23 23L41 41M59 59L77 77M77 23L59 41M41 59L23 77" stroke="white" strokeWidth="2" opacity="0.7" />
      </svg>
    </motion.div>
  );
}
