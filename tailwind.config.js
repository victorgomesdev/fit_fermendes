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
      fontFamily: {

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
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-20px)',
            opacity: '0',
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.3s ease-out forwards',
          fadeOut: 'fadeOut 0.3s ease-out forwards',
          slideUp: 'slideUp 1s ease-out infinite'
        }
      }

    },
    plugins: [],
  }
}
