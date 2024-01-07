class App {
    _navigationToggle;
    _body;

    constructor() {
        this._navigationToggle = document.querySelector(".Header-navToggle");
        this._body = document.querySelector("body");
        this.addEventListeners();
    }

    toggleNavigation() {
        this._body.classList.toggle("Navigation--opened");
    }

    addEventListeners() {
        this._navigationToggle.addEventListener("click", () => this.toggleNavigation());
    }
}

window.app = new App();
