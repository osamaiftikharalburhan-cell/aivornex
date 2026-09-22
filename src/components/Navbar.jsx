"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl bg-white rounded-full shadow-md z-50 px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-lg font-extrabold tracking-tighter text-zinc-900"
        >
          AIVORNEX
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-zinc-600 transition-colors duration-300 hover:text-zinc-900 after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-zinc-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:translate-y-0 md:inline-block"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 [-webkit-tap-highlight-color:transparent] md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-2 text-center">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-50 hover:text-zinc-900 [-webkit-tap-highlight-color:transparent]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-4 block rounded-full bg-zinc-900 px-8 py-3 text-center text-sm font-semibold text-white shadow-xl transition-all duration-200 active:scale-[0.98] [-webkit-tap-highlight-color:transparent]"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
