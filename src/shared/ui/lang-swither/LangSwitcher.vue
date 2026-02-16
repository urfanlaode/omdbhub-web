<script setup lang="ts">
import { localeService } from '@/features/auth/services/locale.service'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const current = ref(locale.value)

function setLocale(l: string) {
  locale.value = l
  localeService.set(l)
  current.value = l
}
</script>

<template>
  <!-- Language segmented control -->
  <div class="flex items-center gap-0">
    <div
      size="sm"
      variant="ghost"
      :aria-pressed="current === 'en'"
      @click="setLocale('en')"
      :class="current === 'en' ? 'bg-neutral-800 text-yellow-400' : 'hover:bg-neutral-800'"
      aria-label="Switch to English"
      class="text-xs px-4 py-1 rounded"
    >
      EN
    </div>

    <div
      size="sm"
      variant="ghost"
      :aria-pressed="current === 'id'"
      @click="setLocale('id')"
      :class="current === 'id' ? 'bg-neutral-800 text-yellow-400' : 'hover:bg-neutral-800'"
      aria-label="Switch to Indonesian"
      class="text-xs px-4 py-1 rounded"
    >
      ID
    </div>
  </div>
</template>
