<template>
  <div class="a-container">
    <div class="section-top">
      <div class="top-text">
        <h1>rta</h1>
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
        <div class="bot-items">
          <div class="bot-item--left">
            <div class="items">
              <div class="items--icon">
                <i class="pi pi-globe" />
              </div>
              <div>Транспортировка грузов</div>
            </div>
            <div class="items">
              <div class="items--icon">
                <i class="pi pi-check-square" />
              </div>
              <div>Таможенное оформление</div>
            </div>
          </div>
          <div class="bot-item--right">
            <div class="items">
              <div class="items--icon">
                <i class="pi pi-table" />
              </div>
              <div>Складские услуги</div>
            </div>
            <div class="items">
              <div class="items--icon">
                <i class="pi pi-dollar" />
              </div>
              <div>Аренда / Покупка / Продажа контейнеров</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Gif from '~/assets/images/ship.gif'

</script>

<style scoped lang="scss">

.a-container {
  @apply flex flex-col justify-evenly items-center;
  @apply my-5;

  .section-top {
    @apply flex justify-between items-center;
    @apply bg-sec;

    .top-text {
      @apply flex flex-col justify-evenly items-start gap-4;
      @apply text-prime;
      @apply px-20;

      h1 {
        @apply text-4xl uppercase;
      }

      p {
        @apply text-2xl
      }
    }

    .top-image {
      @apply flex flex-col justify-center items-center;
      @apply min-w-[40rem] h-full;
      @apply overflow-hidden;

      img {
        @apply w-full;
      }
    }
  }

  .section-bot {
    @apply w-full;
    @apply px-10 pt-10;
    @apply bg-prime;
    @apply text-sec;

    .bot-container {
      @apply flex flex-col justify-evenly items-start;
      @apply text-4xl;

      .bot-title {
        @apply w-full;
        @apply uppercase;
        @apply border-b-2;
      }

      .bot-items {
        @apply flex justify-evenly items-center;
        @apply w-full;
        @apply pt-5;
        @apply text-2xl;

        .bot-item--left {

          .items {
            @apply flex justify-start items-center gap-5;

            &--icon {
              i {
                @apply text-2xl;
              }
            }
          }

        }

        .bot-item--right {

          .items {
            @apply flex justify-start items-center gap-5;

            &--icon {
              i {
                @apply text-2xl;
              }
            }
          }
        }
      }
    }
  }
}

</style>