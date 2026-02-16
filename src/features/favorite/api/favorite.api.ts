import type { Movie } from '@/features/movie/types/movie.types'
import { api } from '@/shared/api/api'
import type { ApiPaginatedResponse, ApiResponse } from '@/shared/types'
import type { AddToFavoritesPayload } from '../types/favorite.types'

export function getFavorites(): Promise<ApiPaginatedResponse<Movie>> {
  return api.get('/v1/movies/favorites')
}

export function addToFavorites(dto: AddToFavoritesPayload): Promise<ApiResponse> {
  return api.post('/v1/movies/favorites', dto)
}

export function removeFromFavorites(imdb_id: string): Promise<ApiResponse> {
  return api.delete(`/v1/movies/favorites/${imdb_id}`)
}
