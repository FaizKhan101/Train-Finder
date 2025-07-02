/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  // <- Required to scan your React files
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  