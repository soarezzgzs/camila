const menuIcon = document.getElementById('mobile-menu-icon');
const menuList = document.getElementById('mobile-menu');

// Verifica se os elementos existem antes de adicionar o evento
if (menuIcon && menuList) {
    menuIcon.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });
}
