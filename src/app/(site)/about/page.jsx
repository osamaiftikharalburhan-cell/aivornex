import dynamic from "next/dynamic";
import { CONTACT_EMAIL, MAILTO_LINK, WHATSAPP_LINK } from "@/lib/constants";

const FloatingOrbs = dynamic(() => import("@/components/FloatingOrbs"));

export const metadata = {
  title: "About — Aivornex",
  description:
    "Meet Osama, the founder behind Aivornex — building AI-powered websites for ambitious brands.",
};

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "24h", label: "Avg. Response Time" },
];

const VALUES = [
  {
    icon: "🎯",
    title: "Outcome-Focused",
    description:
      "Every site is built around one question: does this help you get more customers?",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable",
    description:
      "Clear timelines, honest updates, and launches that happen on schedule.",
  },
  {
    icon: "🤝",
    title: "Direct Partnership",
    description:
      "You work directly with the person building your site — no account managers in between.",
  },
];

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-16">
      <div className="grid-fade absolute inset-0" />
      <FloatingOrbs />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 shadow-3d-sm">
            ABOUT AIVORNEX
          </span>
          <h1 className="text-shadow-3d mt-6 text-4xl font-extrabold tracking-tighter text-zinc-900 sm:text-5xl">
            Built by One Person, Backed by Real Craft.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-500">
            Aivornex is a boutique web and AI studio founded by Osama —
            helping small and growing businesses look, feel, and convert
            like industry leaders.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[380px_1fr]">
          <div className="rounded-[32px] border border-white/50 bg-white/70 p-8 text-center shadow-3d">
            <div
              className="mx-auto flex h-28 w-28 items-center justify-center rounded-[28px] bg-gradient-to-br from-blue-500 to-purple-500 text-4xl font-extrabold text-white shadow-3d-lg"
              style={{ transform: "translateZ(20px)" }}
            >
              OI
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-zinc-900">
              Osama Iftikhar Alburhan
            </h2>
            <p className="mt-1 text-sm font-medium text-blue-600">
              Founder &amp; AI/Web Developer
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Building AI voice agents, chatbots, and automation-driven
              websites that run and grow your business around the clock.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:translate-y-0"
              >
                Message on WhatsApp
              </a>
              <a
                href={MAILTO_LINK}
                className="break-all rounded-full border border-zinc-200 bg-white px-6 py-3 text-center text-sm font-semibold text-zinc-800 shadow-3d-sm transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:translate-y-0"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-white/50 bg-white/70 p-6 text-center shadow-3d-sm"
                >
                  <p className="text-3xl font-extrabold tracking-tighter text-zinc-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[32px] border border-white/50 bg-white/70 p-8 shadow-3d-sm">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900">
                My Story
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                I started Aivornex because too many small businesses were
                stuck with outdated, slow websites that didn&apos;t reflect
                the quality of what they actually offer. I combine clean,
                modern design with practical AI automation so your website
                doesn&apos;t just look good — it actively brings in
                customers while you focus on running your business.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[24px] border border-white/50 bg-white/70 p-6 shadow-3d-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-lg text-blue-600">
                    {value.icon}
                  </div>
                  <h4 className="mt-4 text-sm font-bold tracking-tight text-zinc-900">
                    {value.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
