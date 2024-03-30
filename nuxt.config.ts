// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svg-icons',
    '@nuxtjs/i18n',
  ],
  ssr: false,
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'ru',
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.json',
        name: 'RU',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        name: 'EN',
      },
      // {
      //   code: 'zn',
      //   iso: 'zn-CN',
      //   file: 'zn-CN.json',
      //   name: '中文',
      // },
    ],
  },
  css: [
    '@/assets/css/themes/tailwind/theme.scss',
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
