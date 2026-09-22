/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#fcfcfd",
        brand: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          dark: "#1d4ed8",
        },
      },
      boxShadow: {
        "3d": "0 4px 16px rgba(0,0,0,0.06)",
        "3d-sm": "0 2px 8px rgba(0,0,0,0.05)",
        "3d-lg": "0 8px 24px rgba(0,0,0,0.08)",
        glow: "0 10px 30px rgba(37,211,102,0.4)",
      },
      borderRadius: {
        "4xl": "32px",
        "5xl": "40px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
