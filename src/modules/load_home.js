import helper from "./helpers";

const loadHome = () => {
    const copy = {
        headline: "The greatest burgers ever",
        subtitle: "Mouthwateringly delicious, prepared with care and love, using the freshest ingredients.",
        orderBtn: "Order now"
    }
    
    helper.clearPage();
    const container = document.querySelector(".page-wrap");
    const content = helper.createElementWithClass("div", "text-content");

    const headline = helper.createElementWithClass("div", "headline");
    headline.textContent = copy.headline;

    const subtitle = helper.createElementWithClass("div", "subtitle");
    subtitle.textContent = copy.subtitle;
    
    const orderBtn = helper.createElementWithClass("div", "btn", "btn-order");
    orderBtn.textContent = copy.orderBtn;

    orderBtn.addEventListener('click', () => {
        helper.switchPage('menu');
    });

    helper.fadeInElement(content, headline);
    helper.fadeInElement(content, subtitle);
    helper.fadeInElement(content, orderBtn);

    container.appendChild(content);
};


export default loadHome;