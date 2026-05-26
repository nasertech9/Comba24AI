import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        // Brand tokens
        "brand-black": "#08080f",
        "brand-dark": "#0d0d1a",
        "brand-surface": "#111126",
        "brand-card": "#16163a",
        "brand-border": "#1e1e4a",
        "brand-blue": "#00d4ff",
        "brand-blue-dim": "#0099cc",
        "brand-purple": "#8b5cf6",
        "brand-purple-dim": "#6d28d9",
        "brand-cyan": "#06b6d4",
        "brand-pink": "#ec4899",
        "brand-green": "#10b981",
        "brand-yellow": "#f59e0b",
        // Semantic
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(135deg, #00d4ff, #8b5cf6)",
        "gradient-hero": "linear-gradient(135deg, #0d0d1a 0%, #111126 50%, #0d0d1a 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(139,92,246,0.05))",
        "gradient-glow": "radial-gradient(ellipse at center, rgba(0,212,255,0.15), transparent 70%)",
        "gradient-purple-glow": "radial-gradient(ellipse at center, rgba(139,92,246,0.2), transparent 70%)",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)",
        "glow-purple": "0 0 20px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1)",
        "glow-sm": "0 0 10px rgba(0,212,255,0.2)",
        "card-glow": "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,212,255,0.1)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,212,255,0.3), 0 0 30px rgba(0,212,255,0.1)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "pulse-glow-purple": "pulseGlowPurple 3s ease-in-out 1s infinite",
        "scan-line": "scanLine 4s linear infinite",
        "neural": "neural 8s ease-in-out infinite",
        "particle": "particle 6s linear infinite",
        "gradient-shift": "gradientShift 6s ease infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "spin-slow": "spin 20s linear infinite",
        "blink": "blink 1.5s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,212,255,0.2), 0 0 60px rgba(0,212,255,0.05)" },
          "50%": { boxShadow: "0 0 40px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2)" },
        },
        pulseGlowPurple: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139,92,246,0.2), 0 0 60px rgba(139,92,246,0.05)" },
          "50%": { boxShadow: "0 0 40px rgba(139,92,246,0.5), 0 0 80px rgba(139,92,246,0.2)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        neural: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        particle: {
          "0%": { transform: "translateY(100vh) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) translateX(50px)", opacity: "0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
