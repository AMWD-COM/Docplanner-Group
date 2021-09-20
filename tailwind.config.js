module.exports = {
  purge: [
    "./public/index.html",
    // "./public/main.js"
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'WorkSans': ['"Work Sans"'],
        'sans':['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"']
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  variants: {
    extend: {
      grayscale: ["hover"],
      display: ['hover', 'focus', 'group-hover', 'group-focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
