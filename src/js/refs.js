'use strict';
const doc = document
const refs = {  
  libButton: doc.querySelector(
    'body > header > div.container > div > nav > ul > li:nth-child(2) > a',
  ),
  homeButton: doc.querySelector(
    'body > header > div.container > div > nav > ul > li:nth-child(1) > a',
  ),
  searchInput: doc.querySelector('#search-form'),
  input: doc.querySelector('.search-input'),
  btnList: doc.querySelector('body > header > div.container > ul'),
  watchedButton: doc.querySelector(
    'body > header > div.container > ul > li:nth-child(1) > button',
  ),
  queueButton: doc.querySelector(
    'body > header > div.container > ul > li:nth-child(2) > button',
  ),
  headerDom: doc.querySelector("body > header > div.bg-container"),
  //   footer: doc.querySelector('footer'),
  linkToOurTeam: doc.querySelector('.about-us-link'),
  backdrop: doc.querySelector('.backdrop-our-team'),
  ourTeamList: doc.querySelector('.our-team-list'),
  cardContainer: doc.querySelector('.movie-gallery-list'),

  addError: doc.querySelector('[data-action="add-error"]'),
  //movie-card-modal
  movieCardBackdrop: doc.querySelector('.backdrop-movie-card'),
  modalMovieCardContainer: doc.querySelector('.modal-movie-card-container'),
  // Надоедалка

  modal: doc.querySelector('#subscription-modal'),
  subscribeBtn: doc.querySelector('button[data-subscribe]'),
  toggleSwitch: doc.querySelector('.theme-switch__toggle'),
  scrollToTopBtn: doc.getElementById('scrollToTopBtn'),
  //pag
  element_ul: doc.getElementById('pag_list_id'),
  //Modal for one card
 modalCardForOneFilm: document.getElementById('12398'),
//myLib
  buttons: document.querySelector('.btn-lib-list'),
  myLibBtn: document.querySelector('#my-library'),
  homeBtn: document.querySelector('#home'),
  mobileWidht: 768,
  tabletWidth: 1024,
  pagination: document.querySelector('.pagination_box')
};
export default refs;
