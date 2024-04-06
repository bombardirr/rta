<template>
  <div class="a-container">
    <div class="section-top">
      <div class="top-text">
        <h1>рта</h1>
        <p>Компания «РТА (Региональный Транспортный Агент)» занимается осуществлением грузоперевозок с 2017 года. За это
          время мы продемонстрировали свою способность работать с разными видами грузов и транспортных средств, решать
          самые сложные задачи и контролировать процесс транспортировки на каждом из его этапов</p>
      </div>
      <div class="top-image">
        <img :src=Gif alt="Ship">
      </div>
    </div>
    <div class="section-bot">
      <div class="bot-container">
        <div class="bot-title">Услуги</div>
        <div class=" bot-text">
          <ServicesList
            v-for="data in serviceData"
            :key="data.title"
            :url="data.url"
            :title="data.title"
            :icon="data.icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Gif from '~/assets/images/ship.gif'

const serviceData = ref([
  { url: '/services', title: 'Транспортировка грузов', icon: 'pi pi-globe' },
  { url: '/services', title: 'Таможенное оформление', icon: 'pi pi-check-square' },
  { url: '/services', title: 'Складские услуги', icon: 'pi pi-table' },
  { url: '/services', title: 'Аренда / Покупка / Продажа контейнеров', icon: 'pi pi-dollar' },
])

</script>

<style scoped lang="scss">

.a-container {
  @apply flex flex-col justify-evenly items-center;
  @apply my-5 px-2;

  .section-top {
    @apply flex justify-between items-center;

    .top-text {
      @apply flex flex-1 flex-col justify-evenly items-start gap-2 xl:gap-4;
      @apply text-prime;
      @apply p-2 xs:p-6 xl:p-10;
      @apply bg-sec;

      h1 {
        @apply text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl uppercase;
      }

      p {
        @apply text-[.5rem] sm:text-sm md:text-lg lg:text-xl xl:text-2xl
      }
    }

    .top-image {
      @apply flex flex-1 flex-col justify-center items-center;
      @apply w-full;
      @apply overflow-hidden;
    }
  }

  .section-bot {
    @apply w-full;
    @apply px-2 pt-5 lg:pt-0;
    @apply bg-prime;
    @apply text-sec;

    .bot-container {
      @apply flex flex-col justify-evenly items-start;

      .bot-title {
        @apply w-full;
        @apply text-xs xs:text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl uppercase;
        @apply border-b-2;
      }

      .bot-text {
        @apply grid grid-cols-1 sm:grid-cols-2;
        & > div {
          @apply text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl
        }
      }
    }
  }
}

</style>