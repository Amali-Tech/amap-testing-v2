Feature: Deletion of a questilon

        Scenario: Delete a question

                Given the user visits the login page
                When the user enters their credentials
                Then the user is navigated to the dashboard
 
                Given the user clicks on a test management tab
                Then the user is navigated to the question windows

                Given the user clicks on an option icon on the list of the question windows
                Then the user removes a question card from the list of the question windows