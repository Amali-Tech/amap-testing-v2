Feature: User authentication

    Rule: User must have an account, and credentials provided must be valid

        Background: 
            Given a user visits the login page

        Scenario: User login with valid credentials
            When the user enters valid credentials
            Then the user is navigated to the dashboard

        Scenario Outline: User login with invalid credentials
            When the user enters "<email>" as their email and "<password>" as their password
            Then an error message is displayed

            Examples:
                |   email          |   password     |
                |   user@user.com  |   amAP123!@#   |
                |   mail.com       |   AbcD@123     |
                |   abc@123.com    |   123qwe       |
                |                  |                |
                