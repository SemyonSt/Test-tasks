<template>
  <div id="app">
    <h1>Hello</h1>
    <AddTodo @add-todo="addTodo"/>
    <hr />
    <TodoList v-bind:todos="todos" v-on:remove-todo="removeTodo" />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";
export default {
  name: "App",
  data() {
    return {
      todos: [],
    };
  },
  components: {
    TodoList,
    AddTodo,
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(response => response.json())
      .then(json => this.todos = json)
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((i) => i.id !== id);
    },
    addTodo(todo) {
      // this.todos.push(todo)
      this.todos = [...this.todos, todo]
    }
  },
};
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
