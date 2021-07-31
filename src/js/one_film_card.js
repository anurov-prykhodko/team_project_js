'use strict';

import filmTpl from '../templates/one_film_card.hbs';
import { fetchMovieById } from './api_service';
import refs from './refs';

//1. По умолчанию на <div class="backdrop-movie-card> висит класс visually-hidden
//2. При клике на <list class="movie-gallery-list"> класс visually-hidden убирается
//3. Отрисовывается модалка
//4. По нажатию на Esc и клику на крестик добавляется класс visually-hidden и модалка скрывается

refs.cardContainer.addEventListener('click', onMovieCardClick); //тут слушатель на галерее.
//нам нужно отлавливать event.target, брать у него id (берём id дата атрубута тега, на который кликнул пользователь)и прокидывть его в fetchMovieById

/*Создаёт разметку карточки по шаблону*/
function renderModalMovieCard(data) {
  const card = filmTpl(data);
  refs.modalMovieCardContainer.insertAdjacentHTML('beforeend', card);
}
//fetchMovieById(filmId).then(renderModalMovieCard).catch(noResults);

function clearModalMovieCard() {
  refs.modalMovieCardContainer.innerHTML = '';
}

/* Снимаем visually-hidden с модалки при клике на карточку фильма в галерее */
function onMovieCardClick(event) {
  event.preventDefault();

  const id = event.target.getAttribute('data-item');
  addEventListenerOnEscKey();
  addEventListenerOnModalBackdrop();

  fetchMovieById(id).then(renderModalMovieCard);

  refs.movieCardBackdrop.classList.remove('visually-hidden');
}

/* Закрываем модалку при клике на бэкдроп или кнопку закрытия */
function onMovieCardBackdropClick(event) {
  const closeTags = ['DIV', 'svg', 'use'];
  // console.log(event.target.hasAttribute('close-tag'));

  // if (!closeTags.includes(event.target.nodeName)) {
  //   return;
  // }

  if (!event.target.hasAttribute('close-tag')) {
    return;
  }

  // console.log(event.target);

  removeEventListenerFromBackdrop();
  removeEventListenerFromEscKey();

  refs.movieCardBackdrop.classList.add('visually-hidden');

  clearModalMovieCard();
}

/* Закрываем модалку при нажатии клавиши Esc на клавиатуре */
function onEscPress(event) {
  if (event.keyCode !== 27) {
    return;
  }

  removeEventListenerFromBackdrop();
  removeEventListenerFromEscKey();
  refs.movieCardBackdrop.classList.add('visually-hidden');
  clearModalMovieCard();
}

/* Функции повесить/снять слушатели событий при открытии/закрытии модалки */

function addEventListenerOnModalBackdrop() {
  refs.movieCardBackdrop.addEventListener('click', onMovieCardBackdropClick);
}

function removeEventListenerFromBackdrop() {
  refs.movieCardBackdrop.removeEventListener('click', onMovieCardBackdropClick);
}

function addEventListenerOnEscKey() {
  window.addEventListener('keydown', onEscPress);
}

function removeEventListenerFromEscKey() {
  window.removeEventListener('keydown', onEscPress);
}
