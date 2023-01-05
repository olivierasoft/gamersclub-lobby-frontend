/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#1f1f1f',
        white: '#fff',
        optionHover: 'rgba(255, 255, 255, 0.04)'
      },
      backgroundImage: {
        'login-gamersclub': "url('./src/assets/login-gc-bg.jpg')"
      }
    },
  },
  plugins: [],
}
