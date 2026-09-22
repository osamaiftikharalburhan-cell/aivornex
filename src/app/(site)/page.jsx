"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import PortfolioSection from "@/components/PortfolioSection";
import { WHATSAPP_LINK } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";

const FloatingOrbs = dynamic(() => import("@/components/FloatingOrbs"), {
  ssr: false,
});
const HeroRobots = dynamic(() => import("@/components/HeroRobots"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-32 pt-16">
        <div className="grid-fade absolute inset-0" />
        <FloatingOrbs />
        <HeroRobots />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 shadow-3d-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            AVAILABLE FOR NEW PROJECTS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-shadow-3d mt-8 text-5xl font-extrabold tracking-tighter text-zinc-900 sm:text-6xl md:text-7xl"
          >
            We Build AI Agents &amp;
            <br />
            Websites That Scale
            <br />
            Your Business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500"
          >
            Aivornex designs and builds AI voice agents, chatbots, and
            high-performance websites — automating the busywork so your
            business runs and converts around the clock.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:translate-y-0"
            >
              Start Your Project
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-zinc-200 bg-white/70 px-8 py-4 text-sm font-semibold text-zinc-800 shadow-3d-sm transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:translate-y-0"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-zinc-500">
              Eight ways we help your business look sharper and run itself.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600"
            >
              See all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <PortfolioSection />

      <section id="contact" className="relative px-4 py-12">
        <div className="relative mx-4 overflow-hidden rounded-[40px] bg-zinc-900 px-8 py-20 shadow-3d-lg sm:mx-auto sm:max-w-6xl">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 rounded-[40px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
              Ready to build something intelligent?
            </h2>
            <p className="mt-4 text-zinc-400">
              Tell us about your project and we&apos;ll get back to you
              within 24 hours.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-900 shadow-xl transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:translate-y-0"
            >
              Chat With Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
