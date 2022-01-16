"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector("header");
const message = document.createElement("div");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const navLinks = document.querySelector(".nav__links");
const nav = document.querySelector(".nav");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((modal) => modal.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//*cookies

message.classList.add("cookie-message");
message.innerHTML = `We use cookie for statistics purpose <button class = "btn btn--close-cookie">Got it!</button>`;
header.append(message);
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", () => message.remove());

//main smooth scroll
btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({ behavior: "smooth" });
});

//*Page navigation
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    e.target.classList.contains("nav__link") &&
    !e.target.classList.contains("btn--show-modal")
  ) {
    const id = document.querySelector(`${e.target.getAttribute("href")}`);
    id.scrollIntoView({ behavior: "smooth" });
  }
});

//*tabbed component
tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".operations__tab");

  //guard clause
  if (!clicked) return;

  //activate tab
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  //activate content area
  document;
  tabsContent.forEach((tab) =>
    tab.classList.remove("operations__content--active")
  );

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

//*menu fade animation
const handerHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};
//passing this as an argument from event listener
nav.addEventListener("mouseover", handerHover.bind(0.5));
nav.addEventListener("mouseout", handerHover.bind(1));

//*sticky nav
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //90px outside *px only
});
headerObserver.observe(header);

//*reveal sections
const allSections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");  //temporar closed
});

//*lazy loading images
const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};
const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imageObserver.observe(img));

//*slider
const slider = function () {
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const slides = document.querySelectorAll(".slide");

  let curSlide = 0;
  const maxSlide = slides.length - 1;
  const dotContainer = document.querySelector(".dots");

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class = "dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translate(${100 * (i - slide)}%)`;
    });
  };

  //nextSlide
  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();

  //events
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      // const { slide } = e.target.dataset;
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//lecture
//
//
//

// const h1 = document.querySelector("h1");
// //for finding closest ancestor *indirect parent
// const parentOrNull = h1.closest("h1");
// parentOrNull.style.background = "var(--gradient-secondary)";
// // console.log(parentOrNull);

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
