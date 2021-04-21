/*
    Nazwy stałych ze wskazaniem co przechowują
    W tym przypadku klasy. Zauwaz ze jak bedziesz chcial zmienic jakas to robisz te zmiane w jednym miejscu.
 */
const MENU_BTN_CLASS = '.menu-btn';
const MOBILE_NAV_CLASS = '.mobile-nav';
const SUB_MENU_BTN_CLASS = '.mobile-sub-menu__btn';
const SUB_MENU_ITEMS_CLASS = '.mobile-nav__sub-items'
const PROD_MENU_CLASS = '.prod-menu'
const COMP_MENU_CLASS = '.comp-menu';
const CON_MENU_CLASS = '.connect-menu';
const MENU_ACTIVE_TOKEN = 'menu-active';
const CLICK_EVENT = 'click';

const PROD_BUTTON_TOKEN = 'prod-btn';
const COMP_BUTTON_TOKEN = 'comp-btn';
const CONNECT_BUTTON_TOKEN = 'conn-btn';

/*
    nazwy zmiennych do camelCase
 */
const menuButton = document.querySelector(MENU_BTN_CLASS);
const mobileNav = document.querySelector(MOBILE_NAV_CLASS);
const subMenuButton = document.querySelectorAll(SUB_MENU_BTN_CLASS);
const subMenu = document.querySelectorAll(SUB_MENU_ITEMS_CLASS);
const prodMenu = document.querySelector(PROD_MENU_CLASS);
const compMenu = document.querySelector(COMP_MENU_CLASS);
const connectMenu = document.querySelector(CON_MENU_CLASS);
const subMenuButtons = Array.from(subMenuButton);

console.log(subMenuButtons[0]);
console.log(subMenu);
console.log(subMenuButton);

const showMenu = () => {
    mobileNav.classList.toggle(MENU_ACTIVE_TOKEN);
}

const clicked = () => {
    console.log('clicked');
}

const clickHandler = (event) => {
    /*
        Callback to obiekt, ktory moze miec pod kluczem dowolny typ, w tym funkcje. Mozesz myslec o nim jak o tablicy
        z dowolnymi indexami.
     */
    const callback = {
        [PROD_BUTTON_TOKEN]: () => prodMenu.classList.toggle(MENU_ACTIVE_TOKEN),
        [COMP_BUTTON_TOKEN]: () => compMenu.classList.toggle(MENU_ACTIVE_TOKEN),
        [CONNECT_BUTTON_TOKEN]: () => connectMenu.classList.toggle(MENU_ACTIVE_TOKEN)
    };

    /*
        to co robie w forEachu to funkcja anonimowa, ktora zwraca typeof callback[className] === 'function' && callback[className]()
        Ten syntax w returnie oznacza, ze tylko jeśli typeof callback[className] === 'function' to callback[className]()
        return a && b; // zwróci b tylko jeśli a == true
        Podobnie, ale z tą różnicą return a || b; zwroci b tylko jesli a == false
        poczytaj tez sb o roznicy miedzy ==, a === oraz false, falsy, true, truthy chyba ze znasz to jebac.
        callback[className] gdy className to 'prod-btn' to zwróci metodę, którą odpalasz callback[className]()
        gdy callback[className] to cos innego niz 'prod-btn', 'conn-btn' lub 'comp-btn' to zwróci undefined a wiec callback[className]() sie nie wykona
     */
    event.target.classList.forEach((className) => typeof callback[className] === 'function' && callback[className]());
}

subMenuButton.forEach(item => item.addEventListener(CLICK_EVENT, clickHandler));
menuButton.addEventListener(CLICK_EVENT, showMenu);


