<template>
  <Button
    :label="label"
    :severity="severity"
    :raised="raised"
    :rounded="rounded"
    :icon="icon"
    :class="class"
  />
</template>

<script setup lang="ts">

defineProps({
  label: {
    type: String,
    default: undefined,
  },
  severity: {
    type: String,
    default: undefined,
  },
  raised: {
    type: Boolean,
    default: undefined,
  },
  rounded: {
    type: Boolean,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  class: {
    type: String,
    default: undefined,
  },
})

</script>

<style lang="scss">

</style>