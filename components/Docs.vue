<template>
  <div class="doc-container">
    <div class="doc-files">
      <div class="doc-files--item">
        <a :href="url" download>
          <i :class="icon" /></a>
      </div>
      <div class="doc-files--title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  mainTitle: {
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
  url: {
    type: String,
    default: undefined,
  },
})

</script>

<style lang="scss">
.doc-container {

  .doc-files {
    @apply flex justify-start items-center gap-5;

    &--item {

    }

    &--title {

    }

  }
}

</style>