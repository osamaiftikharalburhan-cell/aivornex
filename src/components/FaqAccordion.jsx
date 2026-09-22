"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[24px] border border-white/50 bg-white/70 shadow-3d-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold tracking-tight text-zinc-900">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600/10 text-lg font-bold text-blue-600"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-500">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
