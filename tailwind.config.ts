import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#0d1117",
        "bg-card": "#161b22",
        "text-main": "#c9d1d9",
        "text-muted": "#8b949e",
        "accent-blue": "#58a6ff",
        "accent-green": "#238636",
        "border-color": "#30363d",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
