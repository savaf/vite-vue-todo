module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'porcelain': '#edf0f1',
        'mariner': '#2980b9',
        'silver-chalice': '#aaa',
        'shamrock': '#2ECC71',
        'nebula': '#d8e5e0'
      }
    },
  },
  variants: {
    extend: { },
  },
  plugins: [],
}
