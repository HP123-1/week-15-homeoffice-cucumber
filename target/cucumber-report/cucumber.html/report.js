$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VisaChecks.feature");
formatter.feature({
  "line": 1,
  "name": "Visa checks",
  "description": "",
  "id": "visa-checks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11657670200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "A Chilean coming to the UK for Work and plans on staying for longer than 6 months.",
  "description": "",
  "id": "visa-checks;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-6-months.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Smoke"
    },
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I start visa check",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select a nationality of \u0027chile\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select reason \u0027Work, academic visit or business\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I state I am intending to stay for \u0027more\u0027 than 6 months",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I state I have planning to work \u0027health\u0027 types of job",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I will be informed \u0027You need a visa to work in health and care\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeOfficeSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 222961700,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 691991500,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectANationalityOfChile()"
});
formatter.result({
  "duration": 254471600,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 425511000,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iSelectReasonWorkAcademicVisitOrBusiness()"
});
formatter.result({
  "duration": 135694600,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 328768300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 47
    }
  ],
  "location": "HomeOfficeSteps.iStateIAmIntendingToStayForMoreThanMonths(int)"
});
formatter.result({
  "duration": 174804600,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 319147400,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iStateIHavePlanningToWorkHealthTypesOfJob()"
});
formatter.result({
  "duration": 119892900,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iClickOnNextButton()"
});
formatter.result({
  "duration": 531140500,
  "status": "passed"
});
formatter.match({
  "location": "HomeOfficeSteps.iWillBeInformedYouNeedAVisaToWorkInHealthAndCare()"
});
formatter.result({
  "duration": 81345800,
  "status": "passed"
});
formatter.after({
  "duration": 1762210700,
  "status": "passed"
});
});