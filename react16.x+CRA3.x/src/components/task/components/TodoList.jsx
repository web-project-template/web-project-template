import React, {Component} from 'react'
import Todo from '../containers/Todo'

export default class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {date: new Date()};
  }

  render() {
    let {todos} = this.props
    return (
      <ul className="list-group mt-2 mb-2">
        {todos.map((todo, idx) => (
          <Todo
            key={idx}
            {...todo}
            index={idx}/>
        ))}
      </ul>
    )
  }
}

