import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor"

Given("a user visits the login page", () => {
  cy.visit(`${Cypress.env('baseUrl')}/login`);
});

When("the user enters valid credentials", () => {
  cy.get("#email").type(Cypress.env('email'));
  cy.get("#password").type(Cypress.env('password'))
  cy.get("#custom-button").click()
});

Then("the user is navigated to the dashboard", () => {
  cy.url().should('eq', `${Cypress.env('baseUrl')}/dashboard/home`);
});

When("the user enters {string} as their email and {string} as their password", (email, password) => {
  cy.get("#email").type(`${email}{enter}`);
  cy.get("#password").type(`${password}{enter}`);
  cy.get("#custom-button").click({force:true});
});

Then("an error message is displayed", () => {
  cy.get(".error-ref").should('be.visible')
});

When("the user clicks on the 'Forgot password' button", () => {
  cy.get(".forgot-password").click({force:true});
});

Then("the user is navigated to the Forgot password page", () => {
  cy.url().should('eq', `${Cypress.env('baseUrl')}/forgot-password`);
});
