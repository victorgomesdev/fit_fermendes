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
      }
    }

  },
  plugins: [],
}

