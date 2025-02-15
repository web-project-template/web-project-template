<template>
  <div>
    <h1>value={{ value }} | theme={{ theme }}</h1>

    <input type="text" v-model="title" @keydown.enter="addTodo"/>
    <button v-if="active<all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done"/>
        <span :class="{done:todo.done}">{{todo.title}}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>

    <div>
      全选<input type="checkbox" v-model="allDone"/>
      <span>{{active}} / {{all}} </span>
    </div>
    <br>
    <br>
    <div>({{x}},{{y}})</div>
    <br>
    <br>
    <h1>reactive()</h1>
    <button @click="state.count++">state.count is {{state.count}}</button>
  </div>
</template>

<script setup>
  import {reactive} from 'vue'
  import {useTodos} from "./useTodos"
  import {useMouse} from "./useMouse"

  defineProps({
    value: Number,
    theme: {
      type: String,
      default: "orange"
    }
  })

  let {title, todos, active, all, allDone, addTodo, clear,} = useTodos()

  let {x, y} = useMouse()

  // https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive
  // 还有另一种声明响应式状态的方式，即使用 reactive() API。
  // 与将内部值包装在特殊对象中的 ref 不同，reactive() 将使对象本身具有响应性：
  const state = reactive({count: 0})
</script>

<style scoped>
</style>