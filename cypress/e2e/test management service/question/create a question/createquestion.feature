Feature: Question creation

        Scenario: Create a question

        Given the user visits the login page
        When the user enters their credentials
        Then the user is navigated to the dashboard
 
        Given the user clicks on a test management tab
        Then the user is navigated to the question windows

        Given the user enters the question form page using the add new question button
        Then the user is navigated to the question form page

        Given the user enter the question form with a piece of information using fields
        When the user clicks on the Save button
        Then the user is successfully created the question and the created question is added to the question windows


       