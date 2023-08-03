/* eslint-disable */
<template>
    <div>
        <h2> Home page</h2>
        <p>Это мой первы проект созданны при помощий vue.js.Создан по примеру видео <a href="https://youtu.be/OlnwgS-gk8Y">Vue JS - Быстрый курс за 50 минут</a> </p>
        <router-link to="/todos"><button class="button" style="vertical-align:middle"><span>Начнем?</span></button></router-link>

    </div>
</template>

<style scoped>

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #4CAF50;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

</style>