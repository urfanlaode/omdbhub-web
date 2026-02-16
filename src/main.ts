import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './App.vue'
import { i18n } from './app/i18n'
import { queryClient } from './app/queryclient'
import { router } from './app/router'
import { store } from './app/store'
import './assets/main.css'

const app = createApp(App)

app.use(VueQueryPlugin, { queryClient })
app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
