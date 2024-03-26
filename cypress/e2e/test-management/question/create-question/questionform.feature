Feature: Creation of a question

    Scenario: Should create a question using the question form
         Given the user navigates to the login page
         When the user enters 'assessment.platform@amalitech.com' email and 'Amap@123' password in the input field
         Then the user is redirected to the dashboard
         Given the user opens the test management window
         When the user opens the question window
         Then the user is redirected to the question widnows
         Given the add new question button is provided
         When the user opens the question form
         Then the user is redirected to the question form
         When the user enters 'What is a computer mouse' in the question title, selects 'Multiple Choice', 'JavaScript', 'Senior Developer', 'Beginner', 'good', 'pass', 'excellent', '3'
         When the user clicks on Save button
         Then the user saved the question and redirected to the question windows