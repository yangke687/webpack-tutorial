<template>
  <div class="todos">
    <h1 class="todos-title">Todos</h1>
    <router-link to="/">Home</router-link>
    <router-link to="todos">Todos</router-link>
    <br/>
    <br/>
    <input type="text" v-model="newTodo.text" @keydown.13="createTodo"/>
    <br/>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.id }}. {{ todo.text }}
        <span class="button" @click="delTodo(todo)">Remove</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => {
    return {
      newTodo: { text: '' }
    }
  },

  computed: {
    ...mapGetters([
      'todos'
    ])
  },

  methods: {
    ...mapActions([
      'addTodo',
      'delTodo'
    ]),

    createTodo (todo) {
      this.addTodo({...this.newTodo})
      this.newTodo.text = ''
    }
  }
}
</script>

<style scoped lang="less">
  .todos {
    &-title{
      color: rebeccapurple;
    }
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    padding-top: 20px;
    >li{
      text-transform: capitalize;
    }
  }
  .button {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
