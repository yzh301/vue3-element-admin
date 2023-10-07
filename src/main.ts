/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-09-07 23:51:10
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 18:02:59
 * @FilePath: \vue3-element-admin\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-09-07 23:51:10
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 18:02:49
 * @FilePath: \vue3-element-admin\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from "@/router"
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { setupDirective } from '@/directive';
const app = createApp(App)

app
      .use(createPinia())
      .use(ElementPlus)
      .use(router)
      .mount('#app')
setupDirective(app);