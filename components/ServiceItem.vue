<template>
  <div
    class="serviceItem-container"
  >
    <div class="serviceItem-container--title">
      {{ mainTitle }}
    </div>
    <div class="serviceItem-container--image">
      <img :alt=mainTitle :src=src>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  mainTitle: {
    type: String,
    default: undefined,
  },
  src: {
    type: String,
    default: undefined,
  },
})

</script>

<style lang="scss">
.serviceItem-container {
  @apply border rounded;
  @apply flex flex-col justify-center items-center gap-2;
  @apply p-2 xs:p-4;

  &--title {
    @apply xs:text-sm sm:text-lg md:text-2xl lg:text-xl xl:text-xl 2xl:text-2xl;
  }

  &--image {
    @apply 2xl:w-40;
  }
}

</style>