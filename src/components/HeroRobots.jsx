"use client";

import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import Robot from "@/components/Robot";

const BAR_HEIGHTS = [6, 14, 9, 16, 7];

export default function HeroRobots() {
  return (
    <>
      {/* Left robot: coding on a laptop */}
      <motion.div
        className="pointer-events-none absolute left-[2%] top-[20%] hidden md:block lg:left-[6%]"
        animate={{ y: [-14, 14, -14], rotate: [-4, 4, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative drop-shadow-2xl">
          <Robot size={130} hue="blue" withLegs />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <div className="h-3 w-20 rounded-b-md bg-zinc-200 shadow-md" />
            <div className="absolute -top-10 left-1/2 h-10 w-20 -translate-x-1/2 rounded-md border border-zinc-200 bg-white p-1 shadow-lg">
              <div className="h-full w-full rounded-sm bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <div className="absolute left-1.5 top-1.5 h-1 w-8 rounded-full bg-blue-400/60" />
              <div className="absolute left-1.5 top-3.5 h-1 w-5 rounded-full bg-purple-400/60" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right robot: voice agent with a live waveform */}
      <motion.div
        className="pointer-events-none absolute right-[2%] top-[16%] hidden md:block lg:right-[6%]"
        animate={{ y: [14, -14, 14], rotate: [4, -4, 4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative drop-shadow-2xl">
          <div className="absolute -top-12 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-2xl rounded-bl-sm bg-white px-4 py-2.5 shadow-3d-sm">
            <Mic className="h-3.5 w-3.5 text-blue-600" strokeWidth={2.5} />
            <div className="flex items-end gap-[3px]">
              {BAR_HEIGHTS.map((h, i) => (
                <motion.span
                  key={i}
                  className="w-[3px] rounded-full bg-gradient-to-t from-blue-600 to-purple-500"
                  style={{ height: h }}
                  animate={{ scaleY: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.12,
                  }}
                />
              ))}
            </div>
            <div className="absolute -bottom-1 left-4 h-2 w-2 rotate-45 bg-white" />
          </div>
          <Robot size={130} hue="purple" withLegs />
        </div>
      </motion.div>
    </>
  );
}
