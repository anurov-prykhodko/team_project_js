import watchAndQueueTpl from './watched_and_queue_tpl';
import refs from './refs';
import {fetchMovieById} from './api_service';
import { realLaunch } from '../index.js';

refs.buttons.addEventListener('click', onMyLibBtnsClick);
refs.myLibBtn.addEventListener('click', onMyLibClick);
refs.homeBtn.addEventListener('click', onHomeBtnClick);



function onHomeBtnClick() {
  refs.cardContainer.innerHTML = '';

  correctionStyles();
  realLaunch(1);
}

function onMyLibClick() {
  refs.cardContainer.innerHTML = '';
  setTimeout(() => refs.pagination.classList.add('visually-hidden'), 200);

  let ids = getItemsFromStorage('watched');

  if (!ids) {
    renderNotificationLibIsEmpty();
    return;
  }

  fetchMoviesOnMyLibBtnsClick(ids);
}

function onMyLibBtnsClick(event) {
  let ids = getItemsFromStorage(event.target.textContent)

  if (!ids) {
    renderNotificationLibIsEmpty();
    return;
  }

  fetchMoviesOnMyLibBtnsClick(ids);
}

function fetchMoviesOnMyLibBtnsClick(idsForFetch) {
  refs.cardContainer.innerHTML = '';

  const allPromises = idsForFetch.map(id => fetchMovieById(id));

  Promise.all(allPromises)
    .then(response => response.map(result => renderCardsFromStorage(result)));
}
  
function getItemsFromStorage(key) {
  const idFromStorage = localStorage.getItem(key);
  if (!idFromStorage) {
    return;
  }
  return idFromStorage.split(',');
}

function renderCardsFromStorage(info) {
  return refs.cardContainer.insertAdjacentHTML('beforeend', watchAndQueueTpl(info));
}

function correctionStyles() {
  refs.searchInput.classList.toggle('visually-hidden');
  refs.btnList.classList.toggle('visually-hidden');
  refs.libButton.classList.remove('current');
  refs.homeButton.classList.add('current');
  refs.headerDom.classList.remove('lib-header');

  refs.watchedButton.classList.add('active');
  refs.queueButton.classList.remove('active');
  setTimeout(() => refs.pagination.classList.remove('visually-hidden'), 200);
}

function renderNotificationLibIsEmpty() {
  refs.cardContainer.innerHTML = '';
  refs.addError.classList.add('visually-hidden');
  // refs.notification.removeEventListener();
  refs.cardContainer.insertAdjacentHTML('beforeend',`
    <div class="library-is-empty">
      <strong>this list is empty...</strong>
    </div>
`);
}