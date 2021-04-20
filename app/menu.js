const MENU_BTN = document.querySelector('.menu-btn');
const MOBILE_NAV = document.querySelector('.mobile-nav');
const SUB_MENU_BTN = document.querySelectorAll('.mobile-sub-menu__btn');
const SUB_MENU = document.querySelectorAll('.mobile-nav__sub-items');
const PROD_MENU = document.querySelector('.prod-menu');
const COMP_MENU = document.querySelector('.comp-menu');
const CON_MENU = document.querySelector('.connect-menu');
const SUB_MENU_BTN_ARR = Array.from(SUB_MENU_BTN);
console.log(SUB_MENU_BTN_ARR[0]);
console.log(SUB_MENU);
console.log(SUB_MENU_BTN);


const showMenu = () => {
    MOBILE_NAV.classList.toggle('menu-active');

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


