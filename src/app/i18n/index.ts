import { localeService } from '@/features/auth/services/locale.service'
import en from '@/locales/en.json'
import id from '@/locales/id.json'
import { createI18n } from 'vue-i18n'

const messages = {
  en,
  id
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

const saved = localeService.get()
if (saved) {
  i18n.global.locale.value = saved as any
}
