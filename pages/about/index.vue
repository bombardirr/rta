<template>
  <div class="about-container">
    <div class="about-container--top">
      <AboutCardA />
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
</template>

<script setup lang="ts">
import ImageA from '~/assets/images/featA.jpg'
import ImageB from '~/assets/images/featB.jpg'
import ImageC from '~/assets/images/featC.jpg'
import ImageD from '~/assets/images/featD.jpg'
import AboutCardB from '~/components/AboutCardB.vue'

const aboutData = ref([
  {
    title: 'БЫСТРАЯ ОБРАТНАЯ СВЯЗЬ',
    text: 'За вами закрепляется менеджер, который будет готов оперативно ответить вам на вопросы, связанные с вашим грузом',
    src: ImageA,
    order: 2,
  },
  {
    title: 'ГИБКИЕ ЦЕНЫ',
    text: 'Наличие ключевых партнеров и собственных контейнеров в России за рубежом позволяет нам давать нашим клиентам выгодные ставки',
    src: ImageB,
    order: 1,
  },
  {
    title: 'НАДЁЖНОСТЬ И ЭКСПЕРТНОСТЬ',
    text: 'Мы уже более 8 лет на рынке и зарекомендовали себя как надежны партнеры знающие своё дело',
    src: ImageC,
    order: 2,
  },
  {
    title: 'ПРИСУТСТВИЕ ПО ВСЕЙ РОССИИ',
    text: 'Наши филиалы находятся в городах: Красноярск, Новосибирск, Хабаровск, Иркутск',
    src: ImageD,
    order: 1,
  },
])
</script>

<style lang="scss">
.about-container {
  @apply grid auto-rows-auto;
  @apply min-h-[75svh];

  &--top {
    @apply p-5;
  }

  &--bot {
    @apply grid grid-cols-4;
  }
}

</style>