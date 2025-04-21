import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import PrimeVue from 'primevue/config'
import Vue3Marquee from 'vue3-marquee'

// Import PrimeVue CSS
import 'primevue/resources/themes/lara-light-indigo/theme.css' // tema
import 'primevue/resources/primevue.min.css' // core css
import 'primeicons/primeicons.css' // icons

// Import aplikasi CSS
import './styles/main.scss'

const app = createApp(App)

// Registrasi plugins
app.use(router)
app.use(i18n)
app.use(PrimeVue)
app.use(Vue3Marquee, { name: 'MarqueeAnimation' }) // use in template <MarqueeAnimation />

// Mount aplikasi
app.mount('#app')