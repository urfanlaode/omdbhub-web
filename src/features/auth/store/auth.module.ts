import type { Module } from 'vuex'
import { tokenService } from '../services/token.service'
import type { User } from '../types/user.types'

export interface AuthState {
  user: User | null
  token: string | null
}

export const authModule: Module<AuthState, any> = {
  namespaced: true,
  state: () => ({
    user: null,
    token: tokenService.get() || null
  }),

  mutations: {
    setUser(state, user: User | null) {
      state.user = user
    },
    setToken(state, token: string | null) {
      state.token = token
      tokenService.set(token || '')
    },
    clearToken(state) {
      state.token = null
      tokenService.remove()
    }
  },

  getters: {
    isAuthenticated(state): boolean {
      return !!state.token
    },
    user: (state) => state.user
  }
}
