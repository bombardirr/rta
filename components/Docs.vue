<template>
  <div class="docs-container">
    <div class="docs-container--title">
    </div>
    <div
      class="docs-container--cards"
      data-aos="fade-up"
      data-aos-delay="150"
      data-aos-mirror="true"
    >
      <DocItem
        v-for="item in dataDoc"
        :key="item.title"
        :icon="item.icon"
        :srcImg="item.srcImg"
        :title="$t(item.title)"
        :url="item.url"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import docImageA from '~/assets/images/docA.png'
import docImageB from '~/assets/images/docB.png'
import docImageC from '~/assets/images/docC.png'
import docImageD from '~/assets/images/docD.png'

const dataDoc = ref([
  {
    title: 'doc-title_a',
    icon: 'pi pi-download',
    url: '/files/Карточка РТА.doc',
    srcImg: docImageA,
  },
  {
    title: 'doc-title_b',
    icon: 'pi pi-download',
    url: '/files/Договор ТЭО.doc',
    srcImg: docImageB,
  },
  {
    title: 'doc-title_c',
    icon: 'pi pi-download',
    url: '/files/Договор предоставления ктк с клиентами.docx',
    srcImg: docImageC,
  },
  {
    title: 'doc-title_d',
    icon: 'pi pi-download',
    url: '/files/Договора доставки ктк (мы платим).docx',
    srcImg: docImageD,
  },
])

</script>

<style lang="scss">
.docs-container {
  @apply container;
  @apply p-4;

  &--title {

  }

  &--cards {
    @apply grid grid-cols-2 gap-4 md:grid md:grid-cols-4;
    @apply row-span-5;

  }
}

</style>