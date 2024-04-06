<template>
  <div class="social-group">
    <MainButton
      class="social-button"
      v-for="setting in buttonSettings"
      :key="setting.icon"
      :icon="setting.icon"
      :class="setting.class"
    />
    <NuxtLink :to="'/'">
      <font-awesome class="wechat" :icon="faWeixin" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import MainButton from '~/components/MainButton.vue'
import { faWeixin } from '@fortawesome/free-brands-svg-icons'

const buttonSettings = ref([
    { raised: true, icon: 'pi pi-telegram', rounded: true, class: 'telegram' },
    { raised: true, icon: 'pi pi-whatsapp', rounded: true, class: 'whatsapp' },
  ],
)

</script>

<style lang="scss">
.social-group {
  @apply flex justify-evenly items-center gap-1 sm:gap-2;

  .social-button {
    @apply flex flex-col justify-center items-center;
    @apply w-full p-1;

    span {
      @apply flex flex-col justify-center items-center;
      @apply text-xl xs:text-2xl leading-none;
      @apply transform -translate-y-[.1rem];
      @apply transition-all ease-in-out rounded-full;
      &:hover {
        @apply transform translate-y-0.5;
      }
    }

    .p-button-label {
      @apply hidden;
    }
  }

  .telegram {
    @apply text-[#27A7E7];

  }

  .whatsapp {
    @apply text-[#25d366];
  }

  .wechat {
    @apply cursor-pointer align-middle;
    @apply text-[#5CC928] text-2xl xs:text-3xl;
    @apply transform -translate-y-[.1rem];
    @apply transition-all ease-in-out rounded-full;
    &:hover {
      @apply transform translate-y-0.5;
    }
  }

}
</style>