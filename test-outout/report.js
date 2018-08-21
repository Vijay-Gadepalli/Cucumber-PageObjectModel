$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Vijay Gadepalli/Desktop/Eclipse_Workspace/CRM_BDD/src/main/java/com/qa/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Test using BDD framework",
  "description": "",
  "id": "free-crm-login-test-using-bdd-framework",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "free-crm-login-test-using-bdd-framework;login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user opens the browser and launches the app",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is on login page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters the valid username and password and clicks on the login button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_opens_the_bowser_and_launches_the_app()"
});
formatter.result({
  "duration": 15887412664,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 57289936,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_the_valid_username_and_password_and_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 19036446258,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.home_page_should_display()"
});
formatter.result({
  "duration": 202570601,
  "status": "passed"
});
});