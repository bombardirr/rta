<template>
  <div class="card-container" @click="visible=!visible">
    <div class="card-container--image">
      <Transition>
        <div class="click-block" v-if="visible">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto aspernatur at dolor dolores
          eligendi eos est et ex excepturi exercitationem expedita explicabo facere fuga fugiat, hic impedit incidunt
          inventore laudantium minus neque nihil nostrum numquam omnis pariatur perspiciatis provident qui repudiandae
          suscipit ut veniam vero, voluptas voluptatem. Animi, aspernatur corporis delectus dicta doloribus ducimus ea
          eos ipsum laborum nam nostrum officia pariatur quas quibusdam recusandae repellendus sequi tenetur veniam.
          Accusamus alias at, consectetur consequatur deleniti dolores earum esse illum, inventore magnam magni maxime
          minus molestiae nobis obcaecati pariatur perspiciatis possimus quam, ratione recusandae repudiandae sequi sit
          tenetur veritatis voluptas!
        </div>
      </Transition>
      <img :src=src alt="">
    </div>
    <div class="card-container--text">
      <div>{{ title }}</div>
      <div>{{ text }}</div>
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
    text: {
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
    @apply px-5;
  }

  &--image {
    @apply w-full max-h-[35rem] overflow-hidden self-center;
    @apply relative;

    .click-block {
      @apply absolute;
      @apply w-full h-full;
      @apply backdrop-blur;
      @apply bottom-0;
      text-shadow: 1px 1px 2px black;
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