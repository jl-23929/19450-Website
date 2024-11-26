/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontSize: {
        h1: "5rem",
        h2: "2rem",
        h3: "1.75rem",
      },
      colors: {
        lightBlue: "#f4f9fc ",
        darkBlue: "#00518c",
      },
    },
  },
  plugins: [],
};
