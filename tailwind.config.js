/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumn: {
        "70/30": "70% 28%",
      },
    },
    variants: {
      extends: {},
    },
  },
  plugins: [],
};
