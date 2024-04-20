<template>
  <div
    v-if="order === 1"
    class="aboutCard-container"
  >
    <div class="aboutCard-container--image cont">
      <img :src=src alt="">
    </div>
    <div class="aboutCard-container--text cont">
      {{ title }}
    </div>
  </div>
  <div v-else class="aboutCard-container">
    <div class="aboutCard-container--text cont">
      {{ title }}
    </div>
    <div class="aboutCard-container--image cont">
      <img :src=src alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
    src: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    order: {
      type: Number,
      default: 1,
    },
  },
)

</script>

<style lang="scss">
.aboutCard-container {
  @apply grid grid-rows-2 gap-2;
  @apply text-prime text-balance text-center font-bold text-[.6rem] xs:text-xs md:text-base lg:text-xl xl:text-2xl;

  &--text {
    @apply flex flex-col justify-center items-center;
    @apply border rounded;
    @apply p-1;
  }

  &--image {
    @apply flex flex-col justify-center;
    @apply border rounded;
    @apply p-2;

    img {
      @apply rounded;
    }
  }
}

.cont {
  @apply w-[80px] xs:w-24 sm:w-28 md:w-36 lg:w-48 xl:w-56;
}

</style>