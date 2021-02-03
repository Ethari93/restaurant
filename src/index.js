import "../dist/css/styles.scss";
import helper from "./modules/helpers";
import loadHome from "./modules/load_home";


loadHome();

console.log(helper);

const setNav = () => {
    const nav = document.querySelector(".nav");
    const menuItems = Array.from(nav.querySelectorAll(".item"));

    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            const oldActive = nav.querySelector(".active");
            oldActive.classList.remove("active");
            item.classList.add("active");
            helper.switchPage(item.dataset.action);
        });
    })
}

setNav();
