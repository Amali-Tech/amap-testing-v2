const {When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor")

Given("a user is on the create password page", () => {
  cy.visit("https://amap.amalitech-dev.net/create-password");
});

When("the user enters a valid password", () => {
  cy.get("input").eq(0).type("amAP123!@#");
  cy.get("input").eq(1).type("amAP123!@#")
  cy.get("#custom-button").click()
});

Then("the user is navigated to the login page", () => {
  cy.url().should('eq', "https://amap.amalitech-dev.net/login");
});

When("the user enters {string} as their password", (password) => {
  cy.get("input").eq(0).type(`${password}{enter}`);
  cy.get("input").eq(1).type(`${password}{enter}`);
  cy.get("#custom-button").click({force:true});
});

Then("an error message is displayed", () => {
    cy.get(".error-ref").should('be.visible')
});
