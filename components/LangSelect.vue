<template>
  <select v-model="chosenLanguage" class="lang-container">
    <option
      v-for="locale in locales"
      :key="locale.code"
      :value="locale.code"
    >
      <NuxtLink
        :to="switchLocalePath(locale.code)"
      >
        {{ locale.name }}
      </NuxtLink>
    </option>
  </select>
</template>

<script lang="ts" setup>


const switchLocalePath = useSwitchLocalePath()
const { locales, locale, setLocale } = useI18n()

const chosenLanguage = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value)
  },
})

</script>

<style lang="scss">
.lang-container {
  @apply bg-[#F0F0F0];
}

</style>