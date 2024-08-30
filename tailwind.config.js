// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      width: {
        'auto': 'auto',
        'full': '100%',
      },
    },
  },
  variants: {},
  plugins: [],
}
