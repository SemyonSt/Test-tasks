<template>
    <div class="random-lunch">
      <p>Случайное число: {{ `${randomNumber} v` }}</p>
    </div>
    
  </template>
  
  <script>
  export default {
    props: {
      randomNumber: {
        type: Number,
        required: true,
      },
    },
    mounted() {
    console.log('Props randomNumber:', this.randomNumber);
    console.log('Props:', this);
  },
  };
  </script>