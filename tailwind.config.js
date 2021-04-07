module.exports = {
  purge: {
    content: [
      "./public/**/*.html",
      "./src/pages/**/*.js",
      "./src/components/**/*.js",
      "./src/templates/**/*.js",
    ],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
