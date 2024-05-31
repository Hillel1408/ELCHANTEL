const openMenu = document.querySelector(".open-menu");
const menu = document.querySelector(".header__menu");
openMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const openEntry = document.querySelector(".open-entry");
const entry = document.querySelector(".header__entry");
openEntry.addEventListener("click", () => {
  entry.classList.toggle("active");
});

const openRegistration = document.querySelector(".open-registration");
const registration = document.querySelector(".header__registration");
openRegistration.addEventListener("click", () => {
  entry.classList.toggle("active");
  registration.classList.toggle("active");
});

const registrationBtn = document.querySelector(".registration-btn");
registrationBtn.addEventListener("click", () => {
  registration.classList.toggle("active");
});
