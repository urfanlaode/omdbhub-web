import { TTL_FIVE_MINUTES } from '@/shared/constants/ttl'
import { useQuery } from '@tanstack/vue-query'
import { getFavorites } from '../api/favorite.api'

export function useFavorites() {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
    staleTime: TTL_FIVE_MINUTES
  })
}
