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
