// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#640000",       // vermelho escuro do site
        secondary: "#f3f4f6",     // cinza muito claro para fundo
        accent: "#b91c1c",        // variação de vermelho (botões hover)
        textDark: "#1f2937",      // cinza escuro
        textLight: "#6b7280",     // cinza claro
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // fonte global
      },
    },
  },
  plugins: [],
})
