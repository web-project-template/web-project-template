<template>
  <div>
    <HelloWorld msg="Vite + Vue"/>
    <br/>
    <HelloWorld2 msg="Vite + Vue"/>
    <br/>
    <TodoList :value="123" theme="red"></TodoList>
  </div>
</template>

<script setup>
  import HelloWorld from './HelloWorld.vue'
  import HelloWorld2 from './HelloWorld2.vue'
  import TodoList from './TodoList.vue'
</script>

<style scoped>

</style>