import { registerSW } from 'virtual:pwa-register'
import { createApp } from 'vue'
import App from './App.vue'

import './styles/main.scss'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).mount('#app')

const updateSW = registerSW({
    onNeedRefresh() {
      // show a prompt to user
    },
    onOfflineReady() {
      // show a ready to work offline to user
    },
})

updateSW()