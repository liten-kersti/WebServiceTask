Feature: Webservice test

  Scenario: User tests weather web service
    Given User defines base URL
    When User validates status code
    And User validates headers
    Then User validates response body