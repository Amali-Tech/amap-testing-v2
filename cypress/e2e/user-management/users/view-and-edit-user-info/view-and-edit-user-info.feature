Feature: View and edit user info

    Rule: To view or edit a user's info, the actor must be logged in
            The actor must have the permissions read and manage user info
            The user must exist on the platform

        Background: 
            Given the actor visits the 'Users' page

        Scenario: Deactivating a user
            When the actor selects the option to deactivate a user
            Then a success message confirms the deactivation

        Scenario: Reactivating a user
            When the actor selects the option to reactivate a user
            Then a success message confirms the reactivation

        Scenario: Editing user info
            When the actor enters the user's new details
            Then a success message confirms the changes

        Scenario Outline: Editing user info with invalid details
            When the actor enters "<firstName>" as the user's new first name
            * the actor enters "<lastName>" as the user's new last name
            * the actor enters "<email>" as the user's new email
            * the actor enters "<role>" as the new user's role
            Then an error message is displayed

            Examples:
                |   firstName   |   lastName    |     email          |   role             |
                |      123      |      Doe      |     user@user.com  |   Test Manager     |
                |      @#%      |      Doe      |     user@user.com  |   Test Manager     |
                |      John     |      456      |     user@user.com  |   Test Manager     |
                |      John     |      #^&      |     user@user.com  |   Test Manager     |
                |      John     |      Doe      |     abc123         |   Test Manager     |
