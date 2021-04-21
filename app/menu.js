const MENU_BTN = document.querySelector('.menu-btn');
const MOBILE_NAV = document.querySelector('.mobile-nav');
const SUB_MENU_BTN = document.querySelectorAll('.mobile-sub-menu__btn');
const SUB_MENU = document.querySelectorAll('.mobile-nav__sub-items');
const PROD_MENU = document.querySelector('.prod-menu');
const COMP_MENU = document.querySelector('.comp-menu');
const CON_MENU = document.querySelector('.connect-menu');
const SUB_MENU_BTN_ARR = Array.from(SUB_MENU_BTN);
const SUB_MENU_ARR = [PROD_MENU, COMP_MENU, CON_MENU];

const showMenu = () => {
    MOBILE_NAV.classList.toggle('menu-active');
    hideMenu();
}

const hideMenu = () => {
    if (MOBILE_NAV.classList.contains('menu-active')) {
        for (let i = 0; i < SUB_MENU_ARR.length; i++) {
            SUB_MENU_ARR[i].classList.remove('menu-active');
        }
}
}



const clicked = () => {
    console.log('clicked');
}

SUB_MENU_BTN.forEach(item => {
    item.addEventListener('click', (event) => {
       if (event.target.classList.contains('prod-btn')) {
           PROD_MENU.classList.toggle('menu-active');
       } else if (event.target.classList.contains('comp-btn')) {
           COMP_MENU.classList.toggle('menu-active');
       } else {
            CON_MENU.classList.toggle('menu-active');
       }
    });
})



MENU_BTN.addEventListener('click', showMenu);
