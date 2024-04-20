<template>
  <header
    class="nav-container"
  >
    <div class="nav-content-top">
      <!-- Логотип -->
      <NuxtLink :to="localPath('/')" class="logo">
        <img :src="LogoEn" alt="logo" />
      </NuxtLink>

      <div class="call-button-header">
        <CallButton />
      </div>

      <div
        class="social">

        <Button class="email-button">
          <EmailForm />
        </Button>

        <div class="social-btns">
          <SocialButtonsGroup />
        </div>

      </div>
      <!--Выбор языка-->
      <div class="lang-wrapper">
        <LangSelect />
      </div>

    </div>

    <div class="nav-content-bot">

      <!-- Основные элементы меню для десктопа -->
      <nav class="nav-items">
        <NuxtLink
          v-for="navItem in navItems"
          :key="navItem.name"
          :class="{ 'text-prime' : activeRoute(navItem.to) }"
          :to="localPath(navItem.to)"
          class="group transition duration-300"
        >
          <span class="md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-prime"></span>
          {{ $t(navItem.name) }}
          <span class="md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-prime"></span>
        </NuxtLink>
      </nav>
      <div class="currency-container">
        <div class="currency-container--item">
          <div>&#36;:</div>
          <div>{{ (currency.Valute.USD.Value).toFixed(2) }}</div>
        </div>
        <div class="currency-container--item">
          <div>&#165;:</div>
          <div>{{ (currency.Valute.CNY.Value).toFixed(2) }}</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import LogoEn from '~/assets/icons/logo_en.png'
import LangSelect from '~/components/LangSelect.vue'
import { useLocalePath } from '#i18n'

const localPath = useLocalePath()

const navItems = ref([
  { name: 'menu_home', to: '/' },
  { name: 'menu_contacts', to: '/contacts' },
])

const activeRoute = (path: string): boolean => {
  const currentPath = useRoute().path
  if (path === '/') {
    return currentPath === localPath('/')
  } else {
    return currentPath.split('/').includes(path.slice(1).replace('/', ''))
  }
}

const { data: currency } = await useAsyncData(async () => {
  const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  return res.json()
})

</script>

<style lang="scss">

.nav-container {
  @apply relative z-10;
  @apply text-lg;

  .nav-content-top {
    @apply grid grid-cols-5 lg:grid-cols-3 xl:grid-cols-6 justify-items-end items-center xl:justify-items-center;
    @apply px-2 xs:px-5;
    @apply w-full;
    @apply bg-prime;

    .logo {
      @apply col-span-2 lg:col-span-1 xl:col-span-2;
      @apply w-full lg:w-80;
      @apply my-2;
      @apply transform -translate-y-0.5;
      @apply transition-all ease-in-out rounded-md;

      &:hover {
        @apply transform translate-y-0.5;
      }
    }

    .call-button-header {
      @apply hidden xl:block xl:relative;
      @apply w-fit;
      @apply text-prime text-nowrap text-2xl;
      @apply border rounded-lg;
      @apply bg-dk;
    }

    .social {
      @apply col-span-2 lg:col-span-1 xl:col-span-2;
      @apply flex justify-evenly;

      .email-button {
        @apply rounded-none border-none;
        @apply text-sec text-nowrap;
        @apply transform -translate-y-[.1rem];
        @apply transition-all ease-in-out rounded-md;

        &:hover {
          @apply transform translate-y-0.5;
        }
      }

      .social-btns {
      }
    }

    .lang-wrapper {
      @apply flex justify-center items-center;
      @apply text-[#4c956c] text-lg md:text-3xl;
      @apply w-full;
    }
  }

  .nav-content-bot {
    @apply flex justify-evenly items-center;
    @apply px-5 py-2;
    @apply bg-gradient-to-r from-[#4c956c] to-[#0079A2];

    .nav-items {
      @apply flex justify-evenly gap-5 items-center lg:justify-start;
      @apply w-full;
      @apply text-black;
    }

    .currency-container {
      @apply flex justify-evenly items-center gap-2;

      &--item {
        @apply flex justify-evenly items-center gap-1;

      }
    }
  }
}
</style>