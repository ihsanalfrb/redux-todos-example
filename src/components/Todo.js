import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, duplicateTodo } from '../actions'

const Todo = ({ dispatch, id, completed, text }) => (
  <div>
    <li
      onClick={() => dispatch(toggleTodo(id))}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <button onClick={() => dispatch(deleteTodo(id))}>Delete Todo</button>
    <button onClick={() => dispatch(duplicateTodo(id))}>Duplicate Todo</button>
  </div>
)

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default connect()(Todo)
