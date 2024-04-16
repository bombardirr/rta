<template>
  <div class="relative"
  >
    <YaMap />
    <div class="header-wrap"
         data-aos="fade-left"
         data-aos-once="true"
    >
      <Header />
    </div>

    <div class="mapLayout-content"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import YaMap from '~/components/YaMap.vue'
import Header from '~/components/Header.vue'

</script>

<style lang="scss">

.header-wrap {
  @apply sticky top-0 left-0 z-50;
  @apply shadow-2xl;
}
</style>

