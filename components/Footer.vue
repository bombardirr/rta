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
        <div class="top-about--policy">
          <NuxtLink :to="policyLink.to">{{ policyLink.name }}</NuxtLink>
        </div>
      </div>
      <div class="top-details">
        <div class="top-details--title">ООО «Региональный Транспортный Агент»</div>
        <div class="top-details--phone"><a href="tel:'+7-812-740-34-44'">+7-812-740-34-44</a></div>
        <div class="top-details--mail"><a href="mailto:'info@rtarus.com'">info@rtarus.com</a></div>
        <!--        <div class="top-details&#45;&#45;social">-->
        <!--          <SocialButtonsGroup />-->
        <!--        </div>-->
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

const policyLink = ref({ name: 'политика конфиденциальности', to: '/privacy_policy' })

</script>

<style lang="scss">

.footer-container {
  @apply bg-gradient-to-r from-[#4c956c] to-[#0079A2];
  @apply px-5 xs:px-10 mt-5;
  @apply text-xs text-center xs:text-left text-prime;

  .top-container {
    @apply flex flex-col xs:flex-row justify-between items-center gap-2;
    @apply pb-2;
    @apply rounded;

    .top-about {
      @apply h-full;
      @apply flex flex-col justify-between items-center xs:items-start gap-2;

      &--image {

        .logo {
          @apply w-48;
          @apply my-2;
          @apply transform -translate-y-[.1rem];
          //@apply shadow-md shadow-black/60;
          @apply transition-all ease-in-out rounded-md;
          &:hover {
            @apply transform translate-y-0.5;
            //@apply shadow shadow-black/10;
          }
        }
      }

      &--policy {
        @apply text-xs text-dk;
      }
    }

    .top-details {
      @apply flex flex-col justify-between items-center xs:items-start gap-2;

      &--title {

      }

      &--phone {

      }

      &--mail {

      }
    }

    .top-address {
      @apply flex flex-col justify-start items-center xs:items-start gap-2;
      @apply text-wrap;

      &--time {

      }

      &--address {
      }
    }
  }

  .bot-container {
    @apply flex justify-center items-center gap-2;
    @apply py-2;
    @apply text-xs text-dk text-nowrap;

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