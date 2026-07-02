Feature: User Authentication tests

  Background:
  Given User navigates to the application
  And User click on the login link

Scenario: Login should be success
And User enter the username as "akkshee"
And User enter the password as "Password@1234"
When User click on the login button
Then Login should be success

Scenario: Login should not be sucess 
Given User enter the username as "akkshee"
Given User enter the password as ""
When User click on the login button
Then Login should fail