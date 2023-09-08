<template>
  <div>
    <h1>Куда сходить поесть?</h1>
    <hr />
    <div>
      <button class="btn" @click="goToAbout">Посмотреть все варианты</button>
    </div>
    <div>
      <button class="btn" @click="generateRandomCafe">
        {{ showRandomLunch ? "Выбрать еще раз" : "Выбрать наугад" }}
      </button>
    </div>

    <RandomLunch
      v-if="showRandomLunch"
      v-bind:cafeData="cafeData"
      @open-modal="openModal"
    />
    <ModalComponent
      v-if="showModal"
      v-bind:cafeData="cafeData[0]"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import RandomLunch from "@/components/RandomLunch.vue";
import { mapGetters } from "vuex";

import ModalComponent from "@/components/ModalComponent.vue";

export default {
  name: "App",
  data() {
    return {
      showModal: false,
      cafeData: [],
      showRandomLunch: false,
    };
  },
  emits: ["close"],
  computed: mapGetters(["allCafes"]),

  components: {
    RandomLunch,
    // CaffeList,
    ModalComponent,
  },
  methods: {
    openModal(data) {
      this.showModal = true;
      this.cafeData = data;
    },
    goToAbout() {
      this.$router.push("/about");
    },
    generateRandomCafe() {
      const randomNumber = Math.floor(Math.random() * 23 + 1);

      const selectedCafe = this.allCafes.filter(
        (cafe) => cafe.id === randomNumber
      );
      console.log('lalal', selectedCafe)

      this.cafeData = selectedCafe;
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
  margin: 10px;
  outline: none;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 46px;
  line-height: 10px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #444;
  background-color: #fff;
  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 20%);
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
  box-shadow: 0 7px 14px rgb(65 132 144 / 20%), 0 3px 6px rgb(0 0 0 / 50%);
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
