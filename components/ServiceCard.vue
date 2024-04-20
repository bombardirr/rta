<template>
  <div class="card-container">
    <div class="card-container--text">
      <div class="text-t">{{ textT }}</div>
      <div class="text-b">
      </div>
      <div class="text-l">
        <div v-if="textLA" class="text-l--item">
          <i class="pi pi-box" />
          <div class="text-la">{{ textLA }}</div>
        </div>
        <div v-if="textLB" class="text-l--item">
          <i class="pi pi-box" />
          <div class="text-lb">{{ textLB }}</div>
        </div>
        <div v-if="textLC" class="text-l--item">
          <i class="pi pi-box" />
          <div class="text-lc">{{ textLC }}</div>
        </div>
        <div v-if="textLD" class="text-l--item">
          <i class="pi pi-box" />
          <div class="text-ld">{{ textLD }}</div>
        </div>
        <div v-if="textLE" class="text-l--item">
          <i class="pi pi-box" />
          <div class="text-le">{{ textLE }}</div>
        </div>
        <div v-if="textLF" class="text-l--item">
          <i class="pi pi-box" />
          <div class="text-le">{{ textLF }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
    textT: {
      type: String,
      default: undefined,
    },
    textLA: {
      type: String,
      default: undefined,
    },
    textLB: {
      type: String,
      default: undefined,
    },
    textLC: {
      type: String,
      default: undefined,
    },
    textLD: {
      type: String,
      default: undefined,
    },
    textLE: {
      type: String,
      default: undefined,
    },
    textLF: {
      type: String,
      default: undefined,
    },
  },
)

</script>

<style lang="scss">
.card-container {

  &--text {
    @apply text-nowrap font-bold;
    @apply grid auto-rows-auto gap-2;

    .text-t {
      @apply uppercase;
    }

    .text-l {

      &--item {
        @apply flex justify-start items-center gap-2;
      }
    }
  }
}

</style>