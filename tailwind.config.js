/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1200px',
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'Noto Sans', 'sans-serif'],
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

export default config;
