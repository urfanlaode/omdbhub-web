<script setup lang="ts">
import BaseButton from '@/shared/ui/base-button/BaseButton.vue'
import BaseInput from '@/shared/ui/base-input/BaseInput.vue'
import { Eye, EyeOff } from 'lucide-vue-next'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLoginForm } from '../hooks/useLoginForm'

const { t } = useI18n()

const { defineField, submit, isPending, error } = useLoginForm()

const [username, usernameAttrs] = defineField('username')
const [password, passwordAttrs] = defineField('password')

const showPassword = ref(false)
function toggleShowPassword() {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <AuthLayout>
    <div class="w-full max-w-md mx-auto">
      <form @submit.prevent="submit" class="flex flex-col gap-6">
        <div>
          <label class="block text-xs text-neutral-400 mb-2">{{ t('login.username') }} </label>
          <BaseInput
            v-model="username"
            v-bind="usernameAttrs"
            type="text"
            name="username"
            placeholder="username"
            class="rounded-lg"
          />
        </div>

        <div>
          <label class="block text-xs text-neutral-400 mb-2">{{ t('login.password') }}</label>

          <div class="relative">
            <BaseInput
              v-model="password"
              v-bind="passwordAttrs"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              placeholder="••••••••"
              class="rounded-lg pr-10"
            />

            <button
              type="button"
              class="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 p-1 rounded-full hover:bg-neutral-800"
              @click="toggleShowPassword"
              :aria-pressed="showPassword"
              :aria-label="showPassword ? 'Hide password' : 'Show password'"
            >
              <component
                :is="showPassword ? EyeOff : Eye"
                class="w-5 h-5 stroke-current"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div>
          <BaseButton
            type="submit"
            class="w-full text-black font-semibold rounded-md py-3 bg-linear-to-b from-yellow-400 to-yellow-600"
          >
            <span v-if="isPending">{{ t('app.signing_in') }}</span>
            <span v-else>{{ t('app.sign_in') }}</span>
          </BaseButton>
        </div>

        <div class="text-center text-xs text-neutral-500">Demo: admic / 123abc123</div>

        <div v-if="error" class="text-center text-sm text-red-500">{{ t('app.login_failed') }}</div>
      </form>
    </div>
  </AuthLayout>
</template>
