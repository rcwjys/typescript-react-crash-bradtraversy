import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridAutoColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
} satisfies Config;
