import * as Types from './mutation-types'

let idStart = 1

export default {
  [Types.ADD_TODO]: (state, todo) => {
    if (!todo.id) {
      todo.id = ++idStart
    }
    state.todos.push(todo)
  },

  [Types.DEL_TODO]: (state, todo) => {
    state.todos.forEach((item, idx) => {
      if (item.id === todo.id) {
        state.todos.splice(idx, 1)
      }
    })
  }
}
