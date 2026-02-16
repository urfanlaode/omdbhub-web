<script setup lang="ts">
import BaseInput from '@/shared/ui/base-input/BaseInput.vue'
import BaseSelect from '@/shared/ui/base-select/BaseSelect.vue'
import { cn } from '@/shared/utils/cn'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const s = defineModel<string>('s')
const y = defineModel<string>('y')
const type = defineModel<string>('type')
</script>

<template>
  <div class="flex gap-3 items-center">
    <BaseInput v-model="s" :placeholder="t('movie.search_placeholder')" class="flex-1" />
    <BaseInput v-model="y" :placeholder="t('movie.year')" class="w-28" />
    <BaseSelect v-model="type" :custom="true" :class="cn('w-40', !type ? 'text-muted' : '')">
      <option value="" class="text-muted">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </BaseSelect>
  </div>
</template>
