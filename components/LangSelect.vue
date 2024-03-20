<template>
  <NuxtLink
    class="group transition duration-300"
    v-for="langItem in langItems"
    :key="langItem.name"
    :to="langItem.to"
    :class="{ 'text-act': activeRoute(langItem.to) }"
  >
    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sec"></span>
    {{ langItem.name }}
    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sec"></span>
  </NuxtLink>
</template>

<script setup lang="ts">
const activeRoute = (path: string): boolean => {
  return useRoute().path.split('/').includes(path.slice(1).replace('/', ''))
}

const langItems = ref([
  { name: 'RU', to: '/services' },
  { name: 'EN', to: '/features' },
  { name: '中文', to: '/info' },
])

</script>

<style lang="scss">

</style>