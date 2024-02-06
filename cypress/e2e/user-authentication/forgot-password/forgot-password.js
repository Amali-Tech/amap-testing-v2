const {When, Then, Given} = require("@badeball/cypress-cucumber-preprocessor")

Given("a user visits the login page", () => {
  cy.visit("https://amap.amalitech-dev.net/forgot-password");
});

When("the user enters a valid email", () => {
  cy.get("#email").type('assessment.platform@amalitech.com');
  cy.get("#custom-button").click()
});

// replace with correct page url
Then("the user is navigated to the dashboard", () => {
  cy.url().should('eq', "https://amap.amalitech-dev.net/dashboard/home");
});

When("the user enters {string} as their email", (email) => {
  cy.get("#email").type(`${email}{enter}`);
  cy.get("#custom-button").click({force:true});
});

Then("an error message is displayed", () => {
    cy.get(".error-ref").should('be.visible')
});

When("the user clicks on the 'Return to login' button", () => {
    cy.get("#custom-button").click();
  });
  
  Then("the user is navigated to the login page", () => {
    cy.url().should('eq', "https://amap.amalitech-dev.net/login");
  });
