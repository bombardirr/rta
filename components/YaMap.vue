<template>
  <MapCard />
  <client-only>
    <YandexMap
      :controls="mapSettings.controls"
      :coordinates="mapSettings.coordinates"
      :detailed-controls="mapSettings.detailedControls"
      :zoom="mapSettings.zoom"
      data-aos="fade-left"
      data-aos-once="true"
    >
      <YandexMarker
        :coordinates="markerSettings.markerCoordinates"
        marker-id="marker"
      />
    </YandexMap>
  </client-only>
</template>

<script lang="ts" setup>

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