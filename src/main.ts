import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

// 全局注册El-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn
})
app.use(createPinia())
app.use(router)

app.mount('#app')

// 全局注册icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}