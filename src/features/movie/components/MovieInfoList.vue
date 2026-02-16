<script setup lang="ts">
import { Award, DollarSign, Globe, Star, User } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  director: { type: String, default: '' },
  actors: { type: String, default: '' },
  language: { type: String, default: '' },
  country: { type: String, default: '' },
  awards: { type: String, default: '' },
  boxOffice: { type: String, default: '' }
})
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-900 py-5 rounded">
    <div v-if="props.director" class="flex gap-3 items-start">
      <User class="w-5 h-5 text-yellow-400" />
      <div>
        <div class="text-xs text-neutral-400">{{ t('movie.director') }}</div>
        <div class="text-sm text-neutral-200">{{ props.director }}</div>
      </div>
    </div>

    <div v-if="props.actors" class="flex gap-3 items-start">
      <Star class="w-5 h-5 text-yellow-400" />
      <div>
        <div class="text-xs text-neutral-400">{{ t('movie.actors') }}</div>
        <div class="text-sm text-neutral-200">{{ props.actors }}</div>
      </div>
    </div>

    <div v-if="props.language" class="flex gap-3 items-start">
      <Globe class="w-5 h-5 text-yellow-400" />
      <div>
        <div class="text-xs text-neutral-400">{{ t('movie.language') }}</div>
        <div class="text-sm text-neutral-200">{{ props.language }}</div>
      </div>
    </div>

    <div v-if="props.country" class="flex gap-3 items-start">
      <Globe class="w-5 h-5 text-yellow-400" />
      <div>
        <div class="text-xs text-neutral-400">{{ t('movie.country') }}</div>
        <div class="text-sm text-neutral-200">{{ props.country }}</div>
      </div>
    </div>

    <div v-if="props.awards" class="flex gap-3 items-start">
      <Award class="w-5 h-5 text-yellow-400" />
      <div>
        <div class="text-xs text-neutral-400">{{ t('movie.awards') }}</div>
        <div class="text-sm text-neutral-200">{{ props.awards }}</div>
      </div>
    </div>

    <div v-if="props.boxOffice" class="flex gap-3 items-start">
      <DollarSign class="w-5 h-5 text-yellow-400" />
      <div>
        <div class="text-xs text-neutral-400">{{ t('movie.box_office') }}</div>
        <div class="text-sm text-neutral-200">{{ props.boxOffice }}</div>
      </div>
    </div>
  </div>
</template>
