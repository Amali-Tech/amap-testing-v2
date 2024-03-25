const {
	Given,
	When,
	Then,
} = require('@badeball/cypress-cucumber-preprocessor');

Given('the user navigates to the login page', () => {
	cy.visit('/login');
});

When(
	'the user enters {string} email and {string} password in the input field',
	(email, password) => {
		cy.login(email, password);
	}
);

Then('the user is redirected to the dashboard', () => {
	cy.url().should('include', '/dashboard/home');
});

Given('the user opens the test management window', () => {
	cy.get('.space-y-6').as('sidebar');
	cy.get('@sidebar').find('li').eq(1).click();
});

When('the user opens the question window', () => {
	cy.get('.space-y-6').as('sidebar1');
	cy.get('@sidebar1').find('li').eq(0).click();
});

Then('the user is redirected to the question widnows', () => {
	cy.url().should('include', '/dashboard/apps/questions');
});

Given('the add new question button is provided', () => {
	cy.get(':nth-child(3) > #custom-button')
		.contains('Add new question')
		.should('be.visible');
});

When('the user opens the question form', () => {
	cy.get(':nth-child(3) > #custom-button').as('question').click();
});

Then('the user is redirected to the question form', () => {
	cy.url().should('include', '/dashboard/apps/questions/create-questions');
});
