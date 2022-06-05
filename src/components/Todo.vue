<template>
  <div>{{ todo.title }}</div>
  <button @click="deleteItem">Delete</button>
</template>

<script>
export default {
  name: 'TodoEl',
  props: ['todo'],
  methods: {
    deleteItem() {
      this.$store.dispatch('main/deleteTodo', this.todo)
    }
  }
}
</script>

<style scoped></style>
