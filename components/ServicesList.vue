<template>
  <div class="bot-item">
    <div class="items">
      <div class="items--icon">
        <i :class=icon />
      </div>
      <NuxtLink :to="url">
        <div>{{ title }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  url: {
    type: String,
    default: undefined,
  },
  title: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
})

</script>

<style lang="scss">
.bot-item {
  @apply w-full;
  @apply pt-5;
  @apply text-2xl;

  .items {
    @apply flex justify-start items-center gap-2;
    @apply text-nowrap;

    &--icon {
      i {
        @apply text-2xl;
      }
    }
  }

}

</style>