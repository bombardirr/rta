<template>
  <header
    class="nav-container"
  >
    <div class="nav-content-top">
      <!-- Логотип -->
      <NuxtLink :to="localPath('/')" class="logo">
        <img :src="LogoEn" alt="logo" />
      </NuxtLink>
      <div
        class="flex flex-col sm:flex-row justify-center sm:justify-between items-start sm:items-center my-2 xs:my-0 ml-8 xs:ml-0">
        <!--Кнопка для звонка-->
        <a href="tel:'+7-812-740-34-44'">
          <MainButton
            v-for="setting in buttonSettings"
            :key="setting.label"
            :icon="setting.icon"
            :label="$t(setting.label)"
            :raised="setting.raised"
            class="call-button"
          />
        </a>
        <div class="flex justify evenly items-center">
          <Button class="email-button">
            <EmailForm />
          </Button>

          <div class="social-btns">
            <SocialButtonsGroup />
          </div>
        </div>

      </div>
      <!--Выбор языка-->
      <div class="rate-lang-container">
        <div class="currency-rate">&#36;: {{ (currency.Valute.USD.Value).toFixed(2) }}</div>
        <div class="currency-rate">&#165;: {{ (currency.Valute.CNY.Value).toFixed(2) }}</div>
        <nav class="lang-items">
          <LangSelect />
        </nav>
      </div>

    </div>

    <div class="nav-content-bot">

      <!-- Основные элементы меню для десктопа -->
      <nav class="nav-items">
        <NuxtLink
          v-for="navItem in navItems"
          :key="navItem.name"
          :class="{ 'text-black text-shadow-none': activeRoute(navItem.to) }"
          :to="localPath(navItem.to)"
          class="group transition duration-300"
        >
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-prime"></span>
          {{ $t(navItem.name) }}
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-prime"></span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import LogoEn from '~/assets/icons/logo_en.png'
import MainButton from '~/components/MainButton.vue'
import LangSelect from '~/components/LangSelect.vue'
import { useLocalePath } from '#i18n'

const localPath = useLocalePath()

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const navItems = ref([
  { name: 'menu_home', to: '/' },
  { name: 'menu_contacts', to: '/contacts' },
])

const buttonSettings = ref([
    { label: '+7-812-740-34-44', raised: true, icon: 'pi pi-phone' },
  ],
)
const activeRoute = (path: string): boolean => {
  return useRoute().path.split('/').includes(path.slice(1).replace('/', ''))
}

const { data: currency } = await useAsyncData(async () => {
  const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  return res.json()
})

</script>

<style lang="scss">

.nav-container {
  @apply relative z-10;

  .nav-content-top {
    @apply grid grid-cols-3 justify-items-start items-center;
    @apply px-2 xs:px-5 py-0 sm:py-2;
    @apply w-full;
    @apply bg-prime;

    .logo {
      @apply w-36 xs:w-fit md:w-60;
      @apply my-2;
      @apply transform -translate-y-0.5;
      @apply transition-all ease-in-out rounded-md;

      &:hover {
        @apply transform translate-y-0.5;
      }
    }

    .call-button {
      @apply rounded-none border-none;
      @apply text-xs xs:text-sm sm:text-base lg:text-lg text-sec text-nowrap;
      @apply transform -translate-y-[.1rem];
      @apply transition-all ease-in-out rounded-md;

      &:hover {
        @apply transform translate-y-0.5;
      }

      & > span {
        @apply align-middle;
      }
    }

    .social-btns {
      @apply justify-self-center;
    }

    .email-button {
      @apply rounded-none border-none;
      @apply text-sec text-nowrap;
      @apply transform -translate-y-[.1rem];
      @apply transition-all ease-in-out rounded-md;

      &:hover {
        @apply transform translate-y-0.5;
      }
    }

    .rate-lang-container {
      @apply flex justify-end items-center gap-2 lg:gap-5;
      @apply w-full;
      @apply text-[#4c956c];

      .currency-rate {
        @apply block;
      }

      .lang-items {
        @apply flex justify-evenly items-center gap-2;

        & > * {
          @apply bg-prime;
        }
      }
    }
  }

  .nav-content-bot {
    @apply px-10 py-2;
    @apply bg-gradient-to-r from-[#4c956c] to-[#0079A2];

    .nav-items {
      @apply flex justify-start gap-10 items-center;
      @apply w-full;
      @apply text-prime;
    }
  }

  .text-shadow-none {
    text-shadow: none;
  }
}
</style>