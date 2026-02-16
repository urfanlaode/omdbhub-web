<script setup lang="ts">
import { useToggleFavorite } from '@/features/favorite/hooks/useToggleFavorite'
import MovieInfoList from '@/features/movie/components/MovieInfoList.vue'
import MoviePoster from '@/features/movie/components/MoviePoster.vue'
import MovieRatings from '@/features/movie/components/MovieRatings.vue'
import { useMovie } from '@/features/movie/hooks/useMovie'
import { ArrowLeft } from 'lucide-vue-next'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const imdb_id = computed(() => String(route.params.imdb_id ?? ''))

const { data, isLoading, isError, error } = useMovie(imdb_id.value)

const movie = computed(() => data.value?.data ?? null)

const { mutate: toggleFavorite } = useToggleFavorite()

function goBack() {
  router.back()
}

function handleToggleFavorite() {
  if (!movie.value) {
    alert('something went wrong')
    return
  }
  toggleFavorite({ movie: movie.value, next: !movie.value.is_favorite })
}
</script>

<template>
  <div class="min-h-[70vh]">
    <div class="mb-6">
      <button
        @click="goBack"
        class="text-sm text-neutral-400 hover:text-white flex items-center gap-2"
      >
        <ArrowLeft class="h-4 w-4" /> Back
      </button>
    </div>

    <div v-if="isLoading" class="text-center text-neutral-400">Loading…</div>
    <div v-else-if="isError" class="text-center text-red-400">
      Error: {{ error?.message ?? String(error) }}
    </div>

    <div v-else-if="movie" class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Poster column -->
      <div class="lg:col-span-3">
        <MoviePoster
          :poster="movie.poster"
          :title="movie.title"
          :is_favorite="movie.is_favorite"
          @toggle-favorite="handleToggleFavorite"
        />
      </div>

      <!-- Details column -->
      <div class="lg:col-span-9">
        <div class="flex flex-col gap-4">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h1 class="text-3xl font-bold leading-tight">{{ movie.title }}</h1>
              <div class="flex items-center gap-3 mt-2 text-sm text-neutral-400">
                <span>{{ movie.year }}</span>
                <span class="py-1 rounded bg-neutral-900 text-yellow-400 font-semibold">
                  {{ movie.rated ?? '' }}
                </span>
                <span v-if="movie.type" class="capitalize">{{ movie.type }}</span>
              </div>
              <div v-if="movie.genre" class="flex gap-2 mt-3 flex-wrap">
                <span
                  v-for="g in String(movie.genre).split(',')"
                  :key="g"
                  class="text-xs py-1 bg-neutral-900 rounded text-neutral-300"
                >
                  {{ g.trim() }}
                </span>
              </div>
            </div>
          </div>

          <!-- runtime / small meta on the right -->
          <div class="text-sm text-neutral-400">
            <div v-if="movie.runtime" class="mb-1">Runtime: {{ movie.runtime }}</div>
          </div>

          <!-- Plot -->
          <section v-if="movie.plot" class="text-sm text-neutral-300 bg-neutral-900 py-5 rounded">
            <h3 class="text-xs text-neutral-400 mb-2 uppercase tracking-wide">Plot</h3>
            <p class="leading-relaxed text-neutral-300">{{ movie.plot }}</p>
          </section>

          <!-- Info list -->
          <MovieInfoList
            :director="movie.director"
            :actors="movie.actors"
            :language="movie.language"
            :country="movie.country"
            :awards="movie.awards"
            :box-office="movie.box_office"
          />

          <!-- Ratings block -->
          <MovieRatings :imdb_rating="movie.imdb_rating" />
        </div>
      </div>
    </div>

    <div v-else class="text-center text-neutral-500">Movie not found.</div>
  </div>
</template>
