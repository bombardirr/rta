<template>
  <div class="services-container">
    <div
      class="services-container--image"
    >
      <Transition>
        <img
          v-if="!itemHovered || !itemClicked"
          :src=Map
          alt="Map"
        >
      </Transition>
      <Transition name="slide">
        <div
          v-if="itemHovered"
          class="image-info-container"
        >
          <div
            v-for="test in cardData"
            :key="test.service"
            class="image-info-container--card"
          >
            <div v-if="test.service === itemHovered" class="card-items">
              <div class="card-item">
                <ServiceCard
                  :textBA="test.data.textBA"
                  :textBB="test.data.textBB"
                  :textE="test.data.textE"
                  :textLA="test.data.textLA"
                  :textLB="test.data.textLB"
                  :textLC="test.data.textLC"
                  :textLD="test.data.textLD"
                  :textLE="test.data.textLE"
                  :textLF="test.data.textLF"
                  :textT="test.data.textT"
                />
              </div>

            </div>
          </div>
        </div>
      </Transition>
    </div>
    <div class="services-container--blocks">
      <div
        v-for="item in dataService"
        :key="item.mainTitle"
        class="block-item"
        @click="handleClick(item.mainTitle)"
        @mouseenter="handleMouseOver(item.mainTitle)"
        @mouseleave="handleMouseOver('')"
      >
        <ServiceItem
          :mainTitle="item.mainTitle"
          :src="item.src"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Map from '@/assets/images/map.svg'
import ServiceItem from '~/components/ServiceItem.vue'
import RentImage from '~/assets/images/rent.png'
import WarehouseImage from '~/assets/images/warehouse.png'
import ForwardingImage from '~/assets/images/forwarding.png'
import ImportImage from '~/assets/images/import.png'
import ExportImage from '~/assets/images/export.png'
import DeclarationImage from '~/assets/images/declaration.png'
import ServiceCard from '~/components/ServiceCard.vue'

const itemHovered = ref<string | null>(null)
const handleMouseOver = (mainTitle: string) => {
  if (!itemHovered.value) {
    itemHovered.value = mainTitle
    itemClicked.value = true
  } else {
    itemHovered.value = ''
    itemClicked.value = false
  }
}

const itemClicked = ref(false)
const handleClick = (mainTitle: string) => {
  if (!itemClicked.value) {
    itemClicked.value = true
    itemHovered.value = mainTitle
  } else if (itemHovered.value === mainTitle) {
    itemClicked.value = false
    itemHovered.value = ''
  } else {
    itemClicked.value = false
    itemHovered.value = ''
  }
}

const dataService = ref([
  { mainTitle: 'Аренда', src: RentImage },
  { mainTitle: 'Склады', src: WarehouseImage },
  { mainTitle: 'Экспедирование', src: ForwardingImage },
  { mainTitle: 'Импорт', src: ImportImage },
  { mainTitle: 'Экспорт', src: ExportImage },
  { mainTitle: 'Декларирование', src: DeclarationImage },
])

const cardData = ref([
  {
    service: 'Аренда',
    data: {
      textT: 'Аренда и продажа контейнеров типа:',
      textBA: '',
      textBB: '',
      textLA: 'Танк',
      textLB: 'Flat Rack',
      textLC: 'Open top',
      textLD: '20DC, 20HC, 40HC',
      textLE: '',
      textLF: '',
      textE: '',
    },
  },
  {
    service: 'Склады',
    data: {
      textT: 'У нас собственные склады, а это:',
      textBA: '',
      textBB: '',
      textLA: 'Ответственное хранение',
      textLB: 'Оперативная перегрузка',
      textLC: 'Услуги по обработке',
      textLD: 'Консолидация и реконсолидация',
      textLE: 'Утепление контейнеров',
      textLF: 'Прием и отгрузка понаменклатурно',
      textE: '',
    },
  },
  {
    service: 'Экспедирование',
    data: {
      textT: 'Наши специалисты обеспечат:',
      textBA: '',
      textBB: '',
      textLA: 'Оперативную регистрацию',
      textLB: 'Сопровождение',
      textLC: 'Консультации',
      textLD: 'Контролироль статуса',
      textLE: '',
      textLF: '',
      textE: '',
    },
  },
  {
    service: 'Импорт',
    data: {
      textT: 'Осуществляем имортные перевозки:',
      textBA: '',
      textBB: '',
      textLA: 'Мультимодальные',
      textLB: 'Железнодорожные',
      textLC: 'Морские',
      textLD: 'Авиа',
      textLE: 'Автомобильные',
      textLF: '',
      textE: '',
    },
  },
  {
    service: 'Экспорт',
    data: {
      textT: 'Экспорт с нами - это:',
      textBA: '',
      textBB: '',
      textLA: 'Грузоперевозки в более чем 50 стран мира',
      textLB: 'Оперативная подготовка к отправке',
      textLC: 'Весь документооюорот',
      textLD: 'Формирование оптимального маршрута',
      textLE: '',
      textLF: '',
      textE: '',
    },
  },
  {
    service: 'Декларирование',
    data: {
      textT: 'Также мы берём на себя:',
      textBA: '',
      textBB: '',
      textLA: 'Проверку и подготовку документов',
      textLB: 'Классификацию товаров по ТН ВЭД',
      textLC: 'Определение таможенной стоимости',
      textLD: 'Расчёт и уплату сборов и налогов',
      textLE: 'Экспортную и импортную декларации',
      textLF: 'Межведомственное взаимодействие',
      textE: '',
    },
  },
])

</script>

<style lang="scss">
.services-container {
  @apply grid grid-cols-1 grid-rows-2 xs:grid-cols-6 xs:grid-rows-3 xs:justify-items-center xs:gap-4;
  @apply bg-gradient-to-r from-[#4c956c] to-[#0079A2];
  @apply text-prime text-pretty;
  @apply p-4;

  &--image {
    @apply xs:col-span-4 xs:row-span-3;
    @apply flex flex-col justify-center items-center;
    @apply relative;

    img {
      @apply w-full;
    }

    .image-info-container {
      @apply absolute;
      @apply flex flex-col justify-center items-center;

      &--card {

        .card-items {

          .card-item {
          }
        }
      }
    }
  }

  &--blocks {
    @apply grid grid-cols-3 grid-rows-2 gap-2;
    @apply text-xs;

    .block-item {
      @apply xs:flex-col xs:justify-center items-center;
      @apply hover:grayscale;
    }
  }

}

.v-enter-active,
.v-leave-active {
  @apply transition-all duration-300 ease-in-out;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}

.slide-enter-active,
.slide-leave-active {
  @apply transition-all duration-300 ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  @apply opacity-0;
  @apply -translate-x-full;
}
</style>