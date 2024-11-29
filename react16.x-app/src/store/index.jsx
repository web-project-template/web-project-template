/* eslint-disable */
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import * as reducers from './reducers';
import {CHANGE_INFO, CHANGE_TAB, decrement, increment} from "./actions";
import {fetchPosts} from "./actions/globalActionCreators";

const loggerMiddleware = createLogger({
  timestamp:false,
  duration:false
})

// combineReducers() 所做的只是生成一个函数，这个函数来调用你的一系列 reducer，每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象。
// combineReducers 接收一个对象，可以把所有顶级的 reducer 放到一个独立的文件中，通过 export 暴露出每个 reducer 函数，然后使用 import * as reducers 得到一个以它们名字作为 key 的 object：
let reducer = combineReducers(reducers)

// Store 就是把它们(action,reducers)联系到一起的对象。Store 有以下职责：

// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。
export let store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们dispatch()函数
    // loggerMiddleware // 一个很便捷的middleware，用来打印action日志
  )
);

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
// eslint-disable-next-line
const unsubscribe = store.subscribe(() => {
  // console.log("store.state:", store.getState())
})

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch(increment(99));
store.dispatch(increment(199));
store.dispatch(decrement(88));
store.dispatch({
  type: CHANGE_TAB,
  data: "OYNN"
});
store.dispatch({
  type: CHANGE_INFO,
  data: {
    name: "欧阳娜娜",
    sex: "W",
    age: 20,
    birthday: "2000.6.15"
  }
});
store.dispatch(fetchPosts('reactjs')).then(res => {
  // console.log('res:', res);
  // console.log(store.getState());
})

// 停止监听 state 更新
// unsubscribe()