const menu = document.querySelector('.menu');
const navlist = document.querySelector('.nav-list');
const nav = document.querySelector('.nav-list li');
const navbar = document.querySelector('.navbar-container');

menu.addEventListener('click', function () {
    navlist.classList.toggle('active');
});
menu.addEventListener('click', function() {
    navbar.classList.toggle('active');
});
nav.addEventListener('click', function() {
    navlist.classList.toggle('active');
});
