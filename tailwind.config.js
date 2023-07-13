/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#1c1a19',
        customOrange: 'ff6b00',
        customOffWhite: '#fff5e1',
        customGrey: '#3c3a39',
        customLightGray: '#dbd8d7',
        customMilk: '#FFF5E1',
        customLighterGray: '#6F6C6B',
      },
      fontFamily: {
        roboto: ['Roboto'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
