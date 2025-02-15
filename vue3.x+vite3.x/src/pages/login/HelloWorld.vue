<template>
  <div>
    <h1>响应式基础写法1</h1>
    <h1>msg={{msg}}</h1>

    <div class="card">
      <button type="button" @click="increment">count is {{ count }}</button>
    </div>
  </div>
</template>

<script>
  import {ref} from 'vue'

  export default {
    props: ['msg'],
    setup() {
      // https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#ref
      // 在组合式 API 中，推荐使用 ref() 函数来声明响应式状态：
      const count = ref(0)

      function increment() {
        count.value++
      }

      return {
        count,
        increment,
      }
    },
    mounted(){
    	console.log('this:',this.$store);
    }
  }
</script>

<style scoped>
</style>
