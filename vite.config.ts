import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import path from "path";
// 导入Element Plus的中文语言包
// import zhCn from 'element-plus/es/locale/lang/zh-cn'

const pathSrc = path.resolve(__dirname, 'src')
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
  ],
  resolve: {
    alias: {
      '@': pathSrc,
    }
  }
})
