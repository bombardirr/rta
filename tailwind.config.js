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
        primary: '#ffffff',
        secondary: '#4c956c',
        dark: '#6B7280',
        accent: '#0f1d15',
      },
      //     backgroundColor: {
      //       primary: '#E3E9FF',
      //       secondary: '#F4F4F4',
      //       dark: '#262626',
      //       accent: '#294CE2'
      //     },
      borderRadius: { DEFAULT: '15px' },
    },
  },
  plugins: [],
}
