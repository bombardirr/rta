<template>
  <div class="section-container">
    <div class="wrapper">
      <div class="text">
        <div class="text--title">
          О нас
        </div>
        <div class="text--main">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci, amet asperiores aspernatur
          consectetur debitis distinctio dolores est, et laborum magni nesciunt nobis pariatur perspiciatis placeat
          porro quibusdam repellat.
        </div>
      </div>
      <div class="image">
        <img
          :src="Image"
          alt="Ship image"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '~/assets/images/ship left.jpg'

</script>

<style scoped lang="scss">

.section-container {
  @apply w-full;
  @apply mt-10;

  .wrapper {
    @apply relative;

    .text {
      @apply absolute top-52 left-60;
      @apply w-80;
      @apply text-primary;
      @apply backdrop-blur rounded shadow-2xl;

      &--title {
        @apply text-4xl;
      }

      &--main {
        @apply pl-3;
      }
    }

    .image {
      @apply z-0;

      img {
        @apply rounded mx-auto;
      }
    }
  }
}

</style>