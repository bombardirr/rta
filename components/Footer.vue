<template>
  <div class="footer-container">
    <div class="top-container">
      <div class="top-about">
        <!-- Логотип -->
        <div class="top-about--image">
          <NuxtLink to="/">
            <img :src="LogoEn" class="logo" alt="logo" />
          </NuxtLink>
        </div>
        <div class="top-about--text">
          <div>Компания «RTA» - опытный грузоперевозчик с гарантированной надежностью и доступными ценами</div>
        </div>
      </div>
      <div class="top-details">
        <div class="top-details--title">ООО «Региональный Транспортный Агент»</div>
        <div class="top-details--phone"><a href="tel:'+7-812-740-34-44'">+7-812-740-34-44</a></div>
        <div class="top-details--mail"><a href="mailto:'info@rtarus.com'">info@rtarus.com</a></div>
        <div class="top-details--social">
          <SocialButtonsGroup />
        </div>
      </div>
      <div class="top-address">
        <div class="top-address--time">Работаем с понедельника по пятницу 8:00 - 18:00</div>
        <div class="top-address--address">
          г. Санкт Петербург, Ленинский проспект, д.153, 196247
        </div>
      </div>
    </div>
    <div class="bot-container">
      <div class="year">rta {{ year }}</div>
      <div class="author">
        <div class="author--link">
          <NuxtLink class="group transition duration-300" :to=ag.to target="_blank">
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sec"></span>
            <div>
              Сайт разработан AGMO_studio
            </div>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sec"></span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoEn from '~/assets/icons/logo_en.png'
import SocialButtonsGroup from '~/components/SocialButtonsGroup.vue'

const year = new Date().getFullYear()

const ag = ref(
  { to: 'https://t.me/Artemoniuss' },
)

</script>

<style lang="scss">

.footer-container {
  @apply bg-prime;
  @apply px-10 pt-5 mt-5;
  @apply border-t-2 border-[#4c956c];

  .top-container {
    @apply flex justify-between items-center gap-2;
    @apply bg-prime pb-2;
    @apply text-sec;

    .top-about {
      @apply w-60 h-full;
      @apply flex flex-col justify-between items-start gap-2;

      &--image {

        .logo {
          @apply w-48;
          @apply my-2;
          @apply transform -translate-y-[.1rem];
          @apply shadow-md shadow-black/60;
          @apply transition-all ease-in-out rounded-md;
          &:hover {
            @apply transform translate-y-0.5;
            @apply shadow shadow-black/10;
          }
        }
      }

      &--text {
        @apply text-sm;
      }
    }

    .top-details {
      @apply flex flex-col justify-between items-start gap-2;
      @apply h-full;

      &--title {

      }

      &--phone {

      }

      &--mail {

      }

      &--social {
        @apply flex justify-evenly items-center gap-5 w-fit;
      }
    }

    .top-address {
      @apply flex flex-col justify-between items-start gap-2;
      @apply w-60 h-full text-wrap;

      &--time {

      }

      &--address {
      }
    }
  }

  .bot-container {
    @apply flex justify-center items-center gap-2;
    @apply py-2;
    @apply text-xs text-dk;

    .year {
      @apply border-r-2 pr-2;
      @apply uppercase;
    }

    .author {

      &--link {
      }
    }
  }
}

</style>