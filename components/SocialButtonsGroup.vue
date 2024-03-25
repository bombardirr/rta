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
  @apply w-12 h-12;
  @apply p-0 mb-2;
  @apply border-none rounded-full;
  @apply transition-all ease-in-out;
  &:hover {
    @apply transform -translate-y-0.5;
    @apply shadow-xl shadow-black/60;
  }

  span {
    @apply flex flex-col justify-center items-center;
    @apply text-4xl;
    @apply rounded-full;
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

</style>