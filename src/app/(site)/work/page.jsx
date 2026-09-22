import dynamic from "next/dynamic";
import PortfolioCard from "@/components/PortfolioCard";
import { PORTFOLIO } from "@/lib/portfolio-data";

const FloatingOrbs = dynamic(() => import("@/components/FloatingOrbs"));

export const metadata = {
  title: "Our Work — Aivornex",
  description:
    "A look at the AI-powered websites Aivornex has designed and built for clients.",
};

export default function WorkPage() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-16">
      <div className="grid-fade absolute inset-0" />
      <FloatingOrbs />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 shadow-3d-sm">
            OUR WORK
          </span>
          <h1 className="text-shadow-3d mt-6 text-4xl font-extrabold tracking-tighter text-zinc-900 sm:text-5xl">
            Projects We&apos;re Proud Of.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-500">
            A selection of websites and AI tools we&apos;ve designed and built
            for clients across industries.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((project, i) => (
            <PortfolioCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
