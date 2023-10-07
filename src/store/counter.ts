/*
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-09-11 15:36:44
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 17:15:02
 * @FilePath: \vue3-element-admin\src\store\modules\counter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// src/store/counter.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  // ref变量 → state 属性
  const count = ref(0);
  // computed计算属性 → getters
  const double = computed(() => {
    return count.value * 2;
  });
  // function函数 → actions
  function increment() {
    count.value++;
  }

  return { count, double, increment };
});

