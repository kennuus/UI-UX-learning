/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    '.src/components/**/*.{html,jsx,js}',
    './index.html',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'cat': "url('cat.png')"
      }
    },
  },
  plugins: [],
}
