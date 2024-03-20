<template>
  <div class="feat-container" v-if="order === 1">
    <div class="feat-container--image">
      <img :src=src alt="">
    </div>
    <div class="feat-container--text">
      <div>{{ title }}</div>
      <div>{{ text }}</div>
    </div>
  </div>
  <div class="feat-container" v-else>
    <div class="feat-container--text">
      <div>{{ title }}</div>
      <div>{{ text }}</div>
    </div>
    <div class="feat-container--image">
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
.feat-container {
  @apply grid grid-cols-2 items-center;
  @apply bg-sec;
  @apply text-prime;
  @apply p-5 h-80 overflow-hidden;

  &--text {
    @apply px-5;
  }

  &--image {
    @apply w-full max-h-[30rem] overflow-hidden self-center;

    img {
      @apply w-full;
    }
  }
}

</style>