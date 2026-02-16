import { useMutation } from '@tanstack/vue-query'
import { useStore } from 'vuex'
import { logout } from '../api/auth.api'

export function useLogout() {
  const { commit } = useStore()

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      commit('auth/clearToken')
      commit('auth/setUser', null)
    }
  })
}
