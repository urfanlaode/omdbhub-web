import { api } from '@/shared/api/api'
import type { ApiPaginatedResponse, ApiResponse } from '@/shared/types'
import type { Movie, SearchMoviesRequestParams } from '../types/movie.types'

export function searchMovies(
  params: SearchMoviesRequestParams
): Promise<ApiPaginatedResponse<Movie>> {
  return api.get('/v1/movies/search', { params })
}

export function getMovie(imdbId: string): Promise<ApiResponse<Movie>> {
  return api.get(`/v1/movies/${imdbId}`)
}
