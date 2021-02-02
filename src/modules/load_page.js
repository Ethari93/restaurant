import { createElementWithClass, helper } from "./helpers";

const loadPage = () => {
    const copy = {
        headline: "The greatest burgers ever",
        subtitle: "Mouthwateringly delicious, prepared with care and love, using the freshest ingredients.",
        orderBtn: "Order now"
    }

    const container = document.querySelector(".page-wrap");
    const content = helper.createElementWithClass("div", "text-content");


    const headline = helper.createElementWithClass("div", "headline");
    headline.textContent = copy.headline;

    console.log(headline);
    const subtitle = helper.createElementWithClass("div", "subtitle");
    subtitle.textContent = copy.subtitle;
    
    const orderBtn = helper.createElementWithClass("div", "btn", "btn-order");
    orderBtn.textContent = copy.orderBtn;

    helper.fadeInElement(content, headline);
    helper.fadeInElement(content, subtitle);
    helper.fadeInElement(content, orderBtn);

    container.appendChild(content);
    //init();
    console.log(content);
};

export default loadPage;