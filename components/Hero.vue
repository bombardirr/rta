<template>
  <div
    class="hero-container"
  >
    <div
      class="hero-container--image"
      data-aos="zoom-in"
      data-aos-mirror="true"
    >
      <img :src=BossImage alt="Boss Image" />
    </div>
    <div
      class="hero-container--blockA"
      data-aos='zoom-in'
      data-aos-delay="300"
      data-aos-mirror="true"
    >
      <HeroBlockA
        :textA="$t(dataA.textA)"
        :textB="$t(dataA.textB)"
        :textC="$t(dataA.textC)"
        :title="$t(dataA.title)"
      />
    </div>
    <div
      class="hero-container--blockB"
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-mirror="true"
    >
      <HeroBlockB
        v-for="item in dataB"
        :key="item.title"
        :order="item.order"
        :src="item.src"
        :title="$t(item.title)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BossImage from '~/assets/images/boss.png'
import HeroBlockA from '~/components/HeroBlockA.vue'
import HeroBlockB from '~/components/HeroBlockB.vue'
import FeedbackImage from '~/assets/icons/feedback.png'
import PricesImage from '~/assets/icons/prices.png'
import ExpertImage from '~/assets/icons/expert.png'
import MapImage from '~/assets/icons/map.png'

const dataA = ref(
  {
    title: 'hero-slogan',
    textA: 'hero-text_a',
    textB: 'hero-text_b',
    textC: 'hero-text_c',
  },
)

const dataB = ref([
  {
    title: 'hero-block-title_a',
    text: '',
    src: FeedbackImage,
    order: 2,
  },
  {
    title: 'hero-block-title_b',
    text: '',
    src: PricesImage,
    order: 1,
  },
  {
    title: 'hero-block-title_c',
    text: '',
    src: ExpertImage,
    order: 2,
  },
  {
    title: 'hero-block-title_d',
    text: '',
    src: MapImage,
    order: 1,
  },
])
</script>

<style lang="scss">
.hero-container {
  @apply grid grid-cols-3 grid-rows-3 gap-2;
  @apply text-prime text-pretty;
  @apply p-2;
  @apply container;

  &--image {
    @apply col-span-1 row-span-2;
    @apply flex justify-center items-center;

    img {
      @apply rounded;
    }
  }

  &--blockA {
    @apply col-span-2 row-span-2;
    @apply flex flex-col justify-evenly items-start;
  }

  &--blockB {
    @apply col-span-3 items-center;
    @apply grid grid-cols-4 justify-items-center;
    @apply w-full;
  }
}

</style>