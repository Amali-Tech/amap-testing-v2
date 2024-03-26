import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor';
import Question from '../../../../page object model/question/create a question';
import data from '../../../../fixtures/login.json';

const question = new Question();

// Give the listed data used for entering the fields under the question form
const questiontext =
	'Is the programming language used for developing both website and application?';
const questiontype = 'True or False';
const selectdomain = 'Programming Language';
const selectCategory = 'Senior Developer';
const selectDifficultylevel = 'Advanced';
const score = 3;

Given('the user visits the login page', () => {
	question.open();
});

When('the user enters their credentials', () => {
	question.email().type(data.email);
	question.password().type(data.password);
	question.signinbutton().click();
});

Then('the user is navigated to the dashboard', () => {
	question.url();
});

Given('the user clicks on a test management tab', () => {
	question.testmanagementtab().children().eq(1).click();
});

Given('the user is navigated to the question windows', () => {
	question.url_question();
});

Given(
	'the user enters the question form page using the add new question button',
	() => {
		question.addnewquestion().first().contains('Add new question').click();
	}
);

Then('the user is navigated to the question form page', () => {
	question.url_question_form();
});

Given(
	'the user enter the question form with a piece of information using fields',
	() => {
		question.questionfield().clear().type(questiontext);
		question.questiontype().select(questiontype);
		question.domain().select(selectdomain);
		question.category().select(selectCategory);
		question.difficultylevel().select(selectDifficultylevel);
		question.radio().check();
		question.score().clear().type(score);
	}
);

When('the user clicks on the Save button', () => {
	question.savebutton().click({ force: true });
});

Then(
	'the user is successfully created the question and the created question is added to the question windows',
	() => {
		question.url_createdquestion();
	}
);
