<template>
  <li>
    <span v-bind:class="{ done: localTodo.completed }">
      <input type="checkbox" :checked="localTodo.completed" v-on:change="updateCompleted" />
      <strong>{{ index + 1 }}</strong>
      {{ localTodo.title }}
    </span>
    <button class="rm" v-on:click="$emit('remove-todo', localTodo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  data() {
    return {
      localTodo: { ...this.todo }, // Создаем копию пропса todo во внутреннем состоянии
    };
  },
  methods: {
    updateCompleted() {
      this.localTodo.completed = !this.localTodo.completed;
      // Вызываем событие, чтобы обновить значение в родительском компоненте
      this.$emit('update-todo', this.localTodo);
    },
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
  border-radius: 5px;
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
  border: none;
  cursor: pointer;
}
.rm:hover {
  background-color: rgb(192, 8, 8);
}
input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>

