<template>
  <div class="modal" tabindex="-1" @click.self="close" @keydown.esc="close">
    <div class="modal-content">
      <div class="modal-text">Кафе: {{ cafeData.name ? cafeData.name : 'Нет данных :(' }}.</div>
      <div class="modal-text">Адрес: {{ cafeData.address ? cafeData.address : 'Нет данных :(' }}.</div>
      <div class="modal-text">Ориентир: {{ cafeData.landmark ? cafeData.landmark : 'Нет данных :(' }}.</div>
      <div class="modal-text">Кухня: {{ cafeData.cuisine ? cafeData.cuisine : 'Нет данных :(' }}.</div>
      <div class="modal-text">Расстояние: {{ cafeData.distance ? `${cafeData.distance} м.` : 'Нет данных :(' }}.</div>
      <div class="modal-text">Сколько идти: {{ cafeData.time ? `${cafeData.time} минут.` : 'Нет данных :(' }} </div>
      <div class="modal-text">Бизнесс ланч: {{ cafeData.business_lunch ? "Есть" : "Нет" }}.</div>
      <div class="modal-text">Средний чек: {{ cafeData.price ? cafeData.price : 'Нет данных :(' }}.</div>
      <div v-if="cafeData.photo.length"  class="image-container">
        <img  :src="cafeData.photo" alt="Изображение кафе" class="cafe-image">
      </div>
      <div class="modal-buttons">
        <button class="close-button" @click="close">Закрыть</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {

  props: {
    cafeData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  mounted() {
    this.$el.focus();
  },
  emits: ["close"],
};
</script>
  
  <style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

.modal-text {
  text-align: left;
  margin-bottom: 10px;
}

.modal-buttons {
  display: flex;
  justify-content: center;
}

.close-button {
  text-align: center;
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-button:hover {
  background-color: #999;
}

.image-container {
  text-align: center; /* Центрирование изображения */
  margin-top: 10px;
}

.cafe-image {
  max-width: 70vw; /* Максимальная ширина изображения - 90% от ширины экрана */
  max-height: 40vh; /* Максимальная высота изображения - 70% от высоты экрана */
  width: auto;
  height: auto;
}
</style>
  