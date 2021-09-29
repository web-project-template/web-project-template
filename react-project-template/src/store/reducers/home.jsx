import {CHANGE_TAB} from "../actions";

let homeData = {
  curSubTab: "CX",
  curShowList: []
}

// 之所以将这样的函数称之为 reducer，是因为这种函数与被传入 Array.prototype.reduce(reducer, ?initialValue) 里的回调函数属于相同的类型。保持 reducer 纯净非常重要。永远不要在 reducer 里做这些操作：
//
// 修改传入参数；
// 执行有副作用的操作，如 API 请求和路由跳转；
// 调用非纯函数，如 Date.now() 或 Math.random()。

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
export function home(state = homeData, action) {
  switch (action.type) {
    case CHANGE_TAB:
      // return {
      //   ...state,
      //   ...{curSubTab: action.data}
      // }

      return Object.assign({}, state, {
        curSubTab: action.data
      })
    default:
      return state
  }
}