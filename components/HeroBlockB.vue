<template>
  <div
    class="aboutCard-container"
    v-if="order === 1"
  >
    <div class="aboutCard-container--image">
      <img :src=src alt="">
    </div>
    <div class="aboutCard-container--text">
      <div class="text-title">{{ title }}</div>
      <div class="text-body">{{ text }}</div>
    </div>
  </div>
  <div class="aboutCard-container" v-else>
    <div class="aboutCard-container--text">
      <div class="text-title">{{ title }}</div>
      <div class="text-body">{{ text }}</div>
    </div>
    <div class="aboutCard-container--image">
      <img :src=src alt="">
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
    src: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    text: {
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
  @apply grid grid-rows-2 justify-end gap-1 items-center mx-[.2rem];
  @apply text-prime;
  @apply overflow-hidden;

  &--text {
    @apply lg:px-2 2xl:px-5 z-10 flex flex-col justify-evenly text-xs 2xl:text-sm;
    @apply border rounded;
    @apply h-full w-full;

    .text-title {
      @apply text-[.5rem] lg:text-xs 2xl:text-sm text-center 2xl:text-start;
    }

    .text-body {
      @apply hidden 2xl:block;
    }
  }

  &--image {
    @apply z-0 h-full w-full flex flex-col justify-center;
    @apply border rounded;

    img {
      @apply rounded;
    }
  }
}

</style>