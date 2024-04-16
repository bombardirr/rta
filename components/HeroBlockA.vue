<template>
  <div
    class="boss-container"
  >
    <div class="boss-container--text">
      <div class="slogan">
        <p>
          {{ title }}
        </p>
      </div>
      <div class="history">
        <p class="hidden lg:block">
          {{ textA }}
        </p>
        <p class="hidden xs:block lg:hidden">
          {{ textB }}
        </p>
        <p class="sm:hidden">
          {{ textC }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: '',
  },
  textA: {
    type: String,
    default: '',
  },
  textB: {
    type: String,
    default: '',
  },
  textC: {
    type: String,
    default: '',
  },
})

</script>

<style lang="scss">
.boss-container {
  @apply flex justify-evenly items-center mt-2 px-2 sm:gap-2;

  &--text {
    @apply flex flex-1 flex-col justify-evenly items-start gap-2;
    @apply pl-5;
    @apply text-xs sm:text-sm md:text-base;

    .slogan {
      @apply text-prime;
      @apply bg-dk;
      @apply border rounded;
      @apply py-1 px-2;
    }

    .history {

    }

  }
}

</style>