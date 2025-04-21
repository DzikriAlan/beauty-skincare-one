import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

const messages = {
  en,
  id
}

const i18n = createI18n({
  legacy: false, // Menggunakan Composition API
  locale: 'id', // Set locale default
  fallbackLocale: 'en', // Set fallback locale jika tidak ada terjemahan
  messages
})

export default i18n