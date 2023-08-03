<template>
  <div id="app">
    <h2>Hello</h2>
    <router-link to="/">Home</router-link>
    <hr />
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <LoaderComponent v-if="loading" />

    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      v-on:remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>
  
<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";
export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all',
    };
  },
  components: {
    TodoList,
    AddTodo,
    LoaderComponent,
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=6")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  computed: {
    filteredTodos() {
      // if(this.filter === 'all') {
      //   return this.todos
      // }
      if(this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }
      if(this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
      return this.todos
      

    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((i) => i.id !== id);
    },
    addTodo(todo) {
      // this.todos.push(todo)
      this.todos = [...this.todos, todo];
    },
  },
};
</script>

