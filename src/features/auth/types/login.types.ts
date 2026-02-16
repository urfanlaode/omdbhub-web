import type { User } from './user.types'

export interface LoginPayload {
  username: string
  password: string
}

export interface LoginData {
  user: User
  token: string
  expires_in: number
}
