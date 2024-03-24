/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        main: "#7eb38b",
        secondary: "#F8F1EA",
      },
    },
  },
  plugins: [],
};
