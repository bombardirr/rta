<template>
  <div class="about-container">
    <div class="about-container--top">
      <AboutCardA />
    </div>

    <div class="grid grid-rows-1 sm:grid-cols-2 items-center px-2">
      <div>
        <img src="~/assets/images/ship%20no%20bg.png" alt="">
      </div>

      <div class="about-container--bot">
        <AboutCardB
          v-for="feature in aboutData"
          :key="feature.title"
          :src="feature.src"
          :title="feature.title"
          :text="feature.text"
          :order="feature.order" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import ImageA from '~/assets/images/serviceA.svg'
import ImageB from '~/assets/images/serviceA.svg'
import ImageC from '~/assets/images/serviceA.svg'
import ImageD from '~/assets/images/serviceA.svg'
import AboutCardA from '~/components/AboutCardA.vue'
import AboutCardB from '~/components/AboutCardB.vue'

const aboutData = ref([
  {
    title: 'БЫСТРАЯ ОБРАТНАЯ СВЯЗЬ',
    text: 'За Вами закрепляется персональный менеджер',
    src: ImageA,
    order: 2,
  },
  {
    title: 'ГИБКИЕ ЦЕНЫ',
    text: 'Ключевые партнеры в России и за рубежом, собственные контейнеры и выгодные ставки',
    src: ImageB,
    order: 1,
  },
  {
    title: 'НАДЁЖНОСТЬ И ЭКСПЕРТНОСТЬ',
    text: '8 лет на рынке и надежные партнеры знающие своё дело',
    src: ImageC,
    order: 2,
  },
  {
    title: 'ПРИСУТСТВИЕ ПО ВСЕЙ РОССИИ',
    text: 'Филиалы в Красноярске, Новосибирске, Хабаровске и Иркутске',
    src: ImageD,
    order: 1,
  },
])
</script>

<style lang="scss">
.about-container {
  @apply grid grid-rows-[auto] gap-5 justify-center items-center;

  &--top {
    //@apply h-full;
  }

  &--bot {
    @apply grid grid-cols-4 justify-center gap-1 w-fit;
  }
}

</style>