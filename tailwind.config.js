/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    backgroundSize: {
      '25%': '25%',
      '35%': '35%',
      typingTextSize: 'background-size:calc(var(--n)*1ch) 200%',
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
        blinking: 'blinking 1s infinite',
        typing: 'typing 10s 10s steps(100, end) forwards, blinking 1s infinite',
        typeHeadlineName: 'typeHeadlineName 75s steps(50, end) infinite, blinking 1s infinite',
        typeHeadlineTitle: 'typeHeadlineTitle 75s steps(50, end) infinite, blinking 1s infinite',
        showLines: 'showLines 10s 10s steps(4, end) forwards',
        slideXOut: 'slideXOut 10s ease forwards, blinking 1s infinite',
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
        typeHeadlineName: {
          '0%, 2.6667%, 16%': {
            width: '0',
            display: 'block',
          },
          '2.6667%': {
            width: '0',
          },
          '13.3333%': {
            width: '100%',
          },
          '17.3333%, 100%': {
            display: 'none',
          },
        },
        typeHeadlineTitle: {
          '0%, 17.333%': {
            display: 'none',
          },
          '18.667%, 20%, 32%': {
            width: '0',
            display: 'block',
          },
          '29.333%': {
            width: '100%',
          },
          '33.333%, 100%': {
            display: 'none',
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
        showLines: {
          '0%': {
            'max-height': '0',
          },
          '100%': {
            'max-height': '100%',
          },
        },
        slideXOut: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
