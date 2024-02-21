<template>
  <div class="container">
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

<style lang="scss">

.container {
  @apply w-[100vw];

  .wrapper {
    @apply relative;

    .text {
      @apply absolute top-52 left-10;
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
        //@apply rounded;
      }
    }
  }
}

</style>