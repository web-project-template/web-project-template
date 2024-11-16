import React, {Component} from 'react'
import {connect} from "react-redux";
import {copyTodo, deleteTodo, toggleTodo} from "../../../store/actions";

class Todo extends Component {

  // 第一个是组件初始化(initialization)阶段
  constructor() {
    super();

    this.state = {date: new Date()};
  }

  // 第二个是组件的挂载(Mounting)阶段
  // 此阶段分为componentWillMount，render，componentDidMount三个时期。

  componentWillMount() {
    console.log('Todo componentWillMount 即将被装载、渲染到页面上：', this.props);
  }

  render() {
    console.log('Todo render');
    let {completed, text, index, deleteTodo, copyTodo, toggleTodo} = this.props;
    return (
      <li className="list-group-item">
      <span style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>{text}</span>
        <div style={{float: 'right'}}>
          <span onClick={() => toggleTodo(index)}>✔️</span>
          <span onClick={() => deleteTodo(index)}>❌</span>
          <span onClick={() => copyTodo(index)}>♥️</span>
        </div>
      </li>
    )
  }

  componentDidMount() {
    console.log('Todo componentDidMount 挂载：', this.props);
  }

  // 第三个是组件的更新(update)阶段
  // componentWillReceiveProps–>shouldComponentUpdate --> componentWillupdate --> componentDidUpdate

  // componentWillReceiveProps中调用 this.setState() 将不会引起第二次渲染。
  componentWillReceiveProps(nextProps) {
    console.log('Todo componentWillReceiveProps 父组件重传props时就会调用这个方法');
  }

  // shouldComponentUpdate:组件接受到新属性或者新状态的时候（可以返回false，接收数据后不更新，阻止render调用，后面的函数不会被继续执行了）
  // shouldComponentUpdate(nextProps) {
  //   // if (nextProps.someThings === this.props.someThings) {
  //   //   return false
  //   // }
  //   return true;
  // }

  // componentWillUpdate:组件即将更新不能修改属性和状态
  componentWillUpdate(nextProps) {
    console.log('Todo componentWillUpdate 组件即将更新不能修改属性和状态');
  }

  // componentDidUpdate:组件已经更新
  componentDidUpdate(nextProps) {
    console.log('Todo componentDidUpdate 组件已经更新', JSON.stringify(nextProps));
  }

  // 卸载阶段
  componentWillUnmount() {
    console.log('Todo componentWillUnmount 卸载：', JSON.stringify(this.props));
  }
}

const mapDispatchToProps = {
  deleteTodo,
  copyTodo,
  toggleTodo
}

Todo = connect(
  null,
  mapDispatchToProps
)(Todo)

export default Todo