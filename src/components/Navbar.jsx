"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex w-full max-w-6xl items-center justify-between rounded-[24px] border border-white/50 bg-white/70 px-5 py-3 shadow-3d-sm"
      >
        <Link
          href="/"
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
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:translate-y-0"
        >
          Let&apos;s Talk
        </a>
      </motion.nav>
    </header>
  );
}
