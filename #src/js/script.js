const openMenu = document.querySelector(".open-menu");
const menu = document.querySelector(".header__menu");
openMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
