const sidebar = document.querySelector(".nav-bar-flax4");
const sidebarToggle = document.querySelector(".hamburger");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

if (innerWidth <= 1000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}
// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.getElementById('menu-toggleIconId');
//     const navMenuId = document.getElementById('nav-menuId');

//     menuToggle.addEventListener('click', () => {
//         navMenuId.classList.toggle('active');
//     });
// });