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
        darkBlue: "#203478",
        orange: "#FFA726",
        green: "#1B998B",
        salmon: "#fc7265",
        overlayColour: "#1f3274",
        gradientColour: "#13182c",
        mediumBlue: "#2646bc",
      },
    },
  },
  plugins: [],
};
