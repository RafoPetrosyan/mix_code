const mobileMenu = document.getElementsByClassName('respons-menu');
const tabletMenu = document.getElementsByClassName('tablet-menu');

const showMenu = () =>{
    tabletMenu.classList.toggle('show');
}

mobileMenu.addEventListener('click', showMenu);