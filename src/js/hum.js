let menu = document.querySelectorAll('.nav_menu'),
    burger = document.querySelector('.ham_menu'),
    body = document.querySelector('body');

burger.addEventListener('click', AddActive);

function AddActive () {
    burger.classList.toggle('active');
    menu.forEach(elem => {elem.classList.toggle('active');})
    body.classList.toggle('active');
}

let navLink = document.querySelectorAll('.nav_item');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu () {
    burger.classList.remove('active');
    menu.forEach(elem => {elem.classList.remove('active');})
    body.classList.toggle('active');

}

