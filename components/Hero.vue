<template>
  <div
    class="hero-container"
  >
    <div
      class="hero-container--image"
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-mirror="true"
    >
      <img :src=BossImage alt="Boss Image" />
    </div>
    <div
      class="hero-container--blockA"
      data-aos='fade-left'
      data-aos-mirror="true"
    >
      <HeroBlockA
        :textA="dataA.textA"
        :textB="dataA.textB"
        :textC="dataA.textC"
        :title="dataA.title"
      />
    </div>
    <div
      class="hero-container--blockB"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-mirror="true"
    >
      <HeroBlockB
        v-for="item in dataB"
        :key="item.title"
        :order="item.order"
        :src="item.src"
        :text="item.text"
        :title="item.title" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BossImage from '~/assets/images/boss.jpg'
import HeroBlockA from '~/components/HeroBlockA.vue'
import HeroBlockB from '~/components/HeroBlockB.vue'
import FeedbackImage from '~/assets/icons/feedback.png'
import PricesImage from '~/assets/icons/prices.png'
import ExpertImage from '~/assets/icons/expert.png'
import MapImage from '~/assets/icons/map.png'

const dataA = ref(
  {
    title: 'Желаю, чтобы все!',
    textA: 'Компания «РТА (Региональный Транспортный Агент)» занимается осуществлением грузоперевозок с 2017 года. За это время мы продемонстрировали свою способность работать с разными видами грузов и транспортных средств, решать самые сложные задачи и контролировать процесс транспортировки на каждом из его этапов. Мы предлагаем своим клиентам полный комплекс услуг по перевозке грузов и гарантируем надежность доставки продукции при минимальных затратах. Компания «РТА» готова предоставить следующие виды услуг: Контейнерные перевозки. Перемещение грузов осуществляется в контейнерах разного типа. Мультимодальные перевозки. Осуществляются одним грузоперевозчиком, но разными видами транспорта. Экспортные и импортные перевозки. Транспортировка грузов из-за рубежа в Россию и обратно. Терминальные услуги. Включают в себя обслуживание грузов и транспортных средств в промежуточном и конечном пунктах доставки',
    textB: 'Компания «РТА» осуществляет грузоперевозки с 2017 года, предлагая полный комплекс услуг по транспортировке грузов, включая контейнерные и мультимодальные перевозки, экспорт и импорт, терминальные услуги, аренду контейнеров и доставку сборного груза. Обеспечиваем перевозку любых видов грузов с логистической поддержкой и диспетчерским контролем',
    textC: 'Компания «РТА» с 2017 года обеспечивает перевозку любых видов грузов с логистической поддержкой и диспетчерским контролем',
  },
)

const dataB = ref([
  {
    title: 'БЫСТРАЯ ОБРАТНАЯ СВЯЗЬ',
    text: 'За Вами закрепляется персональный менеджер',
    src: FeedbackImage,
    order: 2,
  },
  {
    title: 'ГИБКИЕ ЦЕНЫ',
    text: 'Ключевые партнеры в России и за рубежом, собственные контейнеры и выгодные ставки',
    src: PricesImage,
    order: 1,
  },
  {
    title: 'НАДЁЖНОСТЬ И ЭКСПЕРТНОСТЬ',
    text: '8 лет на рынке и надежные партнеры знающие своё дело',
    src: ExpertImage,
    order: 2,
  },
  {
    title: 'ПРИСУТСТВИЕ ПО ВСЕЙ РОССИИ',
    text: 'Филиалы в Красноярске, Новосибирске, Хабаровске и Иркутске',
    src: MapImage,
    order: 1,
  },
])
</script>

<style lang="scss">
.hero-container {
  @apply grid grid-cols-2 grid-rows-2;
  @apply bg-gradient-to-r from-[#4c956c] to-[#0079A2];
  @apply text-prime text-pretty;
  @apply p-4;
  @apply container;

  &--image {
    @apply col-span-1 row-span-1;
    @apply flex justify-center items-center;
    @apply p-4;

    img {
      @apply rounded;
    }
  }

  &--blockA {
    @apply flex flex-col justify-evenly items-start;
  }

  &--blockB {
    @apply col-span-2;
    @apply grid grid-cols-4 justify-items-center w-full;
  }
}

</style>