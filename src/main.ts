import { createApp } from 'vue'
import App from './App.vue'

// 创建 Vue 应用实例
const app = createApp(App)

// 挂载到 DOM
app.mount('#app') // 对应 index.html 中的 #app
