<template>
  <Button class="btn" @click="visibleDialog=true">
    <i class="pi pi-envelope"></i>
  </Button>
  <Dialog
    v-model:visible="visibleDialog"
    :header=$t(modalData.label)
    class="dialog"
    modal
  >
    <form ref="form" class="form" @submit.prevent="sendEmail">
      <div>
        <i class="pi pi-user" />
        <InputText
          id="username"
          v-model="from_name"
          :placeholder=$t(modalData.name)
          autocomplete="off"
          class="inputText"
          name="from_name"
        />
      </div>
      <div>
        <i class="pi pi-phone" />
        <InputText
          id="tel"
          v-model="from_tel"
          :placeholder=$t(modalData.phone)
          autocomplete="off"
          class="inputText"
          name="from_tel"
        />
      </div>
      <div>
        <i class="pi pi-list" />
        <Textarea
          id="message"
          v-model="message"
          :placeholder=$t(modalData.text)
          autocomplete="off"
          class="inputText inputLast"
          name="message"
          rows="3"
        />
      </div>
      <MainButton
        v-for="setting in buttonSettings"
        :key="setting.label"
        :icon="setting.icon"
        :label="$t(setting.label)"
        class="submit-button"
        type="submit"
      />
    </form>
    <div class="policy">
      <NuxtLink :to="localPath(policyLink.to)" target="_blank">{{ $t(policyLink.name) }}</NuxtLink>
    </div>
    <transition name="fade">
      <p v-if="emailSentMessage" class="sent-message">{{ $t(emailSentMessage) }}</p>
    </transition>
  </Dialog>
</template>

<script lang="ts" setup>
import emailjs from '@emailjs/browser'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { useLocalePath } from '#i18n'

const localPath = useLocalePath()

const visibleDialog = ref(false)
const emailSentMessage = ref('')

const modalData = ref(
  {
    label: 'email-form_header',
    name: 'email-form_name',
    phone: 'email-form_phone',
    text: 'email-form_text',
  },
)

const buttonSettings = ref([
    { label: 'send', icon: 'pi pi-envelope' },
  ],
)

const policyLink = ref({
  name: 'disclaimer',
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
        emailSentMessage.value = 'email_sent_success'
        resetFormFields()
        setTimeout(() => {
          emailSentMessage.value = ''
          visibleDialog.value = false
        }, 2000)
      },
      (error) => {
        emailSentMessage.value = 'email_sent_fail'
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
    @apply text-base xs:text-2xl md:text-4xl;
  }
}

.dialog {
  @apply w-80 xs:w-96;

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
    @apply text-sec text-[.7rem] mt-2;
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

  .sent-message {
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