Feature: User authentication

    Background: 
        Given a user visits the login page

    Scenario: User login with valid credentials
        When the user enters valid credentials
        Then the user is navigated to the dashboard

    Scenario Outline: User login with invalid credentials
        When the user enters "<email>" as their email
        * the user enters "<password>" as their password
        Then an error message is displayed

        Examples:
            |   email   |   password    |
            |   mail.com   |   Amap@123  |
            |  abc@123.com    |    123qwe   |
            