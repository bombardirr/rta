/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      screens: {
        // xs: '340px',
        xs: '475px',
      },
      textColor: {
        prime: '#fff',
        sec: '#4c956c',
        act: '#2d3142',
        dk: '#2F4858',
      },
      backgroundColor: {
        prime: '#fff',
        sec: '#4c956c',
        end: '#A8EB12',
        dk: '#2F4858',
        //       acc: '#294CE2'
      },
      borderRadius: { DEFAULT: '15px' },
    },
  },
  plugins: [],
}
