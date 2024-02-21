// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', 'nuxt-svg-icons'],
  nuxtSvgIcons: {
    svg4vue: {
      assetsDirName: 'assets/icons',
    },
  },
  devtools: { enabled: true },
})
