import type { Movie } from '@/features/movie/types/movie.types'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { addToFavorites, removeFromFavorites } from '../api/favorite.api'
import type { AddToFavoritesPayload } from '../types/favorite.types'

type Payload = { movie: Movie; next: boolean }

export function useToggleFavorite() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async ({ movie, next }: Payload) => {
      if (next) {
        const dto: AddToFavoritesPayload = {
          imdb_id: movie.imdb_id,
          title: movie.title ?? '',
          year: movie.year ?? '',
          type: movie.type ?? 'Movie',
          poster: movie.poster ?? ''
        }
        return addToFavorites(dto)
      } else {
        return removeFromFavorites(movie.imdb_id)
      }
    },

    onSettled: (_data, _error, variables) => {
      qc.invalidateQueries({ queryKey: ['search-movies'], exact: false })
      qc.invalidateQueries({ queryKey: ['favorites'], exact: false })
      if (variables?.movie?.imdb_id) {
        qc.invalidateQueries({ queryKey: ['movie', variables.movie.imdb_id], exact: true })
      }
    }
  })
}
