module.exports = {
  purge: [
    // "./public/index.html",
    // "./public/main.js"
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'WorkSans': ['"Work Sans"'],
        'sans':['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
