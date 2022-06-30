const menu = document.querySelector(".menu");
const ul = document.querySelector(".menu-list");

menu.addEventListener("click", function () {
  ul.classList.toggle("active");
});
