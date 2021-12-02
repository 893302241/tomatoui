import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router/index'
import tomatoui from '@/components/index'

createApp(App).use(router).use(tomatoui).mount('#app')
