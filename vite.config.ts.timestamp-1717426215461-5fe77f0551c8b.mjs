// vite.config.ts
import { defineConfig } from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/vite/dist/node/index.js";
import vue from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import AutoImport from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///H:/code/CrossPlatformApps/HeLe/HeLe_admin/node_modules/unplugin-vue-components/dist/resolvers.js";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOlxcXFxjb2RlXFxcXENyb3NzUGxhdGZvcm1BcHBzXFxcXEhlTGVcXFxcSGVMZV9hZG1pblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSDpcXFxcY29kZVxcXFxDcm9zc1BsYXRmb3JtQXBwc1xcXFxIZUxlXFxcXEhlTGVfYWRtaW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0g6L2NvZGUvQ3Jvc3NQbGF0Zm9ybUFwcHMvSGVMZS9IZUxlX2FkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbi8vIFx1NjMwOVx1OTcwMFx1NUJGQ1x1NTE2NVxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQge0VsZW1lbnRQbHVzUmVzb2x2ZXJ9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IHBhdGhTcmMgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJylcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBWdWVEZXZUb29scygpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IFZ1ZSBcdTc2RjhcdTUxNzNcdTUxRkRcdTY1NzBcdUZGMENcdTU5ODJcdUZGMUFyZWYsIHJlYWN0aXZlLCB0b1JlZiBcdTdCNDlcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCAncGluaWEnXSxcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICBkdHM6IHBhdGgucmVzb2x2ZShwYXRoU3JjLCAnYXV0by1pbXBvcnRzLmQudHMnKSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgICBkdHM6IHBhdGgucmVzb2x2ZShwYXRoU3JjLCAnYXV0by1pbXBvcnRzLmQudHMnKSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHBhdGhTcmMsXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VCxTQUFTLG9CQUFvQjtBQUNwVixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFFeEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUSwyQkFBMEI7QUFDbEMsT0FBTyxVQUFVO0FBUGpCLElBQU0sbUNBQW1DO0FBU3pDLElBQU0sVUFBVSxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUM3QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUE7QUFBQSxNQUVULFNBQVMsQ0FBQyxPQUFPLGNBQWMsT0FBTztBQUFBLE1BQ3RDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLE1BQ2pDLEtBQUssS0FBSyxRQUFRLFNBQVMsbUJBQW1CO0FBQUEsSUFDaEQsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDakMsS0FBSyxLQUFLLFFBQVEsU0FBUyxtQkFBbUI7QUFBQSxJQUNoRCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
