/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'MagicPattern': "url('../images/MP.png')",
        'MagicPatternGrid': "url('../images/MagicPatternGrid.png')",
      },
    },
  },
  plugins: [],
}


