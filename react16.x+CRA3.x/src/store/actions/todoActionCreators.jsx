export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'delete_todo';
export const COPY_TODO = 'copy_todo';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function increment(num) {
  return {type: INCREMENT, num}
}

export function decrement(num) {
  return {type: DECREMENT, num}
}

export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function deleteTodo(data) {
  return {type: DELETE_TODO, data}
}

export function copyTodo(data) {
  return {type: COPY_TODO, data}
}

export function toggleTodo(index) {
  return {type: TOGGLE_TODO, index}
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}