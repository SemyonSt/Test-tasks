<template>
  <li>
    <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" :checked="todo.completed ? true : false"  v-on:change="todo.completed = !todo.completed"/>
      <strong>{{ index + 1 }}</strong>
      {{ todo.title }}

    </span>
    <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  word-break: break-word;
}
.rm {
  width: 1.5rem;
  height: 1.5rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: red;
  color: white;
  
  border-radius: 50%;
}
input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>

