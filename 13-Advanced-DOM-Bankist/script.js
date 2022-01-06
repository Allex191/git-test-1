'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(modal => modal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//cookies
const header = document.querySelector('header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookie for statistics purpose <button class = "btn btn--close-cookie">Got it!</button>`;
header.append(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());

//main smooth scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page navigation
const nav = document.querySelector('.nav');
nav.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    e.target.classList.contains('nav__link') &&
    !e.target.classList.contains('btn--show-modal')
  ) {
    const id = document.querySelector(`${e.target.getAttribute('href')}`);
    id.scrollIntoView({ behavior: 'smooth' });
  }
});


//lecture
//
//
//



// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = document.querySelector(`${this.getAttribute('href')}`);
//     id.scrollIntoView({ behavior: 'smooth' });
//   });
// });

//1. Add event listener to common parent element
//2. Determine what element originated the event
// const body = document.querySelector('body');
// body.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (
//     e.target.classList.contains('nav__link') &&
//     !e.target.classList.contains('btn--show-modal')
//   ) {
//     console.log(e.target.classList.contains('btn--show-modal'));
//     const id = document.querySelector(`${e.target.getAttribute('href')}`);
//     id.scrollIntoView({ behavior: 'smooth' });
//   }
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   //matching strategy
//   if (e.target.classList.contains('nav__link')) {
//     e.preventDefault();
//     const id = e.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });
// const h1 = document.querySelector('h1');
// const alertH1 = function () {
//   alert('hey');
// };

// h1.addEventListener('mouseenter', alertH1);
// h1.addEventListener('click', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
//   0,
//   255
// )})`;

// const nav = document.querySelector('.nav');
// const navLinks = document.querySelector('.nav__links');
// const firstNavItem = document.querySelector('.nav__link');

// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = 'red';
//   console.log('nav', e.target, e.currentTarget);
// },true);
// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = 'blue';
//   console.log('navLinks', e.target, e.currentTarget);
// },true);
// firstNavItem.addEventListener('click', function (e) {
//   this.style.backgroundColor = 'yellow';
//   console.log('firstNavItem', e.target, e.currentTarget);
// });

// firstNavItem.setAttribute('href', '#');

// //styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// console.log(getComputedStyle(message).width);

// message.style.height =
//   Number.parseInt(getComputedStyle(message).height, 10) + 30 + 'px';
// document.documentElement.style.setProperty('--color-primary', 'orangered');
// message.style.setProperty('background-color', 'gray');

// const logo = document.querySelector('.nav__logo');
// logo.alt = 'beautiful logo';
// logo.setAttribute('newattribute', 'wtf');

// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// console.log(logo.className);
// //non standart
// console.log(logo.getAttribute('newattribute'));

// // for data attributes
// logo.dataset.versionNumber;

// logo.classList.add('class1', 'class2');
// logo.classList.remove('class1', 'class2');
// logo.classList.toggle('class1', 'class2');
// logo.classList.contains('class1', 'class2');

// //dont use its changing whole class list
// logo.className
