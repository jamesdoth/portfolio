/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      letterSpacing: {
        2: '0.2em',
        3: '0.3em',
        4: '0.4em',
      },
    },
  },
  plugins: [],
};
