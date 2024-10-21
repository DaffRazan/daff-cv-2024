module.exports = {
  purge: [
    './src/views/*.vue',
    './src/router/*.js',
    './src/App.vue',
    './src/main.js',
    './src/assets/index.css'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/12': '5%',
        '2/12': '10%',
      },
      height: {
        '1/12': '5%',
        '2/12': '10%',
      },
    }
  },
  variants: {
    extend: {
      padding: ['hover'],
    }
  },
  plugins: []
}