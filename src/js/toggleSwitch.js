// Переключатель темы

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const toggleSwitch = document.querySelector('.theme-switch__toggle');
const themeClassContainer = document.body;

themeClassContainer.classList.add(
  localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),
);
if (localStorage.getItem('theme') === Theme.DARK) {
  toggleSwitch.checked = true;
}

function switchTheme(e) {
  if (e.target.checked) {
    themeClassContainer.classList.add(Theme.DARK);
    themeClassContainer.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    themeClassContainer.classList.add(Theme.LIGHT);
    themeClassContainer.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Надоедалка

import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');
const modalJoke = new BSN.Modal('#joke-modal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Максимальное кол-во надоеданий или подписался');
    return;
  }

  setTimeout(() => {
    // console.log('Открываем надоедалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  //   modal.hide();
  modalJoke.show();
}