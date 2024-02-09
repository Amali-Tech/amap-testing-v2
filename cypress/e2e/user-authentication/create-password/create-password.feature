Feature: Create password

    Rule: User must receive an invite via email, and the password chosen must be valid
            Valid passwords are at least 8 characters long, including at least one of the following:
            lower case letter
            upper case letter
            number
            special character

        Background: 
            Given a user is on the create password page

        Scenario: User creates a valid password
            When the user enters a valid password
            Then the user is navigated to the login page

        Scenario Outline: User creates an invalid password
            When the user enters "<password>" as their password
            Then an error message is displayed

            Examples:
                |   password  |   password  |
                |   123qwe    |   123qwe    |
                |             |             |
                