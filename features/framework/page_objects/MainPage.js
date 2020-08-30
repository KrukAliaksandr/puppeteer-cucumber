const TopNavBar = require("./components/TopNavbar");
const scope = require("../support/scope");
const selectors = require("../support/selectors");
const pages = require("../support/pages");

class MainPage {
    constructor() {
        this.topNavBar = new TopNavBar();
        this.findOutMoreButton = ".button[href='/services']";
        this.seeOurWorkButton = ".button[href='/work']";
    }

    async clickOnItem(link) {
        const {currentPage} = scope.context;
        return await currentPage.click(selectors.links[link]);
    }

    async clickOnHomePageLink(button) {
        const {currentPage} = scope.context;
        const requiredButton = `${button[0].toLowerCase()}${(button.substring(1)).replace(/ /g, "")}Button`;
        return (await currentPage.$(new MainPage()[requiredButton])).click();
    }

    async takenToPage(pageName) {
        const url = scope.host + pages[pageName];
        const urlMatched = scope.context.currentPage.waitForFunction(
            `window.location.href === '${url}'`,
            {mutation: true}
        );
        await urlMatched;
    }

    async delay(duration) {
        return new Promise(resolve => setTimeout(resolve, duration));
    }

    async wait(timeInSeconds) {
        const time = parseInt(timeInSeconds) * 1000;
        await this.delay(time);
    }

    async shouldSeeText(text) {
        await this.delay(100);
        const {currentPage} = scope.context;
        const content = await currentPage.content();
        if (!content.includes(text))
            throw new Error(
                `Expected page to contain text: ${text}, but page contains only: ${content}`
            );
    }
}

module.exports = MainPage;