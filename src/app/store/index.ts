import { env } from '@/config/env'
import { authModule } from '@/features/auth/store/auth.module'
import { createStore } from 'vuex'

export const store = createStore({
  strict: env.VITE_APP_ENV === 'development',

  modules: {
    auth: authModule
  }
})
