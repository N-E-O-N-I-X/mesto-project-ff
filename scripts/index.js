// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// клонируем содержимое тега template
const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

// наполняем содержимым
cardElement.querySelector('.user__avatar').src = 'tinyurl.com/v4pfzwy';

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
