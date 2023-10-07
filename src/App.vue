<!--
 * @Author: WuDaoTingFeng.yzh 2683849644@qq.com
 * @Date: 2023-09-07 23:51:10
 * @LastEditors: WuDaoTingFeng.yzh 2683849644@qq.com
 * @LastEditTime: 2023-10-07 17:20:59
 * @FilePath: \vue3-element-admin\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import SvgIcon from '@/components/SvgIcon/index.vue';
import { useCounterStore } from "@/store/counter";
const counterStore = useCounterStore();
import { Check, Delete, Edit, Message, Search, Star } from "@element-plus/icons-vue";
console.log("first", import.meta.env.VITE_APP_BASE_API);
</script>

<template>
  <el-button type="primary" @click="counterStore.increment">count++</el-button>

  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <img alt="Vue logo" src="./assets/vue.svg" />
  <div style="text-align: center; margin-top: 10px">
    🐛
    <el-button :icon="Search" circle></el-button>
    <el-button type="primary" :icon="Edit" circle></el-button>
    <el-button type="success" :icon="Check" circle></el-button>
    <el-button type="info" :icon="Message" circle></el-button>
    <el-button type="warning" :icon="Star" circle></el-button>
    <el-button type="danger" :icon="Delete" circle></el-button>
    <SvgIcon icon-class="zoom-out" style="font-size:32px;"></SvgIcon>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
