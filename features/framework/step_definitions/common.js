// Dependencies
const {Given, When, Then} = require("cucumber");
const {
    visitHomepage,
    pending,
    clickOnItem,
    takenToPage,
    wait,
    clickHeaderNavButton,
    clickOnHomePageLink,
    shouldSeeText
} = require("../support/actions");

Given("I am on the homepage", {timeout: 15000}, visitHomepage);

When("I click on {string}", clickOnItem);

Then("I should see {string}", shouldSeeText);

When("I click on {string} nav link in header", clickHeaderNavButton);

When(/^I click on (Find Out More|See Our Work) homepage button$/, clickOnHomePageLink);

When("I am taken to the {string} page", takenToPage);

Given("pending", pending);

Then("I wait for {int} seconds", {timeout: 60 * 1000}, wait);
