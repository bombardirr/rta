<template>
  <div class="relative">
    <div class="header-wrap">
      <Header />
    </div>

    <div class="container mx-auto mt-5">
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

.header-wrap {
  @apply sticky top-0 left-0 z-50;
  @apply shadow-2xl;
}
</style>

