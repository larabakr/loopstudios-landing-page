const navbar = document.querySelector('.mobile-navigation');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

hamburgerIcon.addEventListener('click', () => {
    navbar.style.width = '100%';
});

closeIcon.addEventListener('click', () => {
    navbar.style.width = '0';
});