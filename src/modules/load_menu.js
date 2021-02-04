import helper from "./helpers";

const loadMenu = () => {
    const container = document.querySelector(".page-wrap");
    const burgers = [
        '100% Fresh beef - No fillers or preservatives. One juicy burger patty with crispy, sweet applewood-smoked bacon and American cheese. Top with as many toppings as you choose.',
        '100% Vegan - Cucumber, tomatoe, covered in homemade tzatziki sauce, wrapped in a freshly baked bun',
        '100% Fresh beef - double patty, lots of American cheese, on a bed of lettuce',
        'Two hand-formed patties, grilled to order - with two strips of crispy bacon and two slices of Kraft American Cheese - all on a soft, sesame seed bun.'
    ];

    const menu = helper.createElementWithClass("div", "menu", "fading");
    container.appendChild(menu);

    burgers.forEach((burger, i) => {
        const dish = helper.createElementWithClass("div", "dish");
        const img = document.createElement("img");
        img.setAttribute("src", `../src/assets/images/burger_${i+1}.jpg`);
        dish.appendChild(img);
        const description = helper.createElementWithClass("div", "description");
        dish.appendChild(description);
        const span = document.createElement("span");
        span.textContent = burger;
        description.appendChild(span);

        helper.fadeInElement(menu, dish);
    });
}

export default loadMenu;