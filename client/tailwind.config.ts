import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        nunito: ["var(--font-nunito)"],
      },
      colors: {
        benefits: "#888888",
        header: "#646464",
        button: "#00A8E0",
        howerButton: "#00A0D6",
        deactivatedButton: "#8EDFF9",
        textNav: "#3BB9E3",
        secondText: "#A8A8A8",
        products: "#EDEDED",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
