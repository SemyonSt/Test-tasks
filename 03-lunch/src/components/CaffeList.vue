<template>
  <ul>
    <CaffeItem 
    v-for="cafe of cafes" 
    v-bind:key="cafe.id" 
    v-bind:cafe="cafe"
    v-on:open-modal="openModal"
    />

  </ul>
</template>


<script>
import CaffeItem from "./CaffeItem.vue";
export default {
  components: {
    CaffeItem,
  },
  props: ["cafes"],
  methods: {
    openModal(data) {
      this.$emit('open-modal', data)
      // console.log('hiiii', a)
    }
    
  }
};
</script>

<style scoped>
ul {
  padding-left: 0px;
}
</style>