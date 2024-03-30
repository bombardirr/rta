<template>
  <div class="doc-wrapper">

    <div class="doc-wrapper--title">
      Документы
    </div>
    <div class="doc-wrapper--files">
      <div class="doc-file" v-for="item in dataDoc" :key="item.title">
        <Docs
          :title="item.title"
          :icon="item.icon"
          :url="item.url"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Docs from '~/components/Docs.vue'

const dataDoc = ref([
  { title: 'Документ 1', icon: 'pi pi-download', url: '~/assets/files/Presentation.pdf' },
  { title: 'Документ 2', icon: 'pi pi-download', url: '~/assets/files/Presentation.pdf' },
  { title: 'Документ 3', icon: 'pi pi-download', url: '~/assets/files/Presentation.pdf' },
  { title: 'Документ 4', icon: 'pi pi-download', url: '~/assets/files/Presentation.pdf' },
  { title: 'Документ 5', icon: 'pi pi-download', url: '~/assets/files/Presentation.pdf' },
])
</script>

<style lang="scss">
.doc-wrapper {
  @apply flex justify-evenly items-center;

  &--title {

  }

  &--files {

    .doc-file {

    }
  }
}
</style>