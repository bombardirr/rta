<template>
  <div class="services-container">
    <div
      class="services-container--image"
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-mirror="true"
    >
      <Transition>
        <img
          v-if="!itemClicked || !itemSelected"
          :src=Map
          alt="Map"
        >
      </Transition>
      <Transition name="slide">
        <div
          v-if="itemClicked && itemSelected"
          class="image-info-container"
        >
          <div
            v-for="card in cardData"
            :key="card.service"
            class="image-info-container--card"
          >
            <div v-if="card.service === itemSelected" class="card-items">
              <div class="card-item">
                <ServiceCard
                  :textLA="$t(card.data.textLA)"
                  :textLB="$t(card.data.textLB)"
                  :textLC="$t(card.data.textLC)"
                  :textLD="$t(card.data.textLD)"
                  :textLE="$t(card.data.textLE)"
                  :textLF="$t(card.data.textLF)"
                  :textT="$t(card.data.textT)"
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
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-mirror="true"
        @click="handleClick(item.mainTitle)"
      >
        <ServiceItem
          :mainTitle="$t(item.mainTitle)"
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

const itemSelected = ref<string | null>(null)

const itemClicked = ref(false)
const handleClick = (mainTitle: string) => {
  if (!itemClicked.value) {
    itemClicked.value = true
    itemSelected.value = mainTitle
  } else if (itemSelected.value !== mainTitle) {
    itemClicked.value = false
    itemSelected.value = mainTitle
    setTimeout(() => {
      itemClicked.value = true
    }, 200)
  } else if (itemSelected.value === mainTitle) {
    itemClicked.value = false
    itemSelected.value = ''
  }
}

const dataService = ref([
  { mainTitle: 'service_block_a', src: RentImage },
  { mainTitle: 'service_block_b', src: WarehouseImage },
  { mainTitle: 'service_block_c', src: ForwardingImage },
  { mainTitle: 'service_block_d', src: ImportImage },
  { mainTitle: 'service_block_e', src: ExportImage },
  { mainTitle: 'service_block_f', src: DeclarationImage },
])

const cardData = ref([
  {
    service: 'service_block_a',
    data: {
      textT: 'text_t_a',
      textLA: 'text_la_a',
      textLB: 'text_lb_a',
      textLC: 'text_lc_a',
      textLD: 'text_ld_a',
      textLE: 'text_le_a',
      textLF: 'text_lf_a',
    },
  },
  {
    service: 'service_block_b',
    data: {
      textT: 'text_t_b',
      textLA: 'text_la_b',
      textLB: 'text_lb_b',
      textLC: 'text_lc_b',
      textLD: 'text_ld_b',
      textLE: 'text_le_b',
      textLF: 'text_lf_b',
    },
  },
  {
    service: 'service_block_c',
    data: {
      textT: 'text_t_c',
      textLA: 'text_la_c',
      textLB: 'text_lb_c',
      textLC: 'text_lc_c',
      textLD: 'text_ld_c',
      textLE: 'text_le_c',
      textLF: 'text_lf_c',
    },
  },
  {
    service: 'service_block_d',
    data: {
      textT: 'text_t_d',
      textLA: 'text_la_d',
      textLB: 'text_lb_d',
      textLC: 'text_lc_d',
      textLD: 'text_ld_d',
      textLE: 'text_le_d',
      textLF: 'text_lf_d',
    },
  },
  {
    service: 'service_block_e',
    data: {
      textT: 'text_t_e',
      textLA: 'text_la_e',
      textLB: 'text_lb_e',
      textLC: 'text_lc_e',
      textLD: 'text_ld_e',
      textLE: 'text_le_e',
      textLF: 'text_lf_e',
    },
  },
  {
    service: 'service_block_f',
    data: {
      textT: 'text_t_f',
      textLA: 'text_la_f',
      textLB: 'text_lb_f',
      textLC: 'text_lc_f',
      textLD: 'text_ld_f',
      textLE: 'text_le_f',
      textLF: 'text_lf_f',
    },
  },
])

</script>

<style lang="scss">
.services-container {
  @apply grid grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1;
  @apply text-prime text-pretty;
  @apply p-4;

  &--image {
    @apply lg:col-span-2;
    @apply flex flex-col justify-center items-center;
    @apply relative;

    img {
      @apply w-full;
    }

    .image-info-container {
      @apply flex flex-col justify-center items-center;
      @apply absolute;

      &--card {
        @apply xs:text-lg sm:text-2xl md:text-3xl;

        .card-items {

          .card-item {
          }
        }
      }
    }
  }

  &--blocks {
    @apply grid grid-cols-3 grid-rows-2 gap-2 lg:grid-cols-2;
    @apply text-xs font-bold;

    .block-item {
      @apply flex-col justify-center items-center;
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