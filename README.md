# Celtra assignment
Celtra assignment for QA Tester position

# Homework answers
## 1.
**a)**
For this assignment, I suggest implementing automated integration tests to ensure that the both modules can effectively perform their tasks together.
In addition, we should conduct performance tests on theCatAPIs to assess its overall reliability, speed, responsiveness, and scalability.

**b)**
First, I've educated myself on the best practices for testing third-party APIs. Next, I thoroughly reviewed theCatAPIs documentation to understand its capabilities, ensuring that it aligns with our current and potential future needs while considering costs.

After this, I planned the testing process by researching common tools, libraries, and programming languages used in this context. With necessary knowledge of theCatAPI, I created a test plan, defining the test cases that cover our API usage, following the structured "given, when, then" approach with an emphasis on scalability and automation.

Once the test plan was in place, I proceeded to write and validate the tests. Once satisfied with the test suite, my focus shifted to automating the testing process, seeking ways to execute the scripts automatically. This approach ensures an efficient testing strategy for theCatAPI.

**c)**


**d)**
In our situation, we have a partial solution at our disposal through theCatAPI Postman collection. We can build upon this to establish a cost-effective automated testing process. However, for a more robust approach to automation testing, we can implement Git hooks that initiate a Jenkins job, running our designated test script. This Jenkins job should be configured to execute at relevant actions, such as before finalizing a pull request, merging into a major branch, and moving a release candidate image to the next environment. This ensures that third-party service is thoroughly tested and any defects are not mistakenly attributed to them.
