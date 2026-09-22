"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function PortfolioCard({ project, index }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [10, -10]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-10, 10]),
    springConfig
  );

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative overflow-hidden rounded-[32px] border border-zinc-100 bg-white shadow-3d-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className={`flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br text-6xl ${project.gradient}`}
      >
        <span className="drop-shadow-lg transition-transform duration-500 group-hover:scale-[1.03]">
          {project.emoji}
        </span>
      </div>

      <div className="p-8" style={{ transform: "translateZ(30px)" }}>
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {project.category}
        </span>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-zinc-900">
          {project.title}
        </h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:translate-y-0"
        >
          View Live
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </motion.div>
  );
}
