<template>
  <div
    class="call-button"
  >
    <!--Кнопка для звонка-->
    <a href="tel:'+7-812-740-34-44'">
      <MainButton
        v-for="setting in buttonSettings"
        :key="setting.label"
        :icon="setting.icon"
        :label="$t(setting.label)"
        :raised="setting.raised"
      />
    </a>
  </div>
</template>

<script lang="ts" setup>
import MainButton from '~/components/MainButton.vue'

const buttonSettings = ref([
    { label: 'call_button', raised: true, icon: 'pi pi-phone' },
  ],
)
</script>

<style lang="scss">
.call-button {

}

</style>