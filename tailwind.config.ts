import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2B4EFF",
          "blue-dark": "#1a3de0",
          teal: "#2ED8A0",
          "teal-dark": "#22B085",
          navy: "#080F2E",
          "navy-2": "#131B44",
          gray: "#6B7280",
          "light-gray": "#F7F8FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1240px",
      },
      boxShadow: {
        soft: "0 8px 28px rgba(0,0,0,.08)",
        float: "0 20px 60px -20px rgba(43,78,255,.35)",
        card: "0 10px 40px -12px rgba(8,15,46,.15)",
        "card-hover": "0 22px 60px -18px rgba(43,78,255,.35)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(120deg, #2B4EFF 10%, #2ED8A0 100%)",
        "gradient-brand-soft": "linear-gradient(135deg, rgba(43,78,255,.08), rgba(46,216,160,.08))",
        "gradient-hero":
          "radial-gradient(1200px 600px at 80% -10%, rgba(43,78,255,.10), transparent 60%), radial-gradient(800px 500px at 10% 90%, rgba(46,216,160,.10), transparent 60%)",
        "grid-dark":
          "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-mid": "float 4.5s ease-in-out infinite",
        "float-fast": "float 3.5s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        blink: "blink 2s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 30s linear infinite",
        wave: "wave 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".75", transform: "scale(1.03)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".3" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(12deg)" },
          "75%": { transform: "rotate(-8deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
