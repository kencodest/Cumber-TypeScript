Feature: To test login functionality

  Scenario: To test login functionality
    Given a user is on the login page
    When the user enters login details
    Then the homepage should be displayed
    When the user logs out
    Then log out should be successful