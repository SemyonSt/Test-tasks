<template>
  <div class="about">
    <h1>Все доступные места</h1>
    <hr>
    <router-link to="/">Назад</router-link>

    <CaffeList v-bind:cafes="cafes" @open-modal="openModal"/>
    <ModalComponent v-if="showModal" v-bind:cafeData="cafeData"  @close="showModal = false" />
  </div>
</template>


<script>
import CaffeList from '@/components/CaffeList.vue';
import ModalComponent from '@/components/ModalComponent.vue';

export default {
  name: "App",
  data() {
    return {
      cafes: [],
      showModal: false,
      cafeData: []
    };
  },
  emits: ['close'],
  components: {
    CaffeList,
    ModalComponent,
  },
  mounted() {
      console.log('Hello')
      fetch("https://bandaumnikov.ru/api/test/site/get-index")
      .then((response) => response.json())
      .then((json) => {
        console.log('JSIN', json.data)
        this.cafes = json.data;
      })
      .catch(() => {
        console.log('Error')
      })
    },
  methods: {
    // onClick() {
    //   console.log('Hello')
    //   fetch("https://bandaumnikov.ru/api/test/site/get-index")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log('JSIN', json.data)
    //     this.cafes = json.data;

    //   });
    // },
    openModal(data) {
      this.showModal = true;
      this.cafeData = data;
      console.log(this.cafeData)
    },
    goToAbout() {
      this.$router.push('/about');
    }
  },
};
</script>
