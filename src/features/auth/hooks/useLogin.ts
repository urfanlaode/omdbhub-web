import { useMutation } from '@tanstack/vue-query'
import { useStore } from 'vuex'
import { login } from '../api/auth.api'
import type { LoginPayload } from '../types/login.types'

export function useLogin() {
  const { commit } = useStore()

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: ({ data }) => {
      commit('auth/setUser', data?.user)
      commit('auth/setToken', data?.token)
    }
  })
}
