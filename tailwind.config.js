/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'logo-barber': 'url(/src/img/barber-logo.png)',
        'backgroundFirst': 'url(/src/img/background-first.jpg)'
      }),
      height: {
        '95': '95vh'
      },
      maxWidth: {
        '70': '70%'
      },
      colors: {
        '#c59d5f': '#c59d5f'
      },
      padding: {
        's1': '0 2rem'
      }
    },
    fontFamily: {
      Mochiy: ['Mochiy Pop One', 'sans-serif']
    }
  },
  plugins: [],
}

