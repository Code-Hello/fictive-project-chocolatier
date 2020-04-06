/* Navbar */
/*Menu toggle*/
const navHeader = document.body.querySelector('#navbar_header');
const burgerMenu = document.body.querySelector('#menu-burger');

function dropdownMenu() {
    navHeader.classList.toggle('deployed');
};

burgerMenu.addEventListener("click", dropdownMenu);

/*Menu burger*/
const burgerCross = document.querySelector('.menu-toggle');

burgerCross.addEventListener('click', () => {
    burgerCross.classList.toggle('burgerStyle');
})

/* Carousel */

/* Modal */