import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        ,
        IconsResolver({
          prefix: "icon", // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
          enabledCollections: ["ep"], // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
        }),
      ],
    }),
    Icons({
      // scale: 1, // 缩放
      compiler: "vue3", // 编译方式
      autoInstall: true,
    }),
  ],
});
