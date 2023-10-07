<script setup lang="ts">
import { useCounterStore } from '@/store/counter';
const counterStore = useCounterStore()
console.log("first", import.meta.env.VITE_APP_BASE_API)
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-card class="text-left text-white border-white border-1 border-solid mt-10 bg-[#242424]">
    <template #header> 子组件 HelloWorld.vue</template>
    <el-form>
      <el-form-item label="数字："> {{ counterStore.count }}</el-form-item>
      <el-form-item label="加倍："> {{ counterStore.double }}</el-form-item>
    </el-form>
  </el-card>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
