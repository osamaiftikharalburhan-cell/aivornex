import Link from "next/link";
import { CONTACT_EMAIL, MAILTO_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative mt-32 px-4 pb-10">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-white/50 bg-white/70 p-10 shadow-3d">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-xl font-extrabold tracking-tighter text-zinc-900">
              AIVORNEX
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">
              We design and build AI-powered websites and products for
              ambitious brands.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Company
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li>
                  <Link href="/#services" className="hover:text-zinc-900">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="hover:text-zinc-900">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-zinc-900">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li>
                  <a href={MAILTO_LINK} className="break-all hover:text-zinc-900">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-900"
                  >
                    +92 313 2698198
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200/70 pt-6 text-xs text-zinc-400">
          © {new Date().getFullYear()} Aivornex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
