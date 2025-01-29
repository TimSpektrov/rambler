
const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
const body = document.body
const toggleMenu = (e) => {
    const target = e.target;
    const itsBurger = burger === target;
    const itsMenu = menu.contains(target) && e.target === menu ;

    if (itsBurger) {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        body.classList.toggle('lock');
    } else if ( !itsBurger && !itsMenu) {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
        body.classList.remove('lock');
        document.removeEventListener('click', toggleMenu);
    }
}

burger.addEventListener("click", () => {
    if (!burger.classList.contains('is-active')) {
        document.addEventListener('click', toggleMenu);
    }
})

