<template>
  <tr v-bind:class="[todo.completed ? 'table-success' : 'table-danger']">
    <th scope="row">{{ indexOf }}</th>
    <td>{{ todo.title }}</td>
    <td>
      <span v-if="todo.completed" class="badge bg-success">Выполнено</span>
      <span v-else class="badge bg-danger">Не выполнено</span>
    </td>
    <td>
      <button class="btn btn-danger" @click="deleteItem">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ToDo',
  props: ['todo', 'indexOf'],
  methods: {
    deleteItem() {
      this.$store.dispatch('main/deleteTodo', this.todo)
    }
  }
}
</script>

<style scoped></style>
