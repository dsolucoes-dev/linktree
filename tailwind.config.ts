import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "ds": "linear-gradient(0deg, rgba(105,0,234,1) 0%, rgba(66,0,148,1) 100%)"
      }
    },
  },
  plugins: [],
};
export default config;
