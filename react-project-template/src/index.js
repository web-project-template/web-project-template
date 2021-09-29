import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import {store} from './store';

import {/*BrowserRouter,*/HashRouter} from 'react-router-dom';
// react-router 只提供一些核心的API
// react-router-dom 更多的一些选项
// 路由传参
// params 方式进行传参
// 1、需要在路由跪着中设置传递的接受阐述：xxx
// 优势：刷新地址，参数依然存在
// 缺点：只能传递字符串，并且 参数过多的时候url会变得比较丑陋

// 我们将Provider放在最上层让redux的store在任何组件里都是可用的。

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
