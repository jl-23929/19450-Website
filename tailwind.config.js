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
        lightBlue: "#1e68e8",
        darkBlue: "#0c132c",
      },
    },
  },
  plugins: [],
};
