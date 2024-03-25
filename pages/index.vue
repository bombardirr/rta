<template>
  <!--  <div class="block-C-container">-->
  <!--    <div v-for="feature in featuresData" :key="feature.title">-->
  <!--      <MainBlockC :src="feature.src" :title="feature.title" :text="feature.text" :order="feature.order" />-->
  <!--    </div>-->
  <!--  </div>-->
  <MainBlockA />
  <MainBlockB />
</template>

<script setup lang="ts">
import MainBlockA from '~/components/MainBlockA.vue'
import MainBlockB from '~/components/MainBlockB.vue'
import MainBlockC from '~/components/MainBlockC.vue'
import ImageA from '~/assets/images/featA.jpg'
import ImageB from '~/assets/images/featB.jpg'
import ImageC from '~/assets/images/featC.jpg'
import ImageD from '~/assets/images/featD.jpg'

const featuresData = ref([
  {
    title: 'Транспортировка грузов',
    text: '',
    src: ImageA,
    order: 2,
  },
  {
    title: 'Таможенное оформление',
    text: '',
    src: ImageD,
    order: 1,
  },
  {
    title: 'Складские услуги',
    text: '',
    src: ImageC,
    order: 2,
  },
  {
    title: 'Аренда' + '/' + 'Покупка' + '/' + 'Продажа контейнеров',
    text: '',
    src: ImageB,
    order: 1,
  },
])
</script>
<style lang="scss">
//.block-C-container {
//  @apply grid grid-cols-2 gap-2 items-center;
//}
</style>