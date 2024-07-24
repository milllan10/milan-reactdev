/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'bg-color': 'background-color',
        'text-color': 'color',
      },
      transitionDuration: {
        'slow': '250ms',
      },
    },
  },
  plugins: [],
}
