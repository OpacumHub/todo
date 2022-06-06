<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>TodoList Vue 3 + Vuex 4 + Laravel 9</h1>

        <div class="d-flex justify-content-between">
          <h4>Задач выполнено: {{completedTodos}}</h4>
          <h4>Задач в работе: {{pendingTodos}}</h4>
        </div>
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
      completedTodos: 'main/completedTodos',
      pendingTodos: 'main/pendingTodos'
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
