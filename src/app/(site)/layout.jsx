import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Aivornex — We Build AI-Powered Websites",
  description:
    "Aivornex is an AI-powered web design and development agency crafting fast, beautiful, intelligent websites for ambitious brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} overflow-x-hidden bg-base font-sans text-zinc-900 antialiased`}
      >
        <Navbar />
        <main className="overflow-x-hidden pt-28">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
