import dynamic from "next/dynamic";
import ServiceListCard from "@/components/ServiceListCard";
import { SERVICES } from "@/lib/services-data";

const FloatingOrbs = dynamic(() => import("@/components/FloatingOrbs"));

export const metadata = {
  title: "Services — Aivornex",
  description:
    "Websites and AI automation for real estate, dental clinics, e-commerce, local businesses, and more.",
};

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-16">
      <div className="grid-fade absolute inset-0" />
      <FloatingOrbs />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 shadow-3d-sm">
            OUR SERVICES
          </span>
          <h1 className="text-shadow-3d mt-6 text-4xl font-extrabold tracking-tighter text-zinc-900 sm:text-5xl">
            Websites Built for Your Industry.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-500">
            From listings to bookings to checkout — we build the exact
            website your business needs to convert visitors into customers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceListCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
