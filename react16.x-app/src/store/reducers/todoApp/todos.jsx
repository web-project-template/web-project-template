import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, COPY_TODO} from "../../actions";

let todoList = [
  {
    completed: true,
    text: 'react'
  },
  {
    completed: true,
    text: 'react-router'
  },
  {
    completed: false,
    text: 'react-redux'
  },
  {
    completed: true,
    text: 'react-redux connect()方法'
  },
  {
    completed: false,
    text: '深入理解容器组件（Smart/Container Components）和展示组件（Dumb/Presentational Components）'
  },
  {
    completed: false,
    text: 'react核心原理'
  }
]

export function todos(state = todoList, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case DELETE_TODO:
      state.splice(action.data, 1);
      return [
        ...state
      ]
    case COPY_TODO:
      return [
        ...state,
        {
          text: state[action.data].text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}