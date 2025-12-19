import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./services/**/*.{ts,tsx}",
    "./store/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",      // hotel dark
        secondary: "#C9A24D",    // luxury gold
        muted: "#F3F4F6",
        accent: "#2563EB"
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl: "1rem"
      }
    }
  },
  plugins: []
};

export default config;
