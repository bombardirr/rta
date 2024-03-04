<template>
  <div
    class="absolute flex flex-col justify-evenly pl-5 text-white top-52 left-32 bg-[#4c956c] h-56 rounded opacity-80">
    <div class="flex flex-wrap mr-5">
      г. Санкт Петербург, Ленинский проспект, д.153, 196247
    </div>
  </div>
  <client-only>
    <YandexMap
      :coordinates="mapSettings.coordinates"
      :detailed-controls="mapSettings.detailedControls"
      :controls="mapSettings.controls"
      :zoom="mapSettings.zoom"
      map-type="map"
    >
      <YandexMarker
        marker-id="marker"
        :coordinates="markerSettings.markerCoordinates"
        :type="markerSettings.type"
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
  type: 'Point',
}

const name = ref('Custom')

</script>

<style lang="scss">

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