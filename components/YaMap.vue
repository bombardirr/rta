<template>
  <div
    class="map-card-container"
    data-aos="fade-left"
    data-aos-once="true"
    data-aos-delay="150"
  >
    <div class="map-card-container--item">
      <div class="item-icon">
        <div class="pi pi-building" />
      </div>
      <div class="item-text">
        г. Санкт Петербург, Ленинский проспект, д.153, 196247
      </div>
    </div>
    <div class="map-card-container--item">

      <a href="tel:'+7-812-740-34-44'">
        <div class="pi pi-mobile" />
      </a>
      <div class="item-text">
        <a href="tel:'+7-812-740-34-44'">+7-812-740-34-44</a>
      </div>
    </div>
    <div class="map-card-container--item">
      <a href="mailto:'info@rtarus.com'">
        <div class="pi pi-envelope" />
      </a>
      <div class="item-text">
        <a href="mailto:'info@rtarus.com'">info@rtarus.com</a>
      </div>
    </div>
    <div class="map-card-container--item">
      <SocialButtonsGroup />
    </div>
  </div>
  <client-only>
    <YandexMap
      :coordinates="mapSettings.coordinates"
      :detailed-controls="mapSettings.detailedControls"
      :controls="mapSettings.controls"
      :zoom="mapSettings.zoom"
    >
      <YandexMarker
        marker-id="marker"
        :coordinates="markerSettings.markerCoordinates"
      />
    </YandexMap>
  </client-only>
</template>

<script setup lang="ts">

import { YandexMap, YandexMarker } from 'vue-yandex-maps'

const mapSettings = {
  coordinates: [59.849930, 30.303931],
  controls: ['fullscreenControl'],
  detailedControls: { zoomControl: { position: { right: 10, bottom: 50 } } },
  zoom: 17,
}

const markerSettings = {
  markerCoordinates: [59.849930, 30.303931],
}

</script>

<style lang="scss">

.map-card-container {
  @apply absolute top-52 left-32;
  @apply h-56;
  @apply flex flex-col justify-evenly p-5;
  @apply bg-sec opacity-80;
  @apply text-prime;

  &--item {
    @apply flex justify-start items-center gap-2 px-2 bg-prime text-sec w-full h-full last:justify-end last:gap-5;

    .pi {
      @apply align-middle;
    }
  }
}

.yandex-container {

  .ymaps-2-1-79-map {
    filter: grayscale(1);
  }

  .ymaps-2-1-79-places-pane {
    .ymaps-2-1-79-placemark-overlay {

      & > ymaps {
        filter: drop-shadow(1px 3px 4px black);
      }
    }
  }
}

</style>