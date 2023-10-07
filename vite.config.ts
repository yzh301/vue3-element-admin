/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-09-07 23:51:10
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-09-27 09:42:06
 * @FilePath: \vue3-element-admin\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import vue from '@vitejs/plugin-vue';
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import path from 'path';
const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': pathSrc,
      },
    },
    server: {
      host: "0.0.0.0",
      port: Number(env.VITE_APP_PORT),
      open: true, // 运行是否自动打开浏览器
      proxy: {
        // 反向代理解决跨域
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_TARGET_URL,
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(
              new RegExp("^" + env.VITE_APP_BASE_API),
              env.VITE_APP_TARGET_BASE_API
            ), // 替换 /dev-api 为 target 接口地址
        },
      },
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        // 定义全局scss样式
        scss: {
          javascriptEnabled: true,
          additionalData: `@use "@/styles/variables.scss" as *;`
        }
      }
    }
  }
})
