<template>
  <div class="a-container">
    <div class="section-top">
      <div class="top-text">
        <h1>rta</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dicta eius error exercitationem,
          expedita facilis, harum hic iure laboriosam necessitatibus optio perspiciatis praesentium quae quam quis quo
          repellendus ullam vel.</p>
      </div>
      <div class="top-image">
        <img :src=Image alt="Ship">
      </div>
    </div>
    <div class="section-bot">
      <div class="bot-container">
        <div class="bot-title">Lorem ipsum</div>
        <div class="bot-items">
          <div class="bot-item--left">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in magni necessitatibus nisi obcaecati,
              possimus.
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in magni necessitatibus nisi obcaecati,
              possimus.
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in magni necessitatibus nisi obcaecati,
              possimus.
            </div>
          </div>
          <div class="bot-item--right">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in magni necessitatibus nisi obcaecati,
              possimus.
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in magni necessitatibus nisi obcaecati,
              possimus.
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At in magni necessitatibus nisi obcaecati,
              possimus.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from '~/assets/images/ship left.jpg'

</script>

<style scoped lang="scss">

.a-container {
  @apply flex flex-col justify-evenly items-center;
  @apply mt-5;

  .section-top {
    @apply flex justify-between items-center;
    @apply h-[80svh];
    @apply bg-secondary;

    .top-text {
      @apply flex flex-col justify-evenly items-start gap-4;
      @apply text-primary;
      @apply px-20;

      h1 {
        @apply text-4xl uppercase;
      }

      p {
        @apply text-2xl
      }
    }

    .top-image {
      @apply min-w-[40rem] h-full;
      @apply overflow-hidden;

      img {
        @apply w-full;
      }
    }
  }

  .section-bot {
    @apply w-full;
    @apply px-10 pt-10;
    @apply bg-primary;
    @apply text-secondary;

    .bot-container {
      @apply flex flex-col justify-evenly items-start;
      @apply text-xl;

      .bot-title {
        @apply w-full;
        @apply uppercase;
        @apply border-b-2;
      }

      .bot-items {
        @apply flex justify-evenly items-center;
        @apply w-full;
        @apply pt-5;

        .bot-item--left {

        }

        .bot-item--right {

        }
      }
    }
  }
}

</style>