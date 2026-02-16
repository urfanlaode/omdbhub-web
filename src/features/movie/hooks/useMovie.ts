import { TTL_FIVE_MINUTES } from '@/shared/constants/ttl'
import { useQuery } from '@tanstack/vue-query'
import { getMovie } from '../api/movie.api'

export function useMovie(imdbId: string) {
  return useQuery({
    queryKey: ['movie', imdbId],
    queryFn: () => getMovie(imdbId),
    enabled: !!imdbId,
    staleTime: TTL_FIVE_MINUTES
  })
}
