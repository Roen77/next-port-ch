import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-blue": "#4285F4",
        "logo-red": "#DB4437",
        "logo-yell": "#F4B400",
        "logo-green": "#0F9D58",
        "icon-gray": "#F1F3F4",
        gray: "#ddd",
        highlight: "rgba(80, 151, 255, 0.18)",
        dot: "#dadce0",
        content: "#1a0dab",
      },
      boxShadow: {
        "3xl": "rgba(100, 100, 111, 0.2) 0px 4px 20px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
