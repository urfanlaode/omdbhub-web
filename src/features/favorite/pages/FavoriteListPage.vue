<script lang="ts" setup>
import { useToggleFavorite } from '@/features/favorite/hooks/useToggleFavorite'
import MovieCard from '@/features/movie/components/MovieCard.vue'
import type { Movie } from '@/features/movie/types/movie.types'
import { computed } from 'vue'
import { useFavorites } from '../hooks/useFavorites'
import { router } from '@/app/router'

const { data, isLoading, isError, error } = useFavorites()

const movies = computed<Movie[]>(() => data.value?.data ?? [])

const handleClickMovie = (imdb_id: string) => {
  router.push({ name: 'MovieDetails', params: { imdb_id } })
}

const { mutate: toggleFavorite } = useToggleFavorite()
</script>

<template>
  <div class="min-h-[70vh]">
    <!-- loading / error -->
    <div class="mb-4 text-sm text-neutral-400">
      <div v-if="isLoading" class="text-center">Loading results…</div>
      <div v-else-if="isError">Error: {{ error?.message ?? String(error) }}</div>
    </div>

    <!-- Movies -->
    <div
      v-if="movies.length > 0"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      <MovieCard
        v-for="movie in movies"
        :key="movie.imdb_id"
        :imdb_id="movie.imdb_id"
        :title="movie.title"
        :poster="movie.poster"
        :year="movie.year"
        :type="movie.type"
        :is_favorite="true"
        @click="handleClickMovie"
        @toggle-favorite="() => toggleFavorite({ movie, next: false })"
        class="p-0"
      />
    </div>

    <!-- Empty state -->
    <div v-else-if="!isLoading" class="text-sm text-neutral-500 text-center">No results found.</div>

    <!-- Load more -->
    <div ref="sentinel" class="h-6" aria-hidden="true"></div>
  </div>
</template>
