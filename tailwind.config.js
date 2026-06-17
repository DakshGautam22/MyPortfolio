/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0B1120",
        darkCard: "rgba(17, 24, 39, 0.7)", // #111827 with opacity for glassmorphism
        darkCardSolid: "#111827",
        darkBorder: "rgba(30, 41, 59, 0.5)", // #1E293B with opacity
        primaryGlow: "rgba(99, 102, 241, 0.15)", // Indigo glow
        secondaryGlow: "rgba(168, 85, 247, 0.15)", // Purple glow
        accentGlow: "rgba(6, 182, 212, 0.15)", // Cyan glow
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-flow': 'border-flow 6s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'border-flow': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
