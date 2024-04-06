<template>
  <div class="default-container">
    <div class="header-wrap">
      <Header />
    </div>

    <div class="slot-container">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

</script>

<style lang="scss">

.default-container {
  @apply relative;

  .header-wrap {
    @apply sticky top-0 left-0 z-50;
    @apply shadow-2xl;
  }

  .slot-container {
    @apply container mx-auto sm:mt-5;
  }
}

</style>

