<template>
  <div class="a-container">
    <div class="section-top">
      <div class="top-text">
        <h1 class="top-text--title">
          {{ title }}
        </h1>
        <div class="top-text--body">
          <NuxtLink class="body-item" :to=serviceData.url>
            <i class="pi pi-stop" />
            <div>{{ textLA }}</div>
          </NuxtLink>
          <NuxtLink class="body-item" :to=serviceData.url>
            <i class="pi pi-stop" />
            <div>{{ textLB }}</div>
          </NuxtLink>
          <NuxtLink class="body-item" :to=serviceData.url>
            <i class="pi pi-stop" />
            <div>{{ textLC }}</div>
          </NuxtLink>
          <NuxtLink class="body-item" :to=serviceData.url>
            <i class="pi pi-stop" />
            <div>{{ textLD }}</div>
          </NuxtLink>
          <NuxtLink class="body-item" :to=serviceData.url>
            <i class="pi pi-stop" />
            <div>{{ textLE }}</div>
          </NuxtLink>
          <NuxtLink class="body-item" :to=serviceData.url>
            <i class="pi pi-stop" />
            <div>{{ textLF }}</div>
          </NuxtLink>
        </div>
        <div class="top-text--end">
          <div class="end-item">
            {{ textE }}
          </div>
        </div>
      </div>
      <div class="top-image">
        <img :src=src alt="Ship">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  src: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  textT: {
    type: String,
    default: '',
  },
  textBA: {
    type: String,
    default: '',
  },
  textBB: {
    type: String,
    default: '',
  },
  textLA: {
    type: String,
    default: '',
  },
  textLB: {
    type: String,
    default: '',
  },
  textLC: {
    type: String,
    default: '',
  },
  textLD: {
    type: String,
    default: '',
  },
  textLE: {
    type: String,
    default: '',
  },
  textLF: {
    type: String,
    default: '',
  },
  textE: {
    type: String,
    default: '',
  },
})

const serviceData = ref(
  { url: '/services' },
)

</script>

<style scoped lang="scss">

.a-container {
  @apply bg-gradient-to-r from-[#4c956c] to-[#0079A2];


  //@apply flex flex-col justify-evenly items-center;
  //@apply my-5 px-2;
  //
  //.section-top {
  //  @apply flex justify-between items-center;
  //  @apply bg-gradient-to-r from-[#4c956c] to-[#0079A2];
  //
  //  .top-text {
  //    @apply flex flex-1 flex-col justify-evenly items-start gap-2 xl:gap-4;
  //    @apply text-prime;
  //    @apply p-2 xs:p-6 xl:p-10;
  //
  //    &--title {
  //      @apply text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl;
  //    }
  //
  //    &--body {
  //      @apply flex flex-col justify-evenly items-start gap-2;
  //      @apply text-[.5rem] sm:text-sm md:text-lg lg:text-xl xl:text-2xl;
  //
  //      .body-item {
  //        @apply flex justify-evenly items-center gap-2;
  //
  //        i {
  //          @apply text-[.5rem] md:text-xs;
  //        }
  //      }
  //    }
  //
  //    &--end {
  //      @apply text-[.5rem] sm:text-sm md:text-lg lg:text-xl xl:text-2xl;
  //    }
  //
  //  }
  //
  //  .top-image {
  //    @apply flex flex-1 flex-col justify-center items-center;
  //    @apply w-full;
  //    @apply overflow-hidden;
  //  }
  //}
  //
  //.section-bot {
  //  @apply w-full;
  //  @apply px-2 pt-5 lg:pt-0;
  //  @apply bg-prime;
  //  @apply text-sec;
  //
  //  .bot-container {
  //    @apply flex flex-col justify-evenly items-start;
  //
  //    .bot-title {
  //      @apply w-full;
  //      @apply text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl uppercase;
  //      @apply border-b-2;
  //    }
  //
  //    .bot-text {
  //      @apply grid grid-cols-1 sm:grid-cols-2;
  //      & > div {
  //        @apply text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl
  //      }
  //    }
  //  }
  //}
}

</style>