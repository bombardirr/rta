<template>
  <div class="card-container" @click="visible=!visible">
    <div class="card-container--image">
      <Transition>
        <div class="click-block" v-if="visible">
          <div class="text-t">{{ textT }}</div>
          <div class="text-b">
            <div class="text-ba">{{ textBA }}</div>
            <div class="text-bb">{{ textBB }}</div>
          </div>
          <div class="text-l">
            <div class="text-la">{{ textLA }}</div>
            <div class="text-lb">{{ textLB }}</div>
            <div class="text-lc">{{ textLC }}</div>
            <div class="text-ld">{{ textLD }}</div>
            <div class="text-le">{{ textLE }}</div>
          </div>
          <div class="text-e">{{ textE }}</div>
        </div>
      </Transition>
      <img :src=src alt="">
    </div>
    <div class="card-container--text">
      <div>{{ title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">


const visible = ref(false)

defineProps({
    src: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    textT: {
      type: String,
      default: undefined,
    },
    textBA: {
      type: String,
      default: undefined,
    },
    textBB: {
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
    textE: {
      type: String,
      default: undefined,
    },
  },
)

</script>

<style lang="scss">
.card-container {
  @apply flex flex-col justify-evenly gap-2 items-start;
  @apply bg-sec;
  @apply text-prime;
  @apply p-5;

  &--text {
    @apply px-5 text-lg text-center w-full h-full align-middle uppercase;
  }

  &--image {
    @apply w-full max-h-[35rem] overflow-hidden self-center;
    @apply relative;

    .click-block {
      @apply absolute;
      @apply flex flex-col justify-evenly items-start gap-2;
      @apply w-full h-full;
      @apply p-4;
      @apply backdrop-blur;
      @apply bottom-0;
      @apply text-xl;
      text-shadow: 1px 1px 2px black;

      .text-t {
      }

      .text-b {
      }

      .text-l {
        @apply flex flex-col justify-evenly items-start gap-2;
        @apply ml-5;
      }

      .text-e {
      }
    }

    img {
      @apply w-full;
    }
  }
}

.v-enter-active,
.v-leave-active {
  @apply opacity-100 duration-500 ease-in-out left-0;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0 -left-full;
}

</style>