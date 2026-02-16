import LoginPage from '@/features/auth/pages/LoginPage.vue'
import FavoriteListPage from '@/features/favorite/pages/FavoriteListPage.vue'
import MovieListPage from '@/features/movie/pages/MovieListPage.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { store } from '../store'
import MovieDetailPage from '@/features/movie/pages/MovieDetailPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/movies'
  },
  {
    path: '/movies',
    name: 'Movies',
    component: MovieListPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/movies/:imdb_id',
    name: 'MovieDetails',
    component: MovieDetailPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoriteListPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { layout: 'auth' }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['auth/isAuthenticated']

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({ name: 'Login' })
  }

  if (to.name === 'Login' && isAuthenticated) {
    return next({ name: 'Movies' })
  }

  next()
})
