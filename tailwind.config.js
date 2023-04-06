/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.jsx", "./src/App.jsx", "./src/pages/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#23272d",
      },
      transitionDelay: {
        120: "120ms",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
