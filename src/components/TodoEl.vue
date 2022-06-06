<template>
  <tr v-bind:class="[todo.completed ? 'table-success' : 'table-danger']">
    <th @click="toggleItem" scope="row">{{ indexOf }}</th>
    <td>
      <p v-bind:class="[todo.completed ? 'text-decoration-line-through' : '']">{{ todo.title }}</p>
    </td>
    <td>
      <span v-if="todo.completed" class="badge bg-success">Выполнено</span>
      <span v-else class="badge bg-danger">Не выполнено</span>
    </td>
    <td>
      <div class="btn-group" role="group" aria-label="ToDo actions">
        <button v-if="todo.completed" @click="toggleItem" class="btn btn-warning">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <button v-else @click="toggleItem" class="btn btn-success">
          <i class="fa-solid fa-check"></i>
        </button>
        <button class="btn btn-danger" @click="deleteItem">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: 'ToDo',
  props: ['todo', 'indexOf'],
  methods: {
    ...mapActions(({
      deleteItem: 'main/deleteTodo'
    })),
    toggleItem() {
      this.$store.dispatch('main/toggleTodo', this.todo)
    }
  }
}
</script>

<style scoped></style>
