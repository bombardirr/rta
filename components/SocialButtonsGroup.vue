<template>
  <div class="social-group">
    <MainButton
      class="social-button"
      v-for="setting in buttonSettings"
      :key="setting.icon"
      :icon="setting.icon"
      :class="setting.class"
    />
  </div>
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
.social-group {
  @apply flex justify-evenly items-center gap-2;

  .social-button {
    @apply flex flex-col justify-center items-center;
    @apply w-10 h-10;
    @apply p-0 mb-2;
    @apply border-none rounded-full;
    @apply transform -translate-y-[.1rem];
    @apply shadow-md shadow-black/60;
    @apply transition-all ease-in-out rounded-full;
    &:hover {
      @apply transform translate-y-0.5;
      @apply shadow shadow-black/10;
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

}
</style>