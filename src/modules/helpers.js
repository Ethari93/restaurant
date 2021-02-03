import loadHome from "./load_home";
import loadMenu from "./load_menu";
import loadContact from "./load_contact";


const helper = (() => {
    const createElementWithClass = (_element, ..._classes) => {
        const element = document.createElement(_element);
    
        _classes.forEach((_class) => {
            element.classList.add(_class);
        });
    
        return element;
    };

    const fadeInElement = (target, element) => {
        target.appendChild(element);
        element.classList.add("faded-out");

        window.setTimeout(() => {
            console.log("Fading in...");
            element.classList.remove("faded-out");
        }, 100)
    }

    const clearPage = () => {
        const container = document.querySelector(".page-wrap");
        container.textContent = "";
    }

    const switchPage = (action) => {
        clearPage();
        if(action == "contact"){
            loadContact();
        } else if(action == "menu"){
            loadMenu();
        } else{
            loadHome();
        }
    }
    
    return {
        createElementWithClass,
        fadeInElement,
        clearPage,
        switchPage
    }
})();

export default helper;