/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('daisyui')],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#155e75',
          secondary: '#F000B8',
          accent: '#37CDBE',
          neutral: '#374151',
          'base-100': '#FFFFFF',
          info: '#e7e5e4',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
};
