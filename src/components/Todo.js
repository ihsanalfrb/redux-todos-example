import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

const Todo = ({ id, dispatch, onClick, completed, text }) => (
  <div>
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <button onClick={() => dispatch(deleteTodo(id))}>Delete Todo</button>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default connect()(Todo)
