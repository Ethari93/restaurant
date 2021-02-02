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
            console.log("Now");
            element.classList.remove("faded-out");
        }, 100)
    }

    return {
        createElementWithClass,
        fadeInElement
    }
})();

export {helper};