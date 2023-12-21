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
      }
    },
    fontFamily: {
      teko: ['Teko', 'sans-serif']
    }
  },
  plugins: [],
}

