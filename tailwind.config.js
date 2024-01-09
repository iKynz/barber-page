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
        '67': '67%'
      },
      borderRadius: {
        'right': '2px solid white',
        'left': '2px solid'
      }
    },
    fontFamily: {
      teko: ['Teko', 'sans-serif']
    }
  },
  plugins: [],
}

