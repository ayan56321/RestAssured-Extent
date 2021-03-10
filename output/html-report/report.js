$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoFeaturePost.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Ayan"
    }
  ],
  "line": 2,
  "name": "POST: Automated Demo Test",
  "description": "Description: POST: The purpose of this feature is to test some demo app.",
  "id": "post:-automated-demo-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "POST: Test the Demo app",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"\u003cURL\u003e\" for test case \"\u003cTestName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"\u003cContentType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"\u003cRequestBody\u003e\" and request method is \"\u003cRequestMethod\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the response value \"name\" is \"morpheus\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I try to verify the response value \"job\" is \"leader\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "#And I try to verify the response value \"id\" is \"55\""
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app;",
  "rows": [
    {
      "cells": [
        "TestName",
        "URL",
        "ContentType",
        "RequestBody",
        "RequestMethod",
        "StatusCode"
      ],
      "line": 16,
      "id": "post:-automated-demo-test;post:-test-the-demo-app;;1"
    },
    {
      "cells": [
        "Demo test",
        "/api/users",
        "application/json",
        "testdata/test.json",
        "POST",
        "201"
      ],
      "line": 17,
      "id": "post:-automated-demo-test;post:-test-the-demo-app;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12262500,
  "status": "passed"
});
formatter.before({
  "duration": 2145200,
  "status": "passed"
});
formatter.before({
  "duration": 5395700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "POST: Test the Demo app",
  "description": "",
  "id": "post:-automated-demo-test;post:-test-the-demo-app;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@post"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to set URL as \"/api/users\" for test case \"Demo test\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I set header content type as \"application/json\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I hit the API with requestbody \"testdata/test.json\" and request method is \"POST\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I try to verify the status code is \"201\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I try to verify the response value \"name\" is \"morpheus\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I try to verify the response value \"job\" is \"leader\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users",
      "offset": 22
    },
    {
      "val": "Demo test",
      "offset": 49
    }
  ],
  "location": "StepDefinitionsTest.setAPIEndpointURL(String,String)"
});
formatter.result({
  "duration": 297435000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "StepDefinitionsTest.setHeader(String)"
});
formatter.result({
  "duration": 1809000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata/test.json",
      "offset": 32
    },
    {
      "val": "POST",
      "offset": 75
    }
  ],
  "location": "StepDefinitionsTest.submitRequest(String,String)"
});
formatter.result({
  "duration": 6241746300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 36
    }
  ],
  "location": "StepDefinitionsTest.verifyStatusCode(String)"
});
formatter.result({
  "duration": 4645700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 36
    },
    {
      "val": "morpheus",
      "offset": 46
    }
  ],
  "location": "StepDefinitionsTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 4299800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "job",
      "offset": 36
    },
    {
      "val": "leader",
      "offset": 45
    }
  ],
  "location": "StepDefinitionsTest.verifyResponseValue(String,String)"
});
formatter.result({
  "duration": 3230400,
  "status": "passed"
});
formatter.after({
  "duration": 1922800,
  "status": "passed"
});
formatter.after({
  "duration": 916500,
  "status": "passed"
});
formatter.after({
  "duration": 1075800,
  "status": "passed"
});
});