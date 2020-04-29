$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Scenario.feature");
formatter.feature({
  "line": 1,
  "name": "Webservice test",
  "description": "",
  "id": "webservice-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14019434000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User tests weather web service",
  "description": "",
  "id": "webservice-test;user-tests-weather-web-service",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User defines base URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User validates status code",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User validates headers",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User validates response body",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userDefinesBaseURL()"
});
formatter.result({
  "duration": 984163100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userValidatesStatusCode()"
});
formatter.result({
  "duration": 2045938900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userValidatesHeaders()"
});
formatter.result({
  "duration": 488286500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userValidatesResponseBody()"
});
formatter.result({
  "duration": 523959300,
  "status": "passed"
});
formatter.after({
  "duration": 951718300,
  "status": "passed"
});
});