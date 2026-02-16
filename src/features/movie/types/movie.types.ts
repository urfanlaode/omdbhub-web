export interface Movie {
  imdb_id: string
  is_favorite: boolean
  title: string
  year: string
  poster: string
  type?: MovieType
  rated?: number
  genre?: string[]
  runtime?: string
  plot?: string
  director?: string
  actors?: string
  language?: string
  country?: string
  awards?: string
  box_office?: string
  imdb_rating?: string
}

export interface SearchMoviesRequestParams {
  s: string
  y?: string
  type?: string
  page?: number
}

export type MovieType = 'movie' | 'series' | 'episode'
