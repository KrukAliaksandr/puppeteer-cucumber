// Dependencies
const pages = require("./pages");
const scope = require("./scope");
const MainPage = require("../page_objects/MainPage");

// Defines whether puppeteer runs Chrome in headless mode.
let headless = false;
let slowMo = 0;
let executablePath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";

if (process.env.CIRCLECI) headless = true;
if (process.env.CIRCLECI) slowMo = 0;

const pending = callback => {
    callback(null, "pending");
};

const visitHomepage = async () => {
    if (!scope.browser) scope.browser = await scope.driver.launch({headless, slowMo, executablePath, timeout: 600000});
    scope.context.currentPage = await scope.browser.newPage();
    scope.context.currentPage.setViewport({width: 1280, height: 1024});
    const url = scope.host + pages.home;
    const visit = await scope.context.currentPage.goto(url, {
        waitUntil: "networkidle2"
    });
    return visit;
};

const clickOnItem = async link => {
    return await new MainPage().clickOnItem(link);
};

const clickOnHomePageLink = async button => {
    return await (new MainPage().clickOnHomePageLink(button));
};

const clickHeaderNavButton = async link => {
    return await (new MainPage().topNavBar.switchToTab(link));
};

const takenToPage = async pageName => {
    return await new MainPage().takenToPage(pageName);
};

const wait = async timeInSeconds => await new MainPage().wait(timeInSeconds);

const shouldSeeText = async text => {
    return await new MainPage().shouldSeeText(text);
};

module.exports = {
    pending,
    headless,
    visitHomepage,
    clickOnItem,
    takenToPage,
    wait,
    clickHeaderNavButton,
    clickOnHomePageLink,
    shouldSeeText,
};
