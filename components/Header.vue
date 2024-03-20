<template>
  <header class="nav-container">
    <div class="nav-content-top">
      <!-- Логотип -->
      <NuxtLink to="/">
        <LogoRu class="logo" />
      </NuxtLink>
      <!--Кнопка для звонка-->
      <a href="tel:'+7-812-740-34-44'">
        <MainButton
          class="call-button"
          v-for="setting in buttonSettings"
          :key="setting.label"
          :label="setting.label"
          :raised="setting.raised"
          :icon="setting.icon"
        />
      </a>
      <!--Выбор языка-->
      <div class="rate-lang-container">
        <div class="currency-rate">Доллар: {{ (currency.Valute.USD.Value).toFixed(2) }}
          РУБ
        </div>
        <div class="currency-rate">Юань: {{ (currency.Valute.CNY.Value).toFixed(2) }} РУБ
        </div>
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
          :to="navItem.to"
          :class="{ 'text-act': activeRoute(navItem.to) }"
        >
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-prime"></span>
          {{ navItem.name }}
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
            <NuxtLink :to="navItem.to" class="mobile-menu-link">
              {{ navItem.name }}
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
import LogoRu from '~/assets/icons/ru.svg?component'
import MainButton from '~/components/MainButton.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const navItems = ref([
  // { name: 'Домой', to: '/' },
  { name: 'О нас', to: '/about' },
  { name: 'Наши услуги', to: '/services' },
  { name: 'Преимущества', to: '/features' },
  { name: 'Реквизиты', to: '/info' },
  { name: 'Контакты', to: '/contacts' },
])

const buttonSettings = ref([
    { label: 'Горячая линия', raised: true, icon: 'pi pi-phone' },
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
    @apply px-5 sm:px-10;
    @apply bg-[#F0F0F0];

    .logo {
      @apply w-48;
    }

    .call-button {
      @apply h-8;
      @apply px-2 py-0 ml-5;
      @apply rounded-none bg-sec border-none;
      @apply text-sm text-prime text-nowrap;
      @apply hover:border-[#4c956c] hover:bg-prime hover:text-sec;

      & > span {
        @apply align-middle;
      }
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

</style>