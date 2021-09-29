export const FETCH_POSTS_REQUEST = 'fetch_posts_request';
export const FETCH_POSTS_FAILURE = 'fetch_posts_failure';
export const FETCH_POSTS_SUCCESS = 'fetch_posts_success';

export const REQUEST_POSTS = 'request_posts';
export const RECEIVE_POSTS = 'receive_posts';
export const ERROR_POSTS = 'error_posts';
export const INVALIDATE_SUBREDDIT = 'invalidate_subreddit';

export function requestPosts(data) {
  return {
    type: REQUEST_POSTS,
    data
  }
}

export function receivePosts(data) {
  return {
    type: RECEIVE_POSTS,
    data,
    receivedAt: Date.now()
  }
}

export function errorPosts(data) {
  return {
    type: ERROR_POSTS,
    data
  }
}

export function invalidateSubreddit(data) {
  return {
    type: INVALIDATE_SUBREDDIT,
    data
  }
}

// 来看一下我们写的第一个 thunk action 创建函数！
// 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它：
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(subreddit) {

  // Thunk middleware 知道如何处理函数。
  // 这里把 dispatch 方法通过参数的形式传给函数，
  // 以此来让它自己也能 dispatch action。

  return function (dispatch) {

    // 首次 dispatch：更新应用的 state 来通知
    // API 请求发起了。

    dispatch(requestPosts(true))

    // thunk middleware 调用的函数可以有返回值，
    // 它会被当作 dispatch 方法的返回值传递。

    // 这个案例中，我们返回一个等待处理的 promise。
    // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let res = {
          code: 200,
          data: '请求成功返回的数据',
          message: "ok"
        }
        resolve(res);
      }, 1000);
    }).then(res => {
      // 不要使用 catch，因为会捕获
      // 在 dispatch 和渲染中出现的任何错误，
      // 导致 'Unexpected batch number' 错误。
      // https://github.com/facebook/react/issues/6895
      dispatch(receivePosts(false))
      dispatch(invalidateSubreddit(res))

      return res;
    }, error => {
      dispatch(errorPosts(error));
    })
  }
}