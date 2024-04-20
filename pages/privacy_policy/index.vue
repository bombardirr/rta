<template>
  <div class="policy">
    <div class="policy--title">
      {{ $t('policy_item_x') }}
    </div>

    <div class="policy--text">
      <div class="policy-text--item">
        {{ $t('policy_item_a') }}
      </div>
    </div>

    <div class="policy--title">
      {{ $t('policy_item_b') }}
    </div>

    <div class="policy--text">
      <div class="policy-text--item">
        {{ $t('policy_item_c') }}
      </div>
      <div class="policy-text--item">
        {{ $t('policy_item_d') }}
      </div>
      <div class="policy-text--item">
        {{ $t('policy_item_e') }}
      </div>
      <div class="policy-text--item">
        {{ $t('policy_item_f') }}
      </div>
    </div>


    <div class="policy--title">
      {{ $t('policy_item_g') }}
    </div>

    <div class="policy--text">
      <div class="policy--text--item">
        {{ $t('policy_item_h') }}
      </div>
      <div class="policy--text--item">
        <div>
          {{ $t('policy_item_i') }}
        </div>
        <div class="policy--text--item_sub">
          {{ $t('policy_item_j') }}
        </div>
        <div class="policy--text--item_sub">
          {{ $t('policy_item_k') }}
        </div>
        <div class="policy--text--item_sub">
          {{ $t('policy_item_l') }}
        </div>
        <div class="policy--text--item_sub">
          {{ $t('policy_item_m') }}
        </div>
      </div>

      <div class="policy--text--item">
        {{ $t('policy_item_n') }}
      </div>
      <div class="policy--text--item">
        {{ $t('policy_item_o') }}
      </div>
    </div>

    <div class="policy--title">
      {{ $t('policy_item_p') }}
      <NuxtLink :to="'https://ru.wikipedia.org/wiki/Cookie'" target="_blank">
        {{ $t('policy_item_wiki') }}
      </NuxtLink>
    </div>

    <div class="policy--text">
      <div class="policy--text--item">
        {{ $t('policy_item_q') }}
      </div>
      <div class="policy--text--item">
        {{ $t('policy_item_r') }}
      </div>
      <div class="policy--text--item">
        {{ $t('policy_item_s') }}
      </div>
      <div class="policy--text--item">
        {{ $t('policy_item_t') }}
      </div>
      <div class="policy--text--item">
        {{ $t('policy_item_u') }}
      </div>
      <div class="policy--text--item">
        {{ $t('policy_item_v') }}
      </div>
      <div class="policy--text--item">
        {{ $t('policy_item_w') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
.policy {
  @apply container;
  @apply text-balance text-prime text-sm sm:text-base xl:text-xl ;
  @apply flex flex-col justify-evenly items-start gap-5;
  @apply mt-10 xs:mt-5;

  &--title {
    @apply font-bold uppercase;
    @apply ml-3;
  }

  &--text {
    @apply flex flex-col justify-evenly items-start gap-3;
    @apply ml-5;

    &--item {
      @apply flex flex-col justify-evenly items-start gap-3;

      &_sub {
        @apply ml-5;

      }

    }
  }
}

</style>