document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navibar = document.querySelector('.navibar');

    menuIcon.addEventListener('click', function() {
        navibar.classList.toggle('active');
        // Toggle the icon between 'bx-menu' and 'bx-x'
        menuIcon.classList.toggle('bx-x');
    });
});