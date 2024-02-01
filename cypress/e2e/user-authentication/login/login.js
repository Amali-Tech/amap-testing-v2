import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor"

Given("a user visits the login page", () => {
  cy.visit("https://amap.amalitech-dev.net/login");
});

When("the user enters valid credentials", () => {
  cy.get("#email").type('assessment.platform@amalitech.com');
  cy.get("#password").type('Amap@123')
  cy.get("#custom-button").click()
});

Then("the user is navigated to the dashboard", () => {
  cy.url().should('eq', "https://amap.amalitech-dev.net/dashboard/home");
});

When("the user enters {string} as their email and {string} as their password", (email, password) => {
  cy.get("#email").type(`${email}{enter}`);
  cy.get("#password").type(`${password}{enter}`);
  cy.get("#custom-button").click({force:true});
});

Then("an error message is displayed", () => {
    cy.get(".error-ref").should('be.visible')
});
