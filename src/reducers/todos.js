const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => (todo.id !== action.id))
    case 'DUPLICATE_TODO':
      return [
        ...state,
        (() => {
          const todo = state.find(todo => (todo.id === action.id))
          return {
            id: action.nextTodoId,
            text: todo.text,
            completed: todo.completed
          }
        })()
      ]
    default:
      return state
  }
}

export default todos
