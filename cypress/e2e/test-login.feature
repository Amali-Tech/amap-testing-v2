Feature: User authentication

    Scenario: User login
        Given a user visits the login page
        When the user enters their credentials
        Then the user is navigated to the dashboard