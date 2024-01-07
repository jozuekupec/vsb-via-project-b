class App {
    _navigationToggle;
    _body;
    _navigation;

    constructor() {
        this._navigationToggle = document.querySelector(".Header-navToggle");
        this._body = document.querySelector("body");
        this._navigation = document.querySelector(".Navigation");
        this.addEventListeners();
    }

    toggleNavigation() {
        this._body.classList.toggle("Navigation--opened");
    }

    /**
     * @param {HTMLDivElement} link
     */
    toggleNavigationLinks(link) {
        const linkWithSubLinksContainer = link.closest(".Navigation-subLinks");
        linkWithSubLinksContainer.classList.toggle("Navigation-subLinks--opened");
    }

    addEventListeners() {
        this._navigationToggle.addEventListener("click", () => this.toggleNavigation());
        this._navigation.querySelectorAll(".Navigation-linkWithSubLinksContainer").forEach(link => {
            const svgToggle = link.querySelector("[data-navigation-link-toggle]");
            svgToggle.addEventListener("click", e => this.toggleNavigationLinks(link));
        });
    }
}

window.app = new App();
