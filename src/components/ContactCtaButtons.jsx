import { MAILTO_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function ContactCtaButtons({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:translate-y-0"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5 fill-white" aria-hidden="true">
          <path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.39.68 4.63 1.86 6.53L4 29l7.63-1.83a11.9 11.9 0 0 0 4.38.83h.01c6.63 0 12.01-5.38 12.01-12.01C28.03 8.38 22.65 3 16.01 3Zm0 21.82c-1.5 0-2.96-.4-4.24-1.15l-.3-.18-4.53 1.09 1.21-4.42-.2-.32a9.75 9.75 0 0 1-1.5-5.23c0-5.4 4.4-9.8 9.8-9.8 5.4 0 9.79 4.4 9.79 9.8 0 5.4-4.4 9.8-9.8 9.8-.08 0-.15-.02-.23-.02Zm5.37-7.34c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.08-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.81 1.16 3 .15.19 2.01 3.07 4.87 4.3.68.29 1.21.47 1.63.6.68.22 1.3.19 1.79.12.55-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.13-.26-.2-.55-.34Z" />
        </svg>
        Chat on WhatsApp
      </a>

      <a
        href={MAILTO_LINK}
        className={`inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-semibold shadow-xl transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] active:translate-y-0 ${
          isDark
            ? "bg-white text-zinc-900"
            : "bg-zinc-900 text-white"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.3 7.15 5.72a1 1 0 0 0 1.25 0L19.75 5.8a.5.5 0 0 0-.31-.8H4.56a.5.5 0 0 0-.36.6ZM20 7.85l-6.86 5.5a3 3 0 0 1-3.75 0L4 7.85V18.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7.85Z" />
        </svg>
        Email Us
      </a>
    </div>
  );
}
