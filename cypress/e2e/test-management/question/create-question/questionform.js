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
		cy.loginform(email, password);
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
	cy.get('.flex.ng-star-inserted')
		.as('question')
		.find('app-custombutton')
		.should('have.length', 3);
});

When('the user opens the question form', () => {
	cy.get('.flex.ng-star-inserted')
		.as('question')
		.find('app-custombutton')
		.eq(2)
		.click();
});

Then('the user is redirected to the question form', () => {
	cy.url().should('include', '/dashboard/apps/questions/create-questions');
});

When(
	'the user enters {string} in the question title, selects {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}',
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
		cy.question(
			title,
			type,
			domain,
			category,
			difficultylevel,
			addchoice,
			addchoice1,
			addchoice2,
			score
		);
	}
);

When('the user clicks on Save button', () => {
	//pending
});

Then(
	'the user saved the question and redirected to the question windows',
	() => {
		//pending
	}
);
