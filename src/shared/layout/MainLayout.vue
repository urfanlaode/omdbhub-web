<script setup lang="ts">
import { router } from '@/app/router'
import { useLogout } from '@/features/auth/hooks/useLogout'
import BaseButton from '@/shared/ui/base-button/BaseButton.vue'
import LangSwitcher from '@/shared/ui/lang-swither/LangSwitcher.vue'
import { Film, LogOut } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { mutate: logout } = useLogout()

function handleLogout() {
  logout(undefined, {
    onSuccess() {
      router.replace({ name: 'Login' })
    }
  })
}

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-neutral-900 text-gray-100">
    <header
      class="bg-neutral-950 border-b border-neutral-800 px-6 py-3 flex items-center justify-between"
    >
      <div class="flex items-center gap-4">
        <router-link to="/" class="flex items-center gap-3">
          <div class="text-yellow-400 font-semibold">
            <Film :size="20" class="stroke-current text-yellow-400" aria-hidden="true" />
          </div>
          <span class="font-semibold text-sm">OMDBHub</span>
        </router-link>
      </div>

      <div class="flex items-center gap-3">
        <nav class="flex items-center gap-4 text-sm text-neutral-300 ml-4">
          <router-link :to="{ name: 'Movies' }" custom v-slot="{ navigate, isActive }">
            <BaseButton
              @click="navigate"
              type="button"
              variant="ghost"
              size="sm"
              class="flex items-center gap-1"
              :class="[
                'flex items-center gap-1',
                isActive ? 'bg-neutral-800 text-yellow-400' : 'hover:bg-neutral-800'
              ]"
              :aria-current="isActive ? 'page' : undefined"
            >
              {{ t('movie.movies') }}
            </BaseButton>
          </router-link>

          <router-link :to="{ name: 'Favorites' }" custom v-slot="{ navigate, isActive }">
            <BaseButton
              @click="navigate"
              type="button"
              variant="ghost"
              size="sm"
              class="flex items-center gap-1"
              :class="[
                'flex items-center gap-1',
                isActive ? 'bg-neutral-800 text-yellow-400' : 'hover:bg-neutral-800'
              ]"
              :aria-current="isActive ? 'page' : undefined"
            >
              {{ t('movie.favorites') }}
            </BaseButton>
          </router-link>
        </nav>

        <LangSwitcher />

        <div class="relative">
          <BaseButton
            variant="ghost"
            size="sm"
            class="flex items-center gap-1"
            @click="handleLogout"
            aria-haspopup="true"
          >
            <LogOut :size="14" aria-hidden="true" />
            {{ t('app.logout') }}
          </BaseButton>
        </div>
      </div>
    </header>

    <main class="p-6 max-w-7xl mx-auto">
      <slot />
    </main>
  </div>
</template>
