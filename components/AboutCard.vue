<template>
  <div class="aboutCard-container" v-if="order === 1">
    <div class="aboutCard-container--image">
      <img :src=src alt="">
    </div>
    <div class="aboutCard-container--text">
      <div>{{ title }}</div>
      <div>{{ text }}</div>
    </div>
  </div>
  <div class="aboutCard-container" v-else>
    <div class="aboutCard-container--text">
      <div>{{ title }}</div>
      <div>{{ text }}</div>
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
  @apply grid grid-rows-2 gap-2 items-center;
  @apply bg-sec;
  @apply text-prime;
  @apply p-5 overflow-hidden;

  &--text {
    @apply px-5 z-10;
  }

  &--image {
    @apply w-full h-[10rem] overflow-hidden self-center z-0;

    img {
      @apply w-full;
    }
  }
}

</style>