import "../dist/css/styles.scss";
import helper from "./modules/helpers";
import loadHome from "./modules/load_home";

const setNav = () => {
    const nav = document.querySelector(".nav");
    const menuItems = Array.from(nav.querySelectorAll(".item"));

    menuItems.forEach((navItem) => {
        navItem.addEventListener('click', () => {
            helper.switchPage(navItem.dataset.action);
        });
    })
}

setNav();
loadHome();
