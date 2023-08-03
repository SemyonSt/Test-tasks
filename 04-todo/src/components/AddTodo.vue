<template>
  <form @submit.prevent="onSubmit">
    <div class="form-container">
      <div class="text-field__group">
        <input class="text-field__input" type="text" v-model="title" />
        <button class="text-field__btn" type="submit">Создать</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.title);
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 400px;
  font-family: "Arial", sans-serif;
  font-size: 16px; 
}

.text-field__group {
  display: flex;
  justify-content: center;
  margin: 5px;
}
/* кнопка */
.text-field__btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: #eee;
  border: 1px solid #bdbdbd;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out;
  margin-left: 5px;
}
</style>