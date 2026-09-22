"use client";

import { motion } from "framer-motion";

const ORBS = [
  {
    style: {
      left: "8%",
      top: "10%",
      width: 288,
      height: 288,
      background:
        "radial-gradient(circle, rgba(96,165,250,0.55) 0%, rgba(37,99,235,0.2) 45%, rgba(37,99,235,0) 70%)",
    },
    duration: 9,
    delay: 0,
    range: 24,
  },
  {
    style: {
      right: "6%",
      top: "4%",
      width: 384,
      height: 384,
      background:
        "radial-gradient(circle, rgba(216,180,254,0.55) 0%, rgba(217,70,239,0.2) 45%, rgba(217,70,239,0) 70%)",
    },
    duration: 11,
    delay: 0.6,
    range: 30,
  },
  {
    style: {
      left: "32%",
      top: "46%",
      width: 256,
      height: 256,
      background:
        "radial-gradient(circle, rgba(165,243,252,0.55) 0%, rgba(14,165,233,0.2) 45%, rgba(14,165,233,0) 70%)",
    },
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
          className="absolute rounded-full opacity-40"
          style={orb.style}
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
