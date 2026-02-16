<script setup lang="ts">
import { router } from '@/app/router'
import { useLogout } from '@/features/auth/hooks/useLogout'
import BaseButton from '@/shared/ui/base-button/BaseButton.vue'
import { Film, Globe, LogOut } from 'lucide-vue-next'

const { mutate: logout } = useLogout()

function handleLogout() {
  logout(undefined, {
    onSuccess() {
      router.replace({ name: 'Login' })
    }
  })
}
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
              Movies
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
              Favorites
            </BaseButton>
          </router-link>
        </nav>
        <BaseButton type="button" variant="ghost" size="sm" class="flex items-center gap-1">
          <Globe :size="14" aria-hidden="true" />
          EN
        </BaseButton>

        <div class="relative">
          <BaseButton
            variant="ghost"
            size="sm"
            class="flex items-center gap-1"
            @click="handleLogout"
            aria-haspopup="true"
          >
            <LogOut :size="14" aria-hidden="true" />
            Logout
          </BaseButton>
        </div>
      </div>
    </header>

    <main class="p-6 max-w-7xl mx-auto">
      <slot />
    </main>
  </div>
</template>
