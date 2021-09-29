import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../../store/actions'

let AddTodo = ({dispatch}) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder='please input'
            ref={node => {
              input = node
            }}
          />
          <div className="input-group-append">
            <button type="submit" className={'btn btn-primary'}>Add Todo</button>
          </div>
        </div>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo