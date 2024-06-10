const openMenu = document.querySelector(".open-menu");
const menu = document.querySelector(".header__menu");
const closeMenu = document.querySelector(".close-menu");

const func = () => {
  if (
    menu.classList.contains("active") ||
    entry.classList.contains("active") ||
    registration.classList.contains("active") ||
    cart.classList.contains("active")
  ) {
    header.classList.add("active");
  } else header.classList.remove("active");
};

openMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.body.classList.toggle("lock");
  func();
});
closeMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  document.body.classList.toggle("lock");
  func();
});

const openEntry = document.querySelector(".open-entry");
const entry = document.querySelector(".header__entry");

openEntry.addEventListener("click", () => {
  if (registration.classList.contains("active")) {
    registration.classList.remove("active");
  } else entry.classList.toggle("active");
  document.body.classList.toggle("lock");
  func();
});

const openRegistration = document.querySelector(".open-registration");
const registration = document.querySelector(".header__registration");

openRegistration.addEventListener("click", () => {
  entry.classList.toggle("active");
  registration.classList.toggle("active");
  func();
});

const registrationBtn = document.querySelector(".registration-btn");

registrationBtn.addEventListener("click", () => {
  registration.classList.toggle("active");
  document.body.classList.toggle("lock");
  func();
});

const openCart = document.querySelector(".open-cart");
const cart = document.querySelector(".header__cart");

openCart.addEventListener("click", () => {
  cart.classList.toggle("active");
  document.body.classList.toggle("lock");
  func();
});

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (scrollPosition() === 0) {
    header.style.background = "#ccbeb1";
  }
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.style.background = "#fbfaf7";
    header.classList.remove("hide");
  }

  lastScroll = scrollPosition();
});

const headerMenu = document.querySelectorAll(
  ".header__menu > ul:first-child > li"
);
headerMenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    item.classList.toggle("active");
  });
});
