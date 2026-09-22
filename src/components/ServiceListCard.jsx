import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";

export default function ServiceListCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
        <ServiceIcon name={service.icon} className="h-6 w-6 text-white" />
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-zinc-900">
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">
        {service.shortDescription}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
        Learn more
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
