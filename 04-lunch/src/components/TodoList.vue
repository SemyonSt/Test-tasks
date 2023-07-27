<template>
  <ul>
    <TodoItem
      v-for="(todo, i) of todos"
      v-bind:index="i"
      v-bind:todo="todo"
      v-bind:key="todo.id"
      v-on:remove-todo="removeTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  props: ["todos"],
  name: "App",
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      console.log(id)
      this.$emit('remove-todo', id)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>