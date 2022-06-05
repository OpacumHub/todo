<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Задача</th>
        <th scope="col">Состояние</th>
        <th scope="col">Действия</th>
      </tr>
      </thead>
      <tbody>
      <TodoEl v-for="(todo, index) in todos" :key="index" :todo="todo" :indexOf="index+1"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import TodoEl from './TodoEl'

export default {
  name: 'TodoList',
  components: {
    TodoEl
  },
  computed: {
    todos() {
      return this.$store.state.main.todos
    }
  },
  incrementIndex(key) {
    return key + 1;
  }
}
</script>

<style scoped></style>
