<script setup lang="ts">
import BaseCard from '@/shared/ui/base-card/BaseCard.vue'
import { Heart } from 'lucide-vue-next'
import { ref, watch } from 'vue'

const props = defineProps({
  imdb_id: String,
  is_favorite: { type: Boolean, default: false },
  title: String,
  poster: String,
  year: [String, Number],
  type: { type: String, default: 'Movie' }
})

const emit = defineEmits<{
  (e: 'click', imdb_id: string): void
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

function onClick() {
  emit('click', props.imdb_id!)
}
</script>

<template>
  <BaseCard class="w-44 relative" @click="onClick">
    <div class="h-56 bg-neutral-800 flex items-center justify-center overflow-hidden">
      <img
        v-if="props.poster"
        :src="props.poster"
        alt=""
        class="h-full w-full object-cover"
        loading="lazy"
      />
      <div v-else class="text-neutral-600">No image</div>
    </div>

    <div class="absolute right-3 top-1">
      <div
        class="h-4 w-4 p-1 rounded-full shadow-md"
        @click="onToggleFavorite"
        :aria-pressed="is_favorite"
        :aria-label="is_favorite ? 'Remove from favorites' : 'Add to favorites'"
      >
        <template v-if="is_favorite">
          <Heart class="w-4 h-4 fill-current stroke-current text-yellow-400" aria-hidden="true" />
        </template>
        <template v-else>
          <Heart class="w-4 h-4 stroke-current text-white" aria-hidden="true" />
        </template>
      </div>
    </div>

    <div class="p-3">
      <h3 class="text-sm font-semibold line-clamp-2">{{ props.title }}</h3>
      <div class="flex items-center justify-between text-xs text-neutral-400 mt-2">
        <span>{{ props.year }}</span>
        <span class="text-yellow-400 capitalize">{{ props.type ?? 'Movie' }}</span>
      </div>
    </div>
  </BaseCard>
</template>
