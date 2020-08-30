const scope = require("../../support/scope");

class TopNavBar {
    constructor() {
        this.navButtons = "#desktop-menu a";
        this.headerRoot = "#nav-bar";
    }

    async switchToTab(tabName) {
        const {currentPage} = scope.context;
        const navBar = await currentPage.$(this.headerRoot);
        const arrayOfButtons = await navBar.$$(this.navButtons);

        for (const button of arrayOfButtons) {
            if (await (await button.getProperty("textContent")).jsonValue() === tabName.toString().trim()) {
                await button.click();
                break;
            }
        }
    }

}

module.exports = TopNavBar;