<template>
  <div class="map-card"
       data-aos="fade-up"
       data-aos-delay="150"
  >
    <div
      class="map-card--item"
    >
      <div class="pi pi-building" />
      <div class="item-text">
        {{ $t('address') }}
      </div>
    </div>
    <a
      class="map-card--item"
      href="tel:'+7-812-740-34-44'"
    >
      <div class="pi pi-mobile" />
      <div class="item-text">
        +7-812-740-34-44
      </div>
    </a>
    <a
      class="map-card--item"
      href="mailto:'info@rtarus.com'"
    >
      <div class="pi pi-envelope" />
      <div class="item-text">
        info@rtarus.com
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.map-card {
  @apply absolute top-96 sm:left-5;
  @apply w-full sm:w-fit;
  @apply text-prime font-bold text-xs xs:text-sm md:text-lg;
  @apply flex flex-col justify-evenly p-5 gap-5;
  @apply rounded bg-gradient-to-r from-[#4c956c] to-[#0079A2];

  &--item {
    @apply flex justify-start items-center gap-5;

    .pi {
      @apply align-middle;
    }
  }
}

</style>