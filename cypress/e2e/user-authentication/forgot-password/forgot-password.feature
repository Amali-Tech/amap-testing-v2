Feature: Forgot password

    Rule: User should have an account, and email provided must be valid

        Background: 
            Given a user visits the forgot password page

        Scenario: User provides a valid email
            When the user enters a valid email
            Then the user is navigated to the resetlink page

        Scenario Outline: User provides an invalid email
            When the user enters "<email>" as their email
            Then an error message is displayed
        
            Examples:
                |   email          |
                |   user@user.com  |
                |   mail.com       |
                |                  |
                
        Scenario: User clicks on the "Return to login" button
            When the user clicks on the 'Return to login' button
            Then the user is navigated to the login page
