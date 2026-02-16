<script setup lang="ts">
import { useAttrs } from 'vue'
import { Film } from 'lucide-vue-next'

const attrs = useAttrs()
</script>

<template>
  <div
    class="min-h-screen bg-linear-to-b from-neutral-900 via-neutral-900/80 to-black text-gray-100 flex items-center justify-center p-6"
    v-bind="attrs"
  >
    <div class="w-full max-w-md">
      <div class="flex flex-col items-center mb-6">
        <div
          class="w-16 h-16 rounded-lg bg-yellow-400 flex items-center justify-center text-black text-2xl font-bold shadow-lg"
          aria-hidden="true"
        >
          <Film :size="40" class="stroke-current text-black" aria-hidden="true" />
        </div>

        <h1 class="text-2xl font-semibold mt-3">OMDBHub</h1>
        <p class="text-sm text-neutral-400">Sign in to explore movies</p>
      </div>

      <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-md">
        <slot />
      </div>
    </div>
  </div>
</template>
