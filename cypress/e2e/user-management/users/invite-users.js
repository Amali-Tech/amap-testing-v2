import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor"

Given("an existing user opens the 'Add user' form", () => {
    cy.login()
    cy.visit(`${Cypress.env('baseUrl')}/dashboard/user-management/users`)
    cy.get("#custom-button").click();
    cy.get(".p-dialog").should("be.visible").contains("Add User");
})

When("the existing user enters the new user's details", () => {
    cy.get("#first_name").type("John");
    cy.get("#last_name").type("Doe");
    cy.get("#email").type("maihikidinllh@mail.com");
    cy.get("select").select("Test Manager");
    cy.get(".shadow-lg > #custom-button").click()
    cy.get(".p-dialog").should("not.exist");
})

Then("the new user can be found in the users list", () => {
    cy.get("#searchTerm").type("John Doe")
})

When("the existing user enters {string} as the new user's first name", (firstName) => {
    cy.get("#first_name").type(`${firstName}`);
})

When("the existing user enters {string} as the new user's last name", (lastName) => {
    cy.get("#last_name").type(`${lastName}`);
})

When("the existing user enters {string} as the new user's email", (email) => {
    cy.get("#email").type(`${email}`);
})

When("the existing user enters {string} as the new user's role", (role) => {
    cy.get("select").select(`${role}`);
    cy.contains("Invite").click({ force: true });
})

Then("an error message is displayed", () => {
    cy.get(".error-ref").should('be.visible')
})

When("the exsiting user selects the 'Cancel' button", () =>{
    cy.contains("Cancel").click()
})

Then("the 'Add User' modal is closed", () =>{
    cy.get(".p-dialog").should("not.exist");
})
