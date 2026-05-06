/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
      },
      colors: {
        surface: {
          DEFAULT: "#f4f6f9",
          card: "#ffffff",
          muted: "#e8ecf2",
        },
        ink: {
          DEFAULT: "#0F172A",
          secondary: "#475569",
          subtle: "#94a3b8",
        },
        accent: {
          DEFAULT: "#4F46E5",
          soft: "#EEF2FF",
          dark: "#4338CA",
        },
        hero: {
          navy: "#0F172A",
          glow: "#1e293b",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        card:
          "0 1px 3px rgba(15, 23, 42, 0.06), 0 10px 36px rgba(15, 23, 42, 0.06)",
        lift: "0 8px 28px rgba(79, 70, 229, 0.18)",
        "hero-card":
          "0 1px 2px rgba(15, 23, 42, 0.04), 0 16px 48px rgba(15, 23, 42, 0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        shimmer: "shimmer 2.2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
