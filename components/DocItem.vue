<template>
  <a
    :href="url" download
  >
    <div
      class='docCard-container'
    >
      <div
        class="docCard-container--image">
        <img :src=srcImg alt="">
      </div>
      <div class="docCard-container--title">
        {{ title }}
      </div>
      <div class="docCard-container--file">
        <div class="download-text">Скачать</div>
        <i :class="icon" class="download-icon" />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps({
  mainTitle: {
    type: String,
    default: undefined,
  },
  title: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  url: {
    type: String,
    default: undefined,
  },
  srcImg: {
    type: String,
    default: undefined,
  },
})

</script>

<style lang="scss">
.docCard-container {
  @apply text-2xl;

  &--image {

    img {
      @apply rounded-tl rounded-tr;
    }
  }

  &--title {
    @apply text-prime text-center;
    @apply bg-dk;
  }

  &--file {
    @apply flex justify-between items-center;
    @apply bg-prime;
    @apply rounded-bl rounded-br;
    @apply px-4;

    .download-text {

    }

    .download-icon {

    }

  }
}
</style>