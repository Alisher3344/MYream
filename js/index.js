
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggleIconId');
    const navMenuId = document.getElementById('nav-menuId');

    menuToggle.addEventListener('click', () => {
        navMenuId.classList.toggle('active');
    });
});
  AOS.init();