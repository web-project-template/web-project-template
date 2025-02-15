import {ref, computed} from 'vue'

export function useTodos() {
  let title = ref("")
  let todos = ref([{title: "learning vue", done: false}])

  let active = computed(() => {
    return todos.value.filter(v => !v.done).length
  })
  let all = computed(() => todos.value.length)
  let allDone = computed({
    get() {
      return active.value === 0
    },
    set(value) {
      todos.value.forEach(todo => todo.done = value)
      console.log(todos)
    }
  })

  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    })
    title.value = ""
  }

  function clear() {
    todos.value = todos.value.filter(v => !v.done)
  }

  return {
    title,
    todos,
    active,
    all,
    allDone,
    addTodo,
    clear,
  }
}