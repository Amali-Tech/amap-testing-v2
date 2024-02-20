Cypress.Commands.add('login', ()=>{
    cy.visit(`${Cypress.env('baseUrl')}/login`)
    cy.get('#email').type(Cypress.env('email'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#custom-button').click()
    cy.url().should('eq', `${Cypress.env('baseUrl')}/dashboard/home`)
})
