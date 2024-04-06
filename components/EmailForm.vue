<template>
  <Button class="btn" @click="visibleDialog=true">
    <i class="pi pi-envelope"></i>
  </Button>
  <Dialog
    v-model:visible="visibleDialog"
    modal
    header="Отправить e-mail"
    class="dialog"
    :style="{width: '32rem'}"
  >
    <form class="form" ref="form" @submit.prevent="sendEmail">
      <div>
        <i class="pi pi-user" />
        <InputText
          id="username"
          v-model="from_name"
          class="inputText"
          autocomplete="off"
          placeholder="Введите имя..."
          name="from_name"
        />
      </div>
      <div>
        <i class="pi pi-phone" />
        <InputText
          id="tel"
          v-model="from_tel"
          class="inputText"
          autocomplete="off"
          placeholder="Введите телефон..."
          name="from_tel"
        />
      </div>
      <div>
        <i class="pi pi-list" />
        <Textarea
          id="message"
          v-model="message"
          class="inputText inputLast"
          autocomplete="off"
          placeholder="Введите текст..."
          rows="3"
          name="message"
        />
      </div>
      <MainButton
        class="submit-button"
        v-for="setting in buttonSettings"
        :key="setting.label"
        type="submit"
        :label="setting.label"
        :icon="setting.icon"
      />
    </form>
    <div class="policy">
      <NuxtLink :to="policyLink.to" target="_blank">{{ policyLink.name }}</NuxtLink>
    </div>
    <transition name="fade">
      <p v-if="emailSentMessage" class="email-message">{{ emailSentMessage }}</p>
    </transition>
  </Dialog>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'

const visibleDialog = ref(false)
const emailSentMessage = ref('')


const buttonSettings = ref([
    { label: 'Отправить', icon: 'pi pi-envelope' },
  ],
)

const policyLink = ref({
  name: 'Нажимая на кнопку «отправить» вы соглашаетесь с политикой конфиденциальности',
  to: '/privacy_policy',
})

const from_name = ref('')
const from_tel = ref('')
const message = ref('')
const form = ref<HTMLFormElement | null>(null)

const sendEmail = () => {
  if (!form.value) return
  emailjs
    .sendForm('service_e3sh6gq', 'template_6zwemvv', form.value, {
      publicKey: 'GLh62ap00g61n22cV',
    })
    .then(
      () => {
        emailSentMessage.value = 'Информация успешно отправлена!'
        resetFormFields()
        setTimeout(() => {
          emailSentMessage.value = ''
          visibleDialog.value = false
        }, 2000)
      },
      (error) => {
        emailSentMessage.value = 'Попробуй ещё раз :('
        setTimeout(() => {
          emailSentMessage.value = ''
          visibleDialog.value = false
        }, 2000)
      },
    )
}
const resetFormFields = () => {
  from_name.value = ''
  from_tel.value = ''
  message.value = ''
}

</script>

<style lang="scss">
.btn {
  @apply px-3 py-0 flex justify-center items-center;

  & > i {
    @apply text-base xs:text-2xl;
  }
}

.dialog {

  .form {
    @apply flex flex-col justify-evenly items-start gap-2;

    div {
      @apply flex justify-start items-center gap-2;
      @apply w-full mt-2;

      .inputText {
        @apply flex-auto;
        @apply pl-2;
        @apply rounded-md;
        @apply w-full;
      }

      .inputLast {
        @apply h-20;
      }

      &:focus {
        @apply border-none;
      }
    }
  }

  .policy {
    @apply text-sec text-[.7rem] text-nowrap mt-2;
  }

  .submit-button {
    @apply self-end;
    @apply p-2 my-2;
    @apply text-prime bg-sec;
    @apply border-none;
    @apply transform -translate-y-[.1rem];
    @apply shadow-md shadow-black/60;
    @apply transition-all ease-in-out rounded-md;

    &:hover {
      @apply transform translate-y-0.5;
      @apply shadow shadow-black/10;
    }
  }

  .email-message {
    @apply mt-2;
    @apply text-center;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}

.p-dialog-title {
  @apply text-sec;
}

</style>