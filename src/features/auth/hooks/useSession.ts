import { useQuery } from '@tanstack/vue-query'
import { watch } from 'vue'
import { useStore } from 'vuex'
import { getSession } from '../api/auth.api'

export function useSession() {
  const { commit } = useStore()

  const query = useQuery({
    queryKey: ['session'],
    queryFn: getSession
  })

  const { data, isError } = query

  watch(
    () => [data.value, isError.value],
    ([user, error]) => {
      if (user) {
        commit('auth/setUser', user)
      } else if (error) {
        commit('auth/clearToken')
        commit('auth/setUser', null)
      }
    }
  )

  return query
}
