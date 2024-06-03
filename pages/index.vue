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
  @apply pt-8;

  .services {
    @apply w-full h-[30rem] xs:h-[35rem] sm:h-[45rem] md:h-[55rem] lg:h-[40rem] xl:h-[50rem];
  }

  .hero {
    @apply w-full h-[25rem] xs:h-[35rem] sm:h-[45rem] md:h-[55rem] lg:h-[40rem] xl:h-[50rem];
    @apply flex flex-col justify-center items-center;
  }

  .docsBlock {
    @apply w-full h-[20rem] xs:h-[20rem] sm:h-[25rem] md:h-[20rem] lg:h-[40rem] xl:h-[50rem];
    @apply flex flex-col justify-center items-center;
  }
}

</style>