<template>
  <div>
    <h1>Куда сходить поесть?</h1>
    <hr />
    <div>
      <button class="btn" @click="goToAbout">Посмотреть все варианты</button>
    </div>
    <div>
      <button class="btn" @click="generateRandomNumber" >Выбрать наугад</button>
    </div>

    <RandomLunch v-if="showRandomLunch" :randomNumber="randomNumber" />
    <!-- <ModalComponent v-if="showModal" v-bind:cafeData="cafeData"  @close="showModal = false" /> -->
  </div>
</template>

<script>
import RandomLunch from "@/components/RandomLunch.vue";
// import CaffeList from '@/components/CaffeList.vue';

// import ModalComponent from '@/components/ModalComponent.vue';

export default {
  name: "App",
  data() {
    return {
      cafes: [],
      showModal: false,
      cafeData: [],
      showRandomLunch: false,
      randomNumber: null,
    };
  },
  emits: ['close'],
  components: {
    RandomLunch,
    // CaffeList,
    // ModalComponent,
  },
  methods: {
    onClick() {
      console.log('Hello')
      fetch("https://bandaumnikov.ru/api/test/site/get-index")
      .then((response) => response.json())
      .then((json) => {
        console.log('JSIN', json.data)
        this.cafes = json.data;

      });
    },
    openModal(data) {
      this.showModal = true;
      this.cafeData = data;
      console.log(this.cafeData)
    },
    goToAbout() {
      this.$router.push('/about');
    },
    generateRandomNumber() {
      console.log('LALALLA',  this.randomNumber)
      this.randomNumber = Math.floor(Math.random() * 100); // Генерируйте рандомное число
      this.showRandomLunch = true;
    },
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

.btn {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 25px;
  margin: 0 15px 15px 0;
  outline: none;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 46px;
  line-height: 46px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #444;
  background-color: #fff;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
  vertical-align: top;
  transition: box-shadow 0.2s;
}
.btn:focus-visible {
  border: 1px solid #4c51f9;
  outline: none;
}
.btn:hover {
  transition: all 0.2s;
  box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
}
.btn:active {
  background-color: #808080;
}
.btn:disabled {
  background-color: #eee;
  border-color: #eee;
  color: #444;
  cursor: not-allowed;
}
</style>
