import './Task.css'
import React, {Component} from 'react';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'

export default class Task extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="app-task">
        <h2 style={{borderBottom: "1px solid #e4e4e4"}}>任务列表🤦‍♂</h2>
        <div className={'task-body'}>
          <AddTodo/>
          <VisibleTodoList/>
          <Footer/>
        </div>
      </div>
    )
  }
}