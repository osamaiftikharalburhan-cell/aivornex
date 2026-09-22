"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/services-data";

const INPUT_CLASSES =
  "w-full rounded-2xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 shadow-inner transition-all duration-200 placeholder:text-zinc-400 focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.15)] focus:outline-none";

const INITIAL_FORM = { name: "", email: "", phone: "", service: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        const message =
          data?.error || `Request failed (HTTP ${res.status}). Please try again.`;
        console.error("Contact form error:", message);
        setErrorMessage(message);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="rounded-[32px] border border-white/50 bg-white/80 p-8 shadow-2xl sm:p-10">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
        Send Us a Message
      </h2>
      <p className="mt-2 text-sm text-zinc-500">
        Fill out the form and we&apos;ll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={INPUT_CLASSES}
          />
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={INPUT_CLASSES}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number (optional)"
            className={INPUT_CLASSES}
          />

          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className={`${INPUT_CLASSES} ${form.service ? "text-zinc-900" : "text-zinc-400"}`}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className={`${INPUT_CLASSES} resize-none`}
        />

        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </motion.button>

        {status === "success" && (
          <p className="rounded-2xl bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-600">
            Message sent! We&apos;ll be in touch soon.
          </p>
        )}

        {status === "error" && (
          <p className="rounded-2xl bg-red-50 px-5 py-3 text-sm font-medium text-red-600">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
