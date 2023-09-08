<template>
  <span>
    <li>
      <p>{{ cafe.name }}</p>
      <button class="btn" @click="openModal">Подробнее</button>
    </li>
  </span>
</template>

<script>
export default {
  props: {
    cafe: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openModal() {
      this.$emit("open-modal", this.cafe); // Передаем объект cafe в событии
    },
  },
};
</script>



<style scoped>
span {
  display: flex;
  justify-content: center;
}
ul {
  padding-left: 0;
}
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  word-break: break-word;
  border-radius: 5px;
  width: 50rem;
}
p {
  text-align: left;
  max-width: 200px;
}

@media screen and (max-width: 450px) {
  li {
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  p {
    text-align: center;
    max-width: 200px;
  }
}
</style>