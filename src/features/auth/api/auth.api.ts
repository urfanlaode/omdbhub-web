import { api } from '@/shared/api/api'
import type { ApiResponse } from '@/shared/types'
import type { LoginData, LoginPayload } from '../types/login.types'

export function login(payload: LoginPayload): Promise<ApiResponse<LoginData>> {
  return api.post('/v1/auth/login', payload)
}

export function logout(): Promise<ApiResponse> {
  return api.post('/v1/auth/logout')
}

export function getSession(): Promise<ApiResponse> {
  return api.get('/v1/auth/me')
}
