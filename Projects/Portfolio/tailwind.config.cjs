/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    ".src/components/**/*.{html,jsx,js}",
    "./index.html",
  ],
  darkMode: "class",
  plugins: [],
  theme: {
    screens: {
      sm: "500px",
      md: "800px",
      pc: "1200px",
    },
    extend: {
      colors: {
        /* restaurant */
        "dark-brown": "#402923",
        "light-brown": "#6b4e42",
        "lighter-brown": "#9d7e6f",

        /* portfolio - dark theme */
        black: "rgb(25,25,25)",
        "black-1": "rgb(39,39,39)",
        "black-2": "rgb(51,51,51)",
        "black-3": "rgb(65,65,65)",

        /* portfolio - white theme */
        "white-1": "rgb(230,230,230)",
        "white-2": "rgb(200,200,200)",
        "white-3": "rgb(180,180,180)",
        "gray-text": "rgb(116,115,110)",
      },
    },
  },
};
