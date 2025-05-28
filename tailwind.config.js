const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff69b4',
        'secondary': '#c9639b',
        'tertiary': 'rgba(255, 105, 180, 0.1)',
        'error': '#e74c3c',
        'success': '#2ecc71',
        'success-bg': 'rgba(46, 204, 113, 0.1)',
        'background': '#f0f2f5',
        'info': "#3498db",
        'yellow': '#f3bb1f',
        'orange': 'rgba(255, 255, 255, 0)',
        'paragraph': '#444'
      },
      borderColor: {
        'error': '#e74c3c',
        'primary': '#ff69b4'
      },
      boxShadow: {
        "input-focus": "0 0 5px #ff69b4"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(0)',
          },
          '25%':{
            transform: 'translateY(-20px)'
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '75%': {
            transform: 'translateY(20)'
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        loading: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        }

      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        fadeOut: 'fadeOut 0.3s ease-out forwards',
        slideUp: 'slideUp 2s linear infinite',
        loading: 'loading 1s linear infinite'
      }
    },
    plugins: [],
  }
}
