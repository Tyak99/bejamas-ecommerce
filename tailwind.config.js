module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Archivo']
      },
      height: {
        '112': '28rem',
        '128': '35rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
