<template>
  <div class="services-container">
    <div class="services-container--items" v-for="card in cardData" :key="card.title">
      <div class="services-item">
        <ServiceCard :src="card.src" :title="card.title" :text="card.text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from '~/components/ServiceCard.vue'
import ImageA from '~/assets/images/serviceA.jpg'
import ImageB from '~/assets/images/serviceB.jpg'
import ImageC from '~/assets/images/serviceC.jpg'
import ImageD from '~/assets/images/serviceD.jpg'
import ImageE from '~/assets/images/serviceE.jpg'

const cardData = ref([
  {
    title: 'Аренда/Покупка/Продажа контейнеров',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, magnam',
    src: ImageA,
  },
  {
    title: 'Складские услуги',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eveniet harum nam, nulla rem rerum',
    src: ImageB,
  },
  {
    title: 'Экспедирование',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eveniet harum nam, nulla rem rerum',
    src: ImageC,
  },
  {
    title: 'Экспорт',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eveniet harum nam, nulla rem rerum',
    src: ImageD,
  },
  {
    title: 'Импорт',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eveniet harum nam, nulla rem rerum',
    src: ImageE,
  },
])
</script>

<style lang="scss">
.services-container {
  @apply grid grid-cols-3 gap-5;

  &--items {
    @apply w-full;
    .services-item {
    }
  }
}

</style>