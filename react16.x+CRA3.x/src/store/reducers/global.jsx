import {INVALIDATE_SUBREDDIT, RECEIVE_POSTS, REQUEST_POSTS} from "../actions/globalActionCreators";

// let globalData = {
//   isFetching: false
// }

export function isFetching(state = false, action) {
  // console.log('isFetching reducer:', action);
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      console.log('reducer获得action INVALIDATE_SUBREDDIT 数据：', action.data)
      return state
    case REQUEST_POSTS:
      return true
    case RECEIVE_POSTS:
      return false
    default:
      return state
  }
}

