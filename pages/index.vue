<template>
  <div class="index-container">
    <div class="services">
      <Services />
    </div>
    <div id="hero" class="hero">
      <Hero />
    </div>
    <div id="files" class="docsBlock">
      <Docs />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Services from '~/components/Services.vue'
import Hero from '~/components/Hero.vue'
import Docs from '~/components/Docs.vue'

</script>
<style lang="scss">
.index-container {
  @apply flex flex-col justify-center items-center;
  @apply relative;
  @apply w-full;

  .services {
    @apply w-full min-h-[40lvh] xs:min-h-[80lvh];
  }

  .hero {
    @apply w-full min-h-[40lvh] xs:min-h-[80lvh];
  }

  .docsBlock {
    @apply w-full min-h-[40lvh] xs:min-h-[80lvh];
    @apply flex flex-col justify-center items-center;
  }
}

</style>