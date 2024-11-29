import {CHANGE_INFO} from "../actions";

let userData = {
  name: "程潇",
  sex: "W",
  age: 22,
  birthday: '1998.7.15'
}

export function user(state = userData, action) {
  switch (action.type) {
    case CHANGE_INFO:
      return action.data
    default:
      return state
  }
}