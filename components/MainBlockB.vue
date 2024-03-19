<template>
  <div class="b-container">
    <div class="section-top">
      <h1>rta</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, optio.</p>
    </div>
    <div class="section-mid">
      <div class="mid-left">
        <img :src=Image alt="Freight">
      </div>
      <div class="mid-right">
        <div>
          <h1>rta</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque autem ea eius esse non praesentium quia
            quibusdam sequi vitae?</p>
        </div>
        <div>
          <h1>rta</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque autem ea eius esse non praesentium quia
            quibusdam sequi vitae?</p>
        </div>
        <div>
          <h1>rta</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque autem ea eius esse non praesentium quia
            quibusdam sequi vitae?</p>
        </div>
      </div>
    </div>
    <div class="section-bot">
      <h1>rta</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, optio.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '~/assets/images/Truck, Train, Plane.png'
</script>

<style scoped lang="scss">

.b-container {
  @apply bg-secondary;
  @apply mt-10;
  @apply text-primary text-xl;

  .section-top {
    @apply w-full;
    @apply p-5;

    h1 {
      @apply uppercase;
    }
  }

  .section-mid {
    @apply flex justify-between items-center gap-5;

    .mid-left {
      @apply min-w-[40rem] h-full;
      @apply overflow-hidden;

      img {
        @apply w-full;
      }
    }

    .mid-right {
      @apply flex flex-col justify-between items-start gap-20;
      @apply h-full;
      @apply px-5;

      h1 {
        @apply uppercase;
      }
    }
  }

  .section-bot {
    @apply w-full;
    @apply p-5;

    h1 {
      @apply uppercase;
    }
  }
}

</style>