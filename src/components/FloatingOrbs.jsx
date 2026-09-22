"use client";

import { motion } from "framer-motion";

const ORBS = [
  {
    className:
      "left-[8%] top-[10%] h-72 w-72 bg-gradient-to-br from-blue-400 to-blue-600",
    duration: 9,
    delay: 0,
    range: 24,
  },
  {
    className:
      "right-[6%] top-[4%] h-96 w-96 bg-gradient-to-br from-purple-400 to-fuchsia-500",
    duration: 11,
    delay: 0.6,
    range: 30,
  },
  {
    className:
      "left-[32%] top-[46%] h-64 w-64 bg-gradient-to-br from-cyan-300 to-sky-500",
    duration: 8,
    delay: 1.2,
    range: 20,
  },
];

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-40 blur-2xl ${orb.className}`}
          animate={{ y: [0, -orb.range, 0], x: [0, orb.range / 2, 0] }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
