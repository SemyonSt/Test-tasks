<template>
  <div class="about">
    <h1>Все доступные места</h1>
    <hr>
    <router-link to="/">Назад</router-link>

    <CaffeList v-bind:cafes="allCafes" @open-modal="openModal"/>
    <ModalComponent v-if="showModal" v-bind:cafeData="cafeData"  @close="showModal = false" />
  </div>
</template>


<script>
import CaffeList from '@/components/CaffeList.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import {mapGetters} from 'vuex'

export default {
  name: "App",
  data() {
    return {

      showModal: false,
      cafeData: []
    };
  },
  computed: mapGetters(['allCafes']),
  emits: ['close'],
  components: {
    CaffeList,
    ModalComponent,
  },
  mounted() {
      this.$store.dispatch('fetchCafes')
    },
  methods: {
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
