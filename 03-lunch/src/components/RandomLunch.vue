<template>
  <div class="random-lunch">
    <p>Выбранное кафе: {{ cafeData[0].name }}</p>
    <button class="btn" @click="openModal">Подробнее</button>
    <button class="btn" @click="shareCafe">Поделиться</button>
  </div>
</template>
  
  <script>
export default {
  props: {
    cafeData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openModal() {
      this.$emit("open-modal", this.cafeData); // Передаем объект cafe в событии
    },
    shareCafe() {
      const cafeName = this.cafeData[0].name || "Кафе";
      const cafeAddress = this.cafeData[0].address || "Адрес неизвестен";

      const message = `Я выбрал(а) кафе "${cafeName}"! Адрес: ${cafeAddress}.`;

      const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappURL, "_blank");
    },
  },
};
</script>

