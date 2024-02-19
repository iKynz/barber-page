/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'logo-barber': 'url(/src/img/barber-logo.png)',
        'backgroundFirst': 'url(/src/img/background-first.jpg)',
        'ourvideo': 'url(/src/img/mt-2038-ourvideo.jpg)',
        'contact': 'url(/src/img/mt-2038-contact.jpg)'
      }),
      height: {
        '95': '95vh',
        '45': '45%',
        '50vh': '50vh',
        '33vh': '33vh'
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
      Teko: ['Teko', 'sans-serif']
    }
  },
  plugins: [],
}

