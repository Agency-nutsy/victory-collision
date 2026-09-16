"use client";

import { motion } from "framer-motion";
import { getFramerMotionTransition } from "@/utils/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={getFramerMotionTransition(0.4)}
      className="flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
}
