import ServiceIcon from "@/components/ServiceIcon";

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
        <ServiceIcon name={icon} className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-5 text-lg font-bold tracking-tight text-zinc-900">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">
        {description}
      </p>
    </div>
  );
}
