Feature: Invite a user

    Rule: To invite a new user, the existing user must be logged in
            The existing user must have the permissions to manage users
            The new user must have a unique email that hasn't been previously used
            The new user must be assigned a role

        Background: 
            Given an existing user opens the 'Add user' form

        Scenario: Adding a new user with valid details
            When the existing user enters the new user's details
            Then the new user can be found in the users list
                # existing user gets snack bar notif
                # the new user receives an email
                # check for already existing email

        Scenario Outline: Adding a new user with invalid details
            When the existing user enters "<firstName>" as the new user's first name
            * the existing user enters "<lastName>" as the new user's last name
            * the existing user enters "<email>" as the new user's email
            * the existing user enters "<role>" as the new user's role
            Then an error message is displayed

            Examples:
                |   firstName   |   lastName    |     email          |   role             |
                |      123      |      Doe      |     user@user.com  |   Test Manager     |
                |      @#%      |      Doe      |     user@user.com  |   Test Manager     |
                |      John     |      456      |     user@user.com  |   Test Manager     |
                |      John     |      #^&      |     user@user.com  |   Test Manager     |
                |      John     |      Doe      |     abc123         |   Test Manager     |

        Scenario: User selects the cancel button
            When the exsiting user selects the 'Cancel' button
            Then the 'Add User' modal is closed
