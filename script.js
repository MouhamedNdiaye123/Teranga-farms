const menu = document.getElementById('menuIcon');
const navbar = document.getElementById('navbar');

menu.addEventListener('click', ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})