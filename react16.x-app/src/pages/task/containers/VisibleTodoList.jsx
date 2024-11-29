import {connect} from 'react-redux'
import {VisibilityFilters} from '../../../store/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return todos;
  }
}


// (一旦store被更新，应用中所有connect函数的第一个参数函数就会被call)
// 将返回一个对象该对象会被合并到包装的组件的props。
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todoApp.todos, state.todoApp.visibilityFilter)
})

/**
 * 如果传递的是一个函数，该函数将接收一个 dispatch 函数，然后由你来决定如何返回一个对象，这个对象通过 dispatch 函数与 action creator 以某种方式绑定在一起
 * （提示：你也许会用到 Redux 的辅助函数 bindActionCreators()。
 * */
// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       // dispatch(addTodo(id))
//       // dispatch(deleteTodo(id))
//       dispatch(toggleTodo(id))
//     }
//   }
// }

/**
 * 1、如果传递的是一个对象，那么每个定义在该对象的函数都将被当作 Redux action creator，对象所定义的方法名将作为属性名；
 * 2、每个方法将返回一个新的函数，函数中dispatch方法会将 action creator 的返回值作为参数执行。
 * 3、这些属性会被合并到组件的 props 中。
 * */
// const mapDispatchToProps = {
//   addTodo,
//   deleteTodo,
//   toggleTodo
// }

/**
 * connect() 函数链接react的组件和redux的store。
 * @param mapStateToProps 如果此函数被指定那么新包装的组件会指定Redux store的更新。
 * @param mapDispatchToProps 如果你省略这个 mapDispatchToProps 参数，默认情况下，dispatch 会注入到你的组件 props 中。
 * */
const VisibleTodoList = connect(
  mapStateToProps,
  null
)(TodoList)

export default VisibleTodoList