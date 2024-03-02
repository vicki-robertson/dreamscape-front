/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      screens: {
        mobile: '300px',
        desktop: '1000px',
      },
      colors: {
        'blue': '#0079FF',
        'red': '#FF0060',
        'green': '#00DFA2',
        'light-yellow': '#FBFDCE',
        'white': '#FFFFFF',
      },
      fontSize: {
        xs: ['16px'],
        s: ['20px'],
        m: ['25px'],
        l: ['40px'],
      },
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [],
};
