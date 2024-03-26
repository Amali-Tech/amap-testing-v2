// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginform', (email, password) => {
	cy.get('input[type=email]').type(email);
	cy.get('input[type=password]').type(password);
	cy.get('#custom-button').then((element) => {
		cy.wrap(element).click();
	});
});

Cypress.Commands.add(
	'question',
	(
		title,
		type,
		domain,
		category,
		difficultylevel,
		addchoice,
		addchoice1,
		addchoice2,
		score
	) => {
		cy.get('.ql-editor > p').type(title);
		cy.get('app-custom-dropdown > .secondary_select')
			.eq(0)
			.find('.secondary')
			.select(type);
		cy.get('.form-select').find('.form-option-select').should('be.disabled');
		cy.get('.form-select').select(domain);
		cy.get('.block.ng-star-inserted > .form-select').select(category);
		cy.get(
			':nth-child(4) > app-custom-dropdown > .secondary_select > .secondary'
		).select(difficultylevel);
		cy.contains('Add Choice').as('addchoice').click();
		cy.get('.ng-star-inserted > .ng-pristine')
			.find('.ql-container')
			.eq(0)
			.type(addchoice);
		cy.contains('Add Choice').as('addchoice').click();
		cy.get('.ng-star-inserted > .ng-pristine')
			.find('.ql-container')
			.eq(0)
			.type(addchoice1);
		cy.contains('Add Choice').as('addchoice').click();
		cy.get('.ng-star-inserted > .ng-pristine')
			.find('.ql-container')
			.eq(0)
			.type(addchoice2);
		cy.get('input[type=number]').clear().type(score);
		cy.contains('Save').then((element) => {
			cy.wrap(element).click();
		});
	}
);
