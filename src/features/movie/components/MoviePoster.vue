<script setup lang="ts">
import BaseCard from '@/shared/ui/base-card/BaseCard.vue'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import FavoriteButton from './FavoriteButton.vue'

const { t } = useI18n()

const props = defineProps({
  poster: { type: String, default: '' },
  title: { type: String, default: '' },
  is_favorite: { type: Boolean, default: false }
})

const emit = defineEmits<{
  (e: 'toggle-favorite'): void
}>()

const is_favorite = ref(Boolean(props.is_favorite))
watch(
  () => props.is_favorite,
  (v) => {
    is_favorite.value = Boolean(v)
  }
)

function onToggleFavorite(e: Event) {
  e.stopPropagation()
  is_favorite.value = !is_favorite.value
  emit('toggle-favorite')
}
</script>

<template>
  <BaseCard class="w-full">
    <div class="relative">
      <div class="h-80 bg-neutral-800 flex items-center justify-center overflow-hidden rounded">
        <img
          v-if="props.poster"
          :src="props.poster"
          alt=""
          class="h-full w-full object-cover"
          loading="lazy"
        />
        <div v-else class="text-neutral-600 p-6">{{ t('app.no_image') }}</div>
      </div>

      <div class="absolute left-3 bottom-3">
        <FavoriteButton :pressed="is_favorite" @click="onToggleFavorite" />
      </div>
    </div>
  </BaseCard>
</template>
