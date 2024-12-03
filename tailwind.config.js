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
        lightBlue: "#0095fa",
        darkBlue: "#053963",
        green: "#00AD9F",
        maroon: "#8b332c",
        overlayColour: "#0095FA",
        gradientColour: "#385c8a",
        mediumBlue: "#2646bc",
        lightestBlue: "#deedf9",
      },
      fontFamily: {
        sans: ["Gotham", "sans-serif"],
      },
    },
  },
};
