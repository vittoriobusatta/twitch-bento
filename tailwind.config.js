/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        1000: "var(--color-1000)",
        800: "var(--color-800)",
        850: "var(--color-850)",
        main: "var(--color-main)",
        50: "var(--color-50)",
        alt: "var(--color-alt)",
        900: "var(--color-900)",
        500: "var(--color-500)",
        600: "var(--color-600)",
        0: "var(--color-0)",
        stroke: "var(--color-stroke)",
        overlay: "var(--color-overlay)",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
      borderRadius: {
        10: "10px",
      },
      maxWidth: {
        280: "240px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
