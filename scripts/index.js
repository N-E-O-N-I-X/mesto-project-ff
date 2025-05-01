const cardTemplate = document.querySelector('#card-template').content; //template переменная
const cardContainer = document.querySelector('.places__list'); //переменная контейнера для карточек

function createCard(card, deleteCard) { //функция создния карточки
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true); //клон карточки
  const deleteButton = cardElement.querySelector('.card__delete-button'); //кнопка удаления

  cardElement.querySelector('.card__image').src = card.link; //ссылка на картинку
  cardElement.querySelector('.card__image').alt = card.name; //описание к картинке
  cardElement.querySelector(".card__title").textContent = card.name; //название

  deleteButton.addEventListener('click', () => { //добавление функции к кнопке удаления
    deleteCard(cardElement);
  })

  return cardElement;
};

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
