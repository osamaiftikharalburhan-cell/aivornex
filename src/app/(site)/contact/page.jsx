import dynamic from "next/dynamic";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL, MAILTO_LINK, WHATSAPP_LINK } from "@/lib/constants";

const FloatingOrbs = dynamic(() => import("@/components/FloatingOrbs"));

export const metadata = {
  title: "Contact — Aivornex",
  description:
    "Get in touch with Aivornex over email or WhatsApp, or send a message directly.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-16">
      <div className="grid-fade absolute inset-0" />
      <FloatingOrbs />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 shadow-3d-sm">
            GET IN TOUCH
          </span>
          <h1 className="text-shadow-3d mt-6 text-4xl font-extrabold tracking-tighter text-zinc-900 sm:text-5xl">
            Let&apos;s Build Something Great.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-500">
            Reach out on WhatsApp for the fastest response, or send a
            message and we&apos;ll follow up within 24 hours.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[380px_1fr]">
          <div className="flex flex-col gap-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[28px] border border-white/50 bg-white/70 p-7 shadow-3d-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.4)]">
                <svg
                  viewBox="0 0 32 32"
                  className="h-7 w-7 fill-white"
                  aria-hidden="true"
                >
                  <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.39.68 4.63 1.86 6.53L4 29l7.63-1.83a11.9 11.9 0 0 0 4.38.83h.01c6.63 0 12.01-5.38 12.01-12.01C28.03 8.38 22.65 3 16.01 3Zm0 21.82c-1.5 0-2.96-.4-4.24-1.15l-.3-.18-4.53 1.09 1.21-4.42-.2-.32a9.75 9.75 0 0 1-1.5-5.23c0-5.4 4.4-9.8 9.8-9.8 5.4 0 9.79 4.4 9.79 9.8 0 5.4-4.4 9.8-9.8 9.8-.08 0-.15-.02-.23-.02Zm5.37-7.34c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.08-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .15.19 2.01 3.07 4.87 4.3.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.12.55-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.13-.26-.2-.55-.34Z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-zinc-900">
                WhatsApp
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                +92 313 2698198
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                Chat now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>

            <a
              href={MAILTO_LINK}
              className="group rounded-[28px] border border-white/50 bg-white/70 p-7 shadow-3d-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-xl">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-white"
                  aria-hidden="true"
                >
                  <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.3 7.15 5.72a1 1 0 0 0 1.25 0L19.75 5.8a.5.5 0 0 0-.31-.8H4.56a.5.5 0 0 0-.36.6ZM20 7.85l-6.86 5.5a3 3 0 0 1-3.75 0L4 7.85V18.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7.85Z" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-zinc-900">
                Email
              </h3>
              <p className="mt-1 break-all text-sm text-zinc-500">
                {CONTACT_EMAIL}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                Send an email
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>

            <div className="rounded-[28px] border border-white/50 bg-white/70 p-7 shadow-3d-sm">
              <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                Response Time
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                We typically reply within 24 hours, often much sooner on
                WhatsApp.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
