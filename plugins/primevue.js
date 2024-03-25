import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)

  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Dropdown', Dropdown)
})
