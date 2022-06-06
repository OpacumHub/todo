<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>TodoList Vue 3 + Vuex 4 + Laravel 9</h1>
        <h3>Задач выполнено: {{completedTodos}}</h3>
        <TodoList/>
        <TodoForm/>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  },
  computed: {
    ...mapGetters(({
      completedTodos: 'main/completedTodos'
    }))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
