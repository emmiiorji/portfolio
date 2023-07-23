/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    backgroundSize: {
      '25%': '25%',
      '35%': '35%',
    },
    backgroundImage: {
      headerBgMobile: 'url(./assets/img/header_mobile.png)',
      headerBgDesktop: 'url(./assets/img/Illustration-header.png)',
    },
    screens: {
      sm: '640px',
      md: '768px',
      tab: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      dropShadow: {
        customLg: '0px 4px 5px rgba(255, 255, 255, 0.2)',
      },
      colors: {
        customBlack: '#1c1a19',
        customOrange: '#ff6b00',
        customOffWhite: '#fff5e1',
        customGrey: '#3c3a39',
        customLightGray: '#dbd8d7',
        customMilk: '#FFF5E1',
        customLighterGray: '#6F6C6B',
        customRed: '#f41314',
        customLightBlack: '#333130',
        whiteOverlay: 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        creteRound: ['"Crete Round"', 'serif'],
      },
      animation: {
        slideIn: 'slideIn 1s ease-in-out',
        slideOut: 'slideOut 1s ease-in-out',
        typing: 'typing 10s steps(100, end) forwards, blinking 1s infinite',
        typeAndClean: 'typeAndClean 10s steps(50, end) infinite, blinking 1s infinite',
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateY(calc(-100vh + 50px))',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        slideOut: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(calc(-100vh + 50px))',
          },
        },
        typing: {
          from: {
            width: '0',
          },
          to: {
            width: '100%',
          },
        },
        typeAndClean: {
          '0%': {
            width: '0',
          },
          '80%': {
            width: '100%',
          },
          '100%': {
            width: '0%',
          },
        },
        blinking: {
          '0%': {
            'border-color': 'transparent',
          },
          '50%': {
            'border-color': '#ff6b00',
          },
          '100%': {
            'border-color': 'transparent',
          },
        },
      },
    },
  },
  plugins: [],
};
