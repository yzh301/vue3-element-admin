
import router from "@/router";
import { useUserStoreHook } from "@/store/modules/user";
import { usePermissionStoreHook } from "@/store/modules/permission";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false }); // 进度条

const permissionStore = usePermissionStoreHook();

// 白名单路由
const whiteList = ["/login"];
// 获取当前登录用户的角色信息进行动态路由的初始化
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = localStorage.getItem("accessToken")
  if (hasToken) {
    // 是否登录
    const userStore = useUserStoreHook();
    const hasRoles = userStore.roles && userStore.roles.length > 0;
    if (hasRoles) {
      // 是否获取用户信息
      if (to.matched.length === 0) {
        from.name ? next({ name: from.name }) : next('/404')
      } else {
        next()
      }
    } else {
      try {
        // 获取动态权限路由
        const { roles } = await userStore.getInfo();
        const accessRoutes = await permissionStore.generateRoutes(roles);
        accessRoutes.forEach(route => {
          router.push(route)
        });
        next({ ...to, replace: true })
      } catch (error) {
        await userStore.resetToken()
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }
  }
})