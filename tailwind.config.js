/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Enable dark mode via a class
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Blue
        secondary: "#10B981", // Green
        danger: "#EF4444", // Red
      },
    },
  },
  plugins: [],
};
