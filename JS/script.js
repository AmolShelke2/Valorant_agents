const menu = document.getElementById("menu");
const menuItem = document.querySelector(".menu-list");

menu.addEventListener("click", function () {
  console.log("menu clicked");
  menuItem.classList.toggle("active");
});
