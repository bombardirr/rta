<template>
  <div class="c-container rounded-right" v-if="order === 1">
    <div class="c-container--image">
      <img :src=src alt="">
    </div>
    <div class="c-container--text">
      <div class="c-title">{{ title }}</div>
      <div class="c-description">{{ text }}</div>
    </div>
  </div>
  <div class="c-container rounded-left" v-else>
    <div class="c-container--text">
      <div class="c-title">{{ title }}</div>
      <div class="c-description">{{ text }}</div>
    </div>
    <div class="c-container--image">
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
.c-container {
  @apply flex justify-between items-center;
  @apply bg-sec;
  @apply text-prime;
  @apply h-full overflow-hidden;

  &--text {
    @apply px-5;

    .c-title {
      @apply uppercase text-2xl;
    }

    .c-description {
    }
  }

  &--image {
    @apply w-48 h-48 self-center;

    img {
      @apply w-full h-full rounded-full;
    }
  }
}

.rounded-right {
  @apply rounded-l-full;
}

.rounded-left {
  @apply rounded-r-full;
}

</style>