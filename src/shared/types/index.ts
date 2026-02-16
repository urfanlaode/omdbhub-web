export interface ApiResponse<T = unknown> {
  ok: boolean
  timestamp: string
  message?: string
  data?: T
}

export interface ApiPaginatedResponse<T> {
  ok: boolean
  timestamp: string
  message?: string
  page: number
  total: number
  data: T[]
}
