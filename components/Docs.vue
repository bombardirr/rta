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
        :title="item.title"
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
  { title: 'Карточка РТА', icon: 'pi pi-download', url: '~/assets/files/Карточка РТА.doc', srcImg: docImageA },
  { title: 'Договор ТЭО', icon: 'pi pi-download', url: '~/assets/files/Договор ТЭО.doc', srcImg: docImageB },
  {
    title: 'Договор КТК',
    icon: 'pi pi-download',
    url: '~/assets/files/Договор предоставления ктк с клиентами.docx',
    srcImg: docImageC,
  },
  {
    title: 'Доставка КТК',
    icon: 'pi pi-download',
    url: '~/assets/files/Договора доставки ктк (мы платим).docx',
    srcImg: docImageD,
  },
])

</script>

<style lang="scss">
.docs-container {
  @apply bg-gradient-to-r from-[#4c956c] to-[#0079A2];
  @apply container;
  @apply p-4;

  &--title {

  }

  &--cards {
    //@apply flex justify-evenly items-center gap-2;
    @apply grid grid-cols-2 grid-flow-row gap-4;
    @apply row-span-5;

  }
}

</style>