import * as Types from './mutation-types'

export default {
  addTodo ({commit}, todo) {
    commit(Types.ADD_TODO, todo)
  },

  delTodo ({commit}, todo) {
    commit(Types.DEL_TODO, todo)
  }
}
