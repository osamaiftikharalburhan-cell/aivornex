import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import FaqAccordion from "@/components/FaqAccordion";
import ContactCtaButtons from "@/components/ContactCtaButtons";
import ServiceIcon from "@/components/ServiceIcon";
import {
  SERVICES,
  PROCESS_STEPS,
  getServiceBySlug,
  getServiceFaq,
} from "@/lib/services-data";

const FloatingOrbs = dynamic(() => import("@/components/FloatingOrbs"));

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: `${service.title} — Aivornex`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const faq = getServiceFaq(service);

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-24 pt-16">
        <div className="grid-fade absolute inset-0" />
        <FloatingOrbs />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
            <ServiceIcon name={service.icon} className="h-7 w-7 text-white" />
          </div>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 shadow-3d-sm">
            {service.tagline}
          </span>

          <h1 className="text-shadow-3d mt-6 text-4xl font-extrabold tracking-tighter text-zinc-900 sm:text-5xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
            {service.heroDescription}
          </p>

          <div className="mt-10">
            <ContactCtaButtons />
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-900 sm:text-4xl">
              What&apos;s Included
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {service.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                  <ServiceIcon name={feature.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-900 sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-zinc-500">
              A clear path from first call to launch.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative rounded-[32px] border border-white/50 bg-white/70 p-8 shadow-3d-sm"
              >
                <span className="text-3xl font-extrabold tracking-tighter text-blue-600/20">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12">
            <FaqAccordion items={faq} />
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12">
        <div className="relative mx-4 overflow-hidden rounded-[40px] bg-zinc-900 px-8 py-20 shadow-3d-lg sm:mx-auto sm:max-w-6xl">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 rounded-[40px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-3xl font-extrabold tracking-tighter text-white sm:text-4xl">
              Ready to start your {service.title.toLowerCase()} project?
            </h2>
            <p className="mt-4 text-zinc-400">
              Reach out on WhatsApp or email and we&apos;ll get back to you
              within 24 hours.
            </p>
            <div className="mt-8">
              <ContactCtaButtons variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
