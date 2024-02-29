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
          alt="Truck, Train, Plane image"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '~/assets/images/Truck, Train, Plane.png'

</script>

<style scoped lang="scss">

.section-container {
  @apply w-full shadow-2xl;

  .wrapper {
    @apply relative;

    .text {
      @apply absolute bottom-8 right-60;
      @apply w-4/12;
      @apply pb-5 px-5;
      @apply text-secondary;
      @apply rounded bg-white/80 backdrop-blur;

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