<script lang="ts" setup>
import { router } from '@/app/router'
import { useToggleFavorite } from '@/features/favorite/hooks/useToggleFavorite'
import SearchBar from '@/features/movie/components/SearchBar.vue'
import { useDebouncedRef } from '@/shared/hooks/useDeounceRef'
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import MovieCard from '../components/MovieCard.vue'
import { useInfiniteSearchMovies } from '../hooks/useMovies'
import type { Movie, SearchMoviesRequestParams } from '../types/movie.types'

const { t } = useI18n()

const s = ref('')
const y = ref('')
const type = ref('')

const debS = useDebouncedRef(s)
const debY = useDebouncedRef(y)

const params = computed<SearchMoviesRequestParams>(() => ({
  s: debS.value,
  y: debY.value,
  type: type.value
}))

const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
  useInfiniteSearchMovies(params)

const sentinel = ref<HTMLElement | null>(null)

const enabled = computed(() => {
  const hasNext = !!hasNextPage?.value
  const fetching = !!isFetchingNextPage?.value
  const hasQuery = Boolean(params.value?.s && String(params.value.s).trim().length > 0)
  return hasNext && !fetching && hasQuery
})

useInfiniteScroll({
  sentinel,
  onLoadMore: () => {
    if (hasNextPage.value && !isFetchingNextPage.value) {
      fetchNextPage()
    }
  },
  enabled,
  rootMargin: '300px'
})

// flatten pages into movies
const movies = computed<Movie[]>(() => (data?.value?.pages ?? []).flatMap((p) => p.data ?? []))

const handleClickMovie = (imdb_id: string) => {
  router.push({ name: 'MovieDetails', params: { imdb_id } })
}

const { mutate: toggleFavorite } = useToggleFavorite()
</script>

<template>
  <div class="min-h-[70vh]">
    <!-- Search area -->
    <div class="mb-6">
      <SearchBar v-model:s="s" v-model:y="y" v-model:type="type" />
    </div>

    <!-- loading / error -->
    <div class="mb-4 text-sm text-neutral-400">
      <div v-if="isLoading" class="text-center">{{ t('app.loading') }}</div>
      <div v-else-if="isError">Error: {{ error?.message ?? String(error) }}</div>
    </div>

    <div v-if="!params.s" class="text-sm text-neutral-500 text-center">
      {{ t('movie.search_prompt') }}
    </div>

    <!-- Movies -->
    <div
      v-else-if="movies.length > 0"
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
        :is_favorite="movie.is_favorite"
        @click="handleClickMovie"
        @toggle-favorite="() => toggleFavorite({ movie, next: !movie.is_favorite })"
        class="p-0"
      />
    </div>

    <!-- Empty state -->
    <div v-else-if="!isLoading" class="text-sm text-neutral-500 text-center">
      {{ t('app.no_results') }}
    </div>

    <!-- Load more -->
    <div ref="sentinel" class="h-6" aria-hidden="true"></div>
  </div>
</template>
