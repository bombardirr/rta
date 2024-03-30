<template>
  <header class="nav-container">
    <div class="nav-content-top">
      <!-- Логотип -->
      <NuxtLink to="/">
        <img :src="LogoEn" class="logo" alt="logo" />
      </NuxtLink>
      <!--Кнопка для звонка-->
      <a href="tel:'+7-812-740-34-44'">
        <MainButton
          class="call-button"
          v-for="setting in buttonSettings"
          :key="setting.label"
          :label="$t(setting.label)"
          :raised="setting.raised"
          :icon="setting.icon"
        />
      </a>

      <div class="social-btns">
        <SocialButtonsGroup />
      </div>
      <!--Выбор языка-->
      <div class="rate-lang-container">
        <div class="currency-rate">&#36;: {{ (currency.Valute.USD.Value).toFixed(2) }}</div>
        <div class="currency-rate">&#165;: {{ (currency.Valute.CNY.Value).toFixed(2) }}</div>
        <nav class="lang-items">
          <LangSelect />
        </nav>

        <!--      Кнопка мобильного меню-->
        <Button class="button-icon mobile-menu-button" @click="toggleMobileMenu">
          <MenuIcon
            v-if="!mobileMenuOpen"
            class="menu-icon"
          />
          <CloseIcon
            v-else
            class="menu-icon"
          />
        </Button>
      </div>

    </div>

    <div class="nav-content-bot">

      <!-- Основные элементы меню для десктопа -->
      <nav class="nav-items">
        <NuxtLink
          class="group transition duration-300"
          v-for="navItem in navItems"
          :key="navItem.name"
          :to="localPath(navItem.to)"
          :class="{ 'text-black text-shadow-none': activeRoute(navItem.to) }"
        >
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-prime"></span>
          {{ $t(navItem.name) }}
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-prime"></span>
        </NuxtLink>
      </nav>
    </div>

    <!-- Мобильное меню -->
    <TransitionGroup name="mobile-menu">
      <nav v-if="mobileMenuOpen" class="mobile-menu">
        <ul class="mobile-menu-list">
          <li
            v-for="navItem in navItems"
            :key="navItem.name"
            :class="[
                activeRoute(navItem.to) ? 'text-acc' : 'hover:text-acc',
              ]"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <NuxtLink :to="localPath(navItem.to)" class="mobile-menu-link">
              {{ $t(navItem.name) }}
            </NuxtLink>
          </li>
        </ul>

        <nav class="mobile-menu-lang-items">
          <LangSelect />
        </nav>

      </nav>
    </TransitionGroup>
  </header>
</template>

<script setup lang="ts">
import MenuIcon from '~/assets/icons/menu.svg?component'
import CloseIcon from '~/assets/icons/close.svg?component'
import LogoEn from '~/assets/icons/logo_en.png'
import MainButton from '~/components/MainButton.vue'
import { useLocalePath } from '#i18n'

const localPath = useLocalePath()

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const navItems = ref([
  // { name: 'Домой', to: '/' },
  { name: 'menu_about', to: '/about' },
  { name: 'menu_services', to: '/services' },
  { name: 'menu_info', to: '/info' },
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
    @apply flex justify-between items-center;
    @apply px-5 py-2 sm:px-10;
    @apply w-full;
    @apply bg-prime;
    //@apply bg-[#A6C2D9];
    //background: rgb(166, 194, 217);
    //background: -moz-linear-gradient(90deg, rgba(166, 194, 217, 1) 35%, rgba(255, 255, 255, 1) 100%);
    //background: -webkit-linear-gradient(90deg, rgba(166, 194, 217, 1) 35%, rgba(255, 255, 255, 1) 100%);
    //background: linear-gradient(90deg, rgba(166, 194, 217, 1) 35%, rgba(255, 255, 255, 1) 100%);
    //filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a6c2d9", endColorstr="#ffffff", GradientType=1);

    .logo {
      @apply w-48;
      @apply my-2;
      @apply transform -translate-y-0.5;
      @apply shadow-md shadow-black/60;
      @apply transition-all ease-in-out rounded-md;

      &:hover {
        @apply transform translate-y-0.5;
        @apply shadow shadow-black/10;
      }
    }

    .call-button {
      @apply h-8;
      @apply px-2 py-0 ml-5;
      @apply rounded-none border-none;
      @apply text-sm text-sec text-nowrap;
      @apply transform -translate-y-[.1rem];
      @apply shadow-md shadow-black/60;
      @apply transition-all ease-in-out rounded-md;

      &:hover {
        @apply transform translate-y-0.5;
        @apply shadow shadow-black/10;
      }

      & > span {
        @apply align-middle;
      }
    }

    .social-btns {
      @apply ml-5;
    }

    .rate-lang-container {
      @apply flex justify-end items-center gap-10;
      @apply w-full;
      @apply text-[#4c956c];

      .currency-rate {
        @apply hidden sm:block;
      }

      .lang-items {
        @apply hidden xs:flex justify-evenly items-center gap-2;

        & > * {
          @apply bg-prime;
        }
      }
    }

    .mobile-menu-button {
      @media (min-width: 768px) {
        @apply hidden h-10;
      }

      .menu-icon {
        @apply h-8 w-8;
      }
    }
  }

  .nav-content-bot {
    @apply px-10 py-2;
    @apply bg-[#4c956c];

    .nav-items {
      @apply hidden;
      text-shadow: 1px 1px 2px black;

      @media (min-width: 768px) {
        @apply flex justify-start gap-10 items-center;
        @apply w-full;
        @apply text-prime;
      }
    }
  }

  .mobile-menu {
    @apply hidden shadow-2xl z-0;
    @apply absolute left-0 right-0 top-full;
    @apply bg-[#4c956c] backdrop-blur;
    @apply pb-6 pt-6;
    @apply text-prime;

    @media (max-width: 768px) {
      @apply flex flex-col items-center gap-6;
    }

    .mobile-menu-list {
      @apply container mx-auto;
      @apply list-none p-0 flex flex-col items-center gap-5;

      .mobile-menu-link {
        @apply text-xl;
      }
    }

    &-enter-active, &-leave-active {
      transition: all 0.5s ease;
    }

    &-enter-from, &-leave-to {
      opacity: 0;
    }

    &-leave-active {
      position: absolute;
    }
  }

  .mobile-menu-lang-items {
    @apply flex justify-evenly items-center gap-2 xs:hidden;
    @apply text-prime;
  }
}

.text-shadow-none {
  text-shadow: none;
}

</style>