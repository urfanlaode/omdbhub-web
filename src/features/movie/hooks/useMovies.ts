import { TTL_FIVE_MINUTES } from '@/shared/constants/ttl'
import { useInfiniteQuery } from '@tanstack/vue-query'
import { computed, type Ref } from 'vue'
import { searchMovies } from '../api/movie.api'
import type { SearchMoviesRequestParams } from '../types/movie.types'

export function useInfiniteSearchMovies(params: Ref<SearchMoviesRequestParams>) {
  return useInfiniteQuery({
    queryKey: ['search-movies', 'infinite', params],
    queryFn: ({ pageParam = 1 }) => {
      return searchMovies({
        ...(params.value ?? {}),
        page: pageParam
      })
    },
    enabled: computed(() => !!params.value?.s),
    initialPageParam: 1,
    getNextPageParam: (current, pages) => {
      const totalLoaded = pages.reduce((sum, page) => sum + page.data?.length, 0)
      return totalLoaded < current.total ? current.page + 1 : undefined
    },
    staleTime: TTL_FIVE_MINUTES
  })
}
