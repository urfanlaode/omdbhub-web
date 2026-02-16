import { router } from '@/app/router'
import { env } from '@/config/env'
import { tokenService } from '@/features/auth/services/token.service'
import axios from 'axios'

export const client = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
})

client.interceptors.request.use((config) => {
  const token = tokenService.get()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      tokenService.remove()
      router.push({ name: 'Login' })
    }

    return Promise.reject(error)
  }
)
