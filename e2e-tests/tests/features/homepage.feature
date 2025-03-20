Feature: To test Homepage functionality

  Scenario: To test the Homepage
    Given a user is on the Homepage
    When the user enters login details
    Then login should be successful
    And the homepage should be displayed
    When the user logs out
    Then log out should be successful
