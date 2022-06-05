<template>
  <div class="input-group mb-3">
    <input v-model="TodoItem" type="text" class="form-control" placeholder="Новая задача" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button @click="newTodoItem" class="btn btn-dark" type="button" id="button-addon2">Добавить</button>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      TodoItem: ""
    }
  },
  methods: {
    newTodoItem() {
      this.$store.dispatch('main/addNewTodo', this.TodoItem )
      this.TodoItem = ""
    }
  }
}
</script>

<style scoped></style>
