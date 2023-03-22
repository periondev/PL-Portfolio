/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Zcool: ['ZCOOL XiaoWei', 'serif'],
      },
      colors: {
        'rice-color': '#f6eee3',
        'lemon-color': '#efdb5e',
        'gray-color': '#b0b0b0',
      },
    },
  },
  plugins: [],
};
