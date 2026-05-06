import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brass: "#c8a96a",
        burgundy: "#5e1f2b",
        ember: "#8b5e34",
        ink: "#161310",
        moss: "#233229",
        night: "#0e0d0b",
        parchment: "#f4ead7",
        pewter: "#a49b8b",
        smoke: "#2b2823",
        walnut: "#2a2018",
      },
      boxShadow: {
        "soft-lift": "0 24px 60px rgba(0, 0, 0, 0.28)",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      opacity: {
        12: "0.12",
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
      },
    },
  },
  plugins: [],
};

export default config;
