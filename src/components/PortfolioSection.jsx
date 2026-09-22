import Image from "next/image";

const PROJECTS = [
  {
    title: "AI Lead Generation Bot",
    description: "Automated bot that finds, qualifies and nurtures leads 24/7.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600",
  },
  {
    title: "WhatsApp Automation System",
    description:
      "Auto replies, order tracking and customer support on WhatsApp.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600",
  },
  {
    title: "Full-Stack E-commerce Website",
    description: "Fast, SEO optimized store built with Next.js and MERN Stack.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
  },
  {
    title: "AI Customer Support Chatbot",
    description: "Smart chatbot that solves 80% queries without human help.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
  },
  {
    title: "Business CRM & Dashboard",
    description:
      "Custom dashboard to manage leads, sales and team in one place.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
  },
  {
    title: "Website with AI Integration",
    description: "Websites supercharged with AI features and automations.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative px-4 py-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-zinc-900 px-5 py-16 sm:px-10 md:py-20">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-base font-semibold text-transparent sm:text-lg">
            AI Automations &amp; Full-Stack Solutions
          </p>
          <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
            We at Aivornex build intelligent AI automations that save time and
            scale businesses. From lead generation bots, WhatsApp automations,
            to custom CRM and full-stack websites with Next.js, MERN Stack. We
            turn manual work into smart systems.
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/40 hover:shadow-[0_0_40px_-8px_rgba(37,99,235,0.55)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
