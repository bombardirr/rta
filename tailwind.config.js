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
        xs: '500px',
      },
      textColor: {
        prime: '#ffffff',
        sec: '#4c956c',
        act: '#2d3142',
        dk: '#6B7280',
        acc: '#0f1d15',
      },
      backgroundColor: {
        prime: '#fff',
        sec: '#4c956c',
        //       dk: '#262626',
        //       acc: '#294CE2'
      },
      borderRadius: { DEFAULT: '15px' },
    },
  },
  plugins: [],
}
