const btnMenu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-content");

btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("hidden-menu");
});
