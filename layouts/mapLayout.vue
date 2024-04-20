<template>
  <div class="relative"
  >
    <YaMap />
    <div
      class="header-wrap"
      data-aos="fade-left"
      data-aos-once="true"
    >
      <Header />
    </div>

    <div
      class="mapLayout-content"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import YaMap from '~/components/YaMap.vue'
import Header from '~/components/Header.vue'

</script>

<style lang="scss">

.header-wrap {
  @apply z-50;
  @apply shadow-2xl;
}
</style>

