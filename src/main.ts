import { createApp } from 'vue'
import * as Icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './assets/sass/index.scss'
import './api/mock'
import router from './router'
import store from './store'
import App from './App.vue'

const app = createApp(App)

// app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')


Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})