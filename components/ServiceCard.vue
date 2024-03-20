<template>
  <div class="card-container">
    <div class="card-container--image">
      <img :src=src alt="">
    </div>
    <div class="card-container--text">
      <div>{{ title }}</div>
      <div>{{ text }}</div>
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
  },
)

</script>

<style lang="scss">
.card-container {
  @apply flex flex-col justify-evenly gap-2 items-start;
  @apply bg-sec;
  @apply text-prime;
  @apply p-5;

  &--text {
    @apply px-5;
  }

  &--image {
    @apply w-full max-h-[35rem] overflow-hidden self-center;

    img {
      @apply w-full;
    }
  }
}

</style>