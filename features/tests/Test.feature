Feature: Test
  In order to see how this test setup runs
  As a developer
  I want to visit a website and see what happens when the code runs

  Scenario: Visit a website
    Given I am on the homepage
    And I should see "Welcome to Anephenix"
    And I wait for 15 seconds
    And pending