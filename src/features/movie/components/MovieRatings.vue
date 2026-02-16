<script setup lang="ts">
const props = defineProps({
  imdb_rating: { type: [String, Number], default: null }
})

const imdb = props['imdb_rating']
</script>

<template>
  <div class="mt-4">
    <h4 class="text-xs text-neutral-400 uppercase mb-3">Rating</h4>
    <div class="py-4 bg-neutral-900 rounded">
      <div class="text-yellow-400 font-semibold text-lg">{{ imdb ?? '—' }}</div>
      <div class="text-xs text-neutral-400 mt-1">Internet Movie Database</div>
    </div>
  </div>
</template>
