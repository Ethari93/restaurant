import helper from "./helpers";

const loadContact = () => {
    const copy = {
        headline: "Great Burger Company B.V.​",
        address: "Straat 60, 2111 VS, Den Haag",
        "opening-hours": "Monday - Sunday  11:30 - 21:30",
        tel: "Tel: +31 (0)70 1111111",
        email: "Email: info@burgercompay-fake-email.nl"
    }

    const container = document.querySelector(".page-wrap");
    const contact = helper.createElementWithClass("div", "contact-us", "fading");
    container.appendChild(contact);

    const headline = helper.createElementWithClass("p", "headline");
    headline.textContent = copy.headline;


    const address = helper.createElementWithClass("p", "address");
    address.textContent = copy.address;

    const opening_hours = helper.createElementWithClass("p", "opening-hours");
    opening_hours.textContent = copy['opening-hours'];

    const tel = helper.createElementWithClass("p", "tel");
    tel.textContent = copy.tel;

    const email = helper.createElementWithClass("p", "email");
    email.textContent = copy.email;

    const elements = [headline, address, opening_hours, tel, email];

    elements.forEach((el) => {
        helper.fadeInElement(contact, el);
    });
}

export default loadContact;