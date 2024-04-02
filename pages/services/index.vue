<template>
  <div class="services-container">
    <div class="services-container--items" v-for="card in cardData" :key="card.title">
      <div class="services-item">
        <ServiceCard
          :src="card.src"
          :title="card.title"
          :textT="card.textT"
          :textBA="card.textBA"
          :textBB="card.textBB"
          :textLA="card.textLA"
          :textLB="card.textLB"
          :textLC="card.textLC"
          :textLD="card.textLD"
          :textLE="card.textLE"
          :textE="card.textE"
        />
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
    textT: 'Выберите аренду, покупку или продажу контейнеров под Вашу задачу',
    textBA: 'Различные размеры и специализированные варианты, включая холодильные, цистерны и сухогрузные. Идеально для транспортировки товаров или создания хранилищ.',
    textBB: 'Помимо универсальных, можно также арендовать особые контейнеры:',
    textLA: 'Рефроконтейнер',
    textLB: 'Танк-контейнер',
    textLC: 'Изотермический контейнер',
    textLD: 'Сухогрузный контейнер',
    textLE: '',
    textE: '"РTA" - гибкие решения по Вашему заказу',
    src: ImageA,
  },
  {
    title: 'Складские услуги',
    textT: 'Обязательная часть сложной логистической цепочки, используемой при транспортировке любых грузов, - терминальные услуги. Они необходимы в промежуточном или конечном пунктах доставки',
    textBA: 'Складские услуги обычно необходимы в случаях, когда:',
    textBB: '',
    textLA: 'У заказчика нет собственного склада',
    textLB: 'Необходимо доставить товар «до двери» после поступления на склад',
    textLC: 'Следует передать уже оформленный товар на транспортировку или экспорт',
    textLD: '',
    textLE: '',
    textE: '"РTA" - качественные складские услуги',
    src: ImageB,
  },
  {
    title: 'Экспедирование',
    textT: '',
    textBA: '',
    textBB: '',
    textLA: '',
    textLB: '',
    textLC: '',
    textLD: '',
    textLE: '',
    textE: '',
    src: ImageC,
  },
  {
    title: 'Экспорт',
    textT: 'Экспортные перевозки из России требуют тщательной подготовки и контроля на всех этапах',
    textBA: 'Экспортерам важно соблюдать все процедуры для успешной доставки:',
    textBB: '',
    textLA: 'Разработка логистической схемы и маршрута',
    textLB: 'Диспетчерское сопровождение',
    textLC: 'Выполнение погрузочных операций',
    textLD: 'Оформление экспорта на таможне',
    textLE: 'Страхование грузов',
    textE: '"РTA" - полное экспортное сопровождение клиента',
    src: ImageD,
  },
  {
    title: 'Импорт',
    textT: 'Импортные перевозки обеспечивают поставки грузов из-за рубежа в Россию, включая транспортировку, оформление документов и таможенные процедуры',
    textBA: 'Выбор транспортного средства зависит от расстояния, габаритов груза и стоимости доставки',
    textBB: 'Мы предлагаем следующие виды транспортных перевозок:',
    textLA: 'Автомобильные',
    textLB: 'Железнодорожные',
    textLC: 'Морские',
    textLD: 'Воздушные',
    textLE: '',
    textE: '"РTA" - импортные перевозки в короткие сроки',
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