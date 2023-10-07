/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-10-07 18:01:54
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 18:02:12
 * @FilePath: \vue3-element-admin\src\directive\permission\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/directive/permission/index.ts

import { useUserStoreHook } from '@/store/modules/user';
import { Directive, DirectiveBinding } from 'vue';

/**
 * 按钮权限
 */
export const hasPerm: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // 「超级管理员」拥有所有的按钮权限
    const { roles, perms } = useUserStoreHook();
    if (roles.includes('ROOT')) {
      return true;
    }
    // 「其他角色」按钮权限校验
    const { value } = binding;
    if (value) {
      const requiredPerms = value; // DOM绑定需要的按钮权限标识

      const hasPerm = perms?.some(perm => {
        return requiredPerms.includes(perm);
      });

      if (!hasPerm) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(
        "need perms! Like v-has-perm=\"['sys:user:add','sys:user:edit']\""
      );
    }
  }
};
