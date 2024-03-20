// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', 'nuxt-svg-icons'],
  css: [
    '@/assets/css/theme.scss',
    '@/assets/css/styles.scss',
    'primeicons/primeicons.css',
  ],
  nuxtSvgIcons: {
    svg4vue: {
      assetsDirName: 'assets/icons',
    },
  },
  devtools: { enabled: true },

  build: {
    transpile: ['primevue'],
  },

  plugins: [
    { src: '~/plugins/maps', mode: 'client' },
  ],
})
