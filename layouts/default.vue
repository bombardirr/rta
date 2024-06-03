<template>
  <div
    id="serv"
    class="default-container"
  >
    <div
      class="header-wrap"
      data-aos="fade-right"
      data-aos-once="true"
    >
      <Header />

      <div class="call-button-wrapper">
        <CallButton />
      </div>
    </div>

    <div
      class="slot-container"
    >
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

</script>

<style lang="scss">

.default-container {
  @apply relative;

  .header-wrap {
    @apply sticky top-0 left-0 z-50;
  }

  .call-button-wrapper {
    @apply xl:hidden;
    @apply absolute;
    @apply top-full right-4 z-50;
    @apply w-fit;
    @apply text-prime text-nowrap;
    @apply border rounded-lg;
    @apply mt-2;
    @apply bg-dk;
  }

  .slot-container {
    @apply mx-auto container;
    @apply flex flex-col justify-start items-center gap-2;
  }
}

</style>

