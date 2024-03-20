<template>
  <MainButton
    class="social-button"
    v-for="setting in buttonSettings"
    :key="setting.icon"
    :icon="setting.icon"
    :class="setting.class"
  />
</template>

<script setup lang="ts">
import MainButton from '~/components/MainButton.vue'

const buttonSettings = ref([
    { raised: true, icon: 'pi pi-telegram', rounded: true, class: 'telegram' },
    { raised: true, icon: 'pi pi-whatsapp', rounded: true, class: 'whatsapp' },
  ],
)

</script>

<style lang="scss">

.social-button {
  @apply flex flex-col justify-center items-center;
  @apply p-0 w-8 h-8 border-none;

  span {
    @apply flex flex-col justify-center items-center;
    @apply w-8 h-8;
    @apply text-4xl;
  }

  .p-button-label {
    @apply hidden;
  }
}

.telegram {
  @apply text-[#27A7E7] bg-prime;

  & > span {
    @apply rounded-full hover:bg-[#27A7E7] hover:text-prime;
  }
}

.whatsapp {
  @apply text-[#25d366] bg-prime hover:bg-[#25d366];

  & > span {
    @apply rounded-full hover:bg-[#25d366] hover:text-prime;
  }
}

</style>