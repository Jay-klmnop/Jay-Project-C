/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1200px',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      margin: {
        '10p': '10%',
        '15p': '15%',
        '20p': '20%',
      },
    },
  },
  plugins: [],
};
