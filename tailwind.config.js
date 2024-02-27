/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      screens: {
        desktop: '1440px',
      },
      colors: {
        'blue': '#0079FF',
        'red': '#FF0060',
        'green': '#00DFA2',
        'light-yellow': '#FBFDCE',
        'white': 'FFFFFF',
      },
      fontSize: {
        xs: ['16px', 'font-normal'],
        s: ['20px', 'font-normal'],
        sb: ['20px', 'font-bold'],
        m: ['25px', 'font-normal'],
        mb: ['25px', 'font-bold'],
        l: ['40px', 'font-bold']
      },
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [],
};
