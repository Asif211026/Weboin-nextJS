import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // "Fired" (dark) + "Raw" (light) palette — see README for the concept
        charcoal: {
          DEFAULT: "#221D1A",
          light: "#2B2521",
          border: "#3A322C",
        },
        clay: {
          DEFAULT: "#8C7A6B",
          50: "#F4ECE1",
        },
        ink: "#2A2118",
        ember: {
          DEFAULT: "#C9622B",
          light: "#E8A23D",
          dark: "#A8461C",
        },
      },
      fontFamily: {
        display: [
          "Georgia",
          "Iowan Old Style",
          "Palatino Linotype",
          "URW Palladio L",
          "P052",
          "serif",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      backgroundImage: {
        "ember-gradient": "linear-gradient(135deg, #C9622B 0%, #E8A23D 100%)",
        "ember-radial":
          "radial-gradient(circle at 30% 20%, rgba(232,162,61,0.35), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "needle-sweep": {
          "0%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(58deg)" },
        },
        "grain-shift": {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-2%,2%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "needle-sweep": "needle-sweep 1.6s cubic-bezier(0.16,1,0.3,1) 0.2s both",
        "grain-shift": "grain-shift 8s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
