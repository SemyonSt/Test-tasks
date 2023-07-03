import { man, woman, children } from "./data.js";

const cardsContainer1 = document.getElementById('category1');
const cardsContainer2 = document.getElementById('category2');
const cardsContainer3 = document.getElementById('category3');


// Функция отображения даты

const getDayInfo = (date) => {
  const dateFormat = (date) => {
    const split = date.split('.');
    let [month, day, year] = split;

    return [day, month, year].join('.');
  };

  const getDayName = (number) => {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[number.getDay()];
  };

  const getWeekNum = (date) => {
    const currentDate = date.getDate();
    const weekOfMonth = Math.ceil(((currentDate) / 7));
    return weekOfMonth;
  };

  const getMonthName = (number) => {
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
      'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return months[number.getMonth()];
  };

  const getYearNum = (number) => number.getFullYear();

  const formatDate = dateFormat(date);
  const newDate = new Date(formatDate);
  const day = getDayName(newDate);
  const week = getWeekNum(newDate);
  const month = getMonthName(newDate);
  const year = getYearNum(newDate);

  return `${day}, ${week} неделя ${month} ${year} года`;
};

// Добавление карточек (3 категории)

man.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <section class="w-500 border">
    <img src=${product.img} alt="Товар 1">
  </section>
  <h3>${product.name}</h3>
  <p class="description">${product.description}</p>
  <p class="date"> Добавлено: ${getDayInfo(product.date)}</p>
  <button class="buy-btn">Купить</button>
  `;
  cardsContainer1.append(card)
});

woman.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <section class="w-500 border">
    <img src=${product.img} alt="Товар 1">
  </section>
  <h3>${product.name}</h3>
  <p class="description">${product.description}</p>
  <p class="date">${getDayInfo(product.date)}</p>
  <button class="buy-btn">Купить</button>
  `;
  cardsContainer2.append(card)
});

children.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <section class="w-500 border">
    <img src=${product.img} alt="Товар 1">
  </section>
  <h3>${product.name}</h3>
  <p class="description">${product.description}</p>
  <p class="date">${getDayInfo(product.date)}</p>
  <button class="buy-btn">Купить</button>
  `;
  cardsContainer3.append(card)
});


// События нажатия на карточку и форму

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('form');
const buyBtns = document.querySelectorAll('.buy-btn');

buyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    overlay.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Обработка отправки формы
  overlay.style.display = 'none';
  alert('Заказ сделан!')
});


// Переключение темы Светлая/темная
const body = document.body;

const switch1 = document.getElementById('theme-toggle');

switch1.addEventListener('click', (check) => {
  body.classList.toggle('dark');
});


// Кнопка скролла (возврата) на верх
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 150) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Скролл до нужной категории
const categoriesList = document.getElementById('categories-list');
const categories = categoriesList.querySelectorAll('a[href^="#"]');

categories.forEach(category => {
  category.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const targetId = category.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});