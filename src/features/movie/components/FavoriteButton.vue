<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps({
  pressed: { type: Boolean, default: false }
})

const emit = defineEmits<{
  (e: 'click', ev: Event): void
}>()

const ariaLabel = computed(() => (props.pressed ? 'Remove from favorites' : 'Add to favorites'))
</script>

<template>
  <button
    @click="emit('click', $event)"
    :aria-pressed="props.pressed"
    :aria-label="ariaLabel"
    class="bg-neutral-900/70 p-2 rounded shadow-md hover:bg-neutral-800 transition"
  >
    <Heart
      :class="
        props.pressed
          ? 'w-5 h-5 fill-current text-yellow-400 stroke-current'
          : 'w-5 h-5 stroke-current text-white'
      "
      aria-hidden="true"
    />
  </button>
</template>
