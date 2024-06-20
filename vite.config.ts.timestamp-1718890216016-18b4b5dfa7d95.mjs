// vite.config.ts
import { defineConfig } from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/.pnpm/vite@5.2.12_@types+node@20.14.0_sass@1.77.4/node_modules/vite/dist/node/index.js";
import vue from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.2.12_@types+node@20.14.0_sass@1.77.4__vue@3.4.27_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/.pnpm/vite-plugin-vue-devtools@7.2.1_rollup@4.18.0_vite@5.2.12_@types+node@20.14.0_sass@1.77.4__vue@3.4.27_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import AutoImport from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@9.13.0_vue@3.4.27_typescript@5.4.5___rollup@4.18.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.6_rollup@4.18.0_vue@3.4.27_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.6_rollup@4.18.0_vue@3.4.27_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/resolvers.js";
import path from "path";
var __vite_injected_original_dirname = "H:\\code\\CrossPlatformApps\\HeLe\\HeLe_admin";
var pathSrc = path.resolve(__vite_injected_original_dirname, "src");
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue", "vue-router", "pinia"],
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, "auto-imports.d.ts")
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, "auto-imports.d.ts")
    })
  ],
  resolve: {
    alias: {
      "@": pathSrc
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOlxcXFxjb2RlXFxcXENyb3NzUGxhdGZvcm1BcHBzXFxcXEhlTGVcXFxcSGVMZV9hZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSDpcXFxcY29kZVxcXFxDcm9zc1BsYXRmb3JtQXBwc1xcXFxIZUxlXFxcXEhlTGVfYWRtaW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0g6L2NvZGUvQ3Jvc3NQbGF0Zm9ybUFwcHMvSGVMZS9IZUxlX2FkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbi8vIFx1NjMwOVx1OTcwMFx1NUJGQ1x1NTE2NVxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQge0VsZW1lbnRQbHVzUmVzb2x2ZXJ9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG4vLyBcdTVCRkNcdTUxNjVFbGVtZW50IFBsdXNcdTc2ODRcdTRFMkRcdTY1ODdcdThCRURcdThBMDBcdTUzMDVcbi8vIGltcG9ydCB6aENuIGZyb20gJ2VsZW1lbnQtcGx1cy9lcy9sb2NhbGUvbGFuZy96aC1jbidcblxuY29uc3QgcGF0aFNyYyA9IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIFZ1ZURldlRvb2xzKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgVnVlIFx1NzZGOFx1NTE3M1x1NTFGRFx1NjU3MFx1RkYwQ1x1NTk4Mlx1RkYxQXJlZiwgcmVhY3RpdmUsIHRvUmVmIFx1N0I0OVxuICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYSddLFxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICAgIGR0czogcGF0aC5yZXNvbHZlKHBhdGhTcmMsICdhdXRvLWltcG9ydHMuZC50cycpLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICAgIGR0czogcGF0aC5yZXNvbHZlKHBhdGhTcmMsICdhdXRvLWltcG9ydHMuZC50cycpLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aFNyYyxcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVULFNBQVMsb0JBQW9CO0FBQ3BWLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUV4QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFRLDJCQUEwQjtBQUNsQyxPQUFPLFVBQVU7QUFQakIsSUFBTSxtQ0FBbUM7QUFXekMsSUFBTSxVQUFVLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQzdDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQTtBQUFBLE1BRVQsU0FBUyxDQUFDLE9BQU8sY0FBYyxPQUFPO0FBQUEsTUFDdEMsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDakMsS0FBSyxLQUFLLFFBQVEsU0FBUyxtQkFBbUI7QUFBQSxJQUNoRCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNqQyxLQUFLLEtBQUssUUFBUSxTQUFTLG1CQUFtQjtBQUFBLElBQ2hELENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
