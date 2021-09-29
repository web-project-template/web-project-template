import './app.css';
import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import Home from './home/Home'
import Task from './task/Task'
import User from './user/User'
import UserEdit from "./user/UserEdit";


// Hook 是react 16.7新增的一个特性，主要是用来让无状态组件可以使用状态，在react开发中状态的管理是必不可少的
// 以前问了惊喜状态的需要使用类组件活着redux等来管理

// 需求场景
//

//三大原则：
// 1、单一数据源
// 2、state是只读的 我们不能直接改变state 而是要通过触发redux
// 3、使用纯函数来执行修改操作作：action来修改redux中的state

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: ""
    }
  }

  render() {
    return (
      <div className="app">
        <div className={'app-view'}>
          <Switch>
            <Redirect from="/" to="/home" exact/>
            <Route path='/' exact component={Home}/>
            <Route path='/home' component={Home}/>

            <Route path='/user' exact component={User}/>
            <Route path="/user/edit" exact component={UserEdit}></Route>

            <Route path="/task" exact component={Task}></Route>
          </Switch>
        </div>

        <div className={'app-nav'}>
          <NavLink to="/home">主页</NavLink>
          <NavLink to="/task">任务</NavLink>
          <NavLink to="/user">我的</NavLink>
        </div>
      </div>
    );
  }
}