import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      dropShadow: {
        sd2: [
          "0px 10.6433px 18.4067px rgba(0, 0, 0, 0.055)",
          "0px 5.65259px 9.77565px rgba(0, 0, 0, 0.0444282)",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
