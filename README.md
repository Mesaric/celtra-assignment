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

Once the test plan was in place, I proceeded to write and validate the tests. When satisfied with the test suite, my focus shifted to automating the testing process, seeking ways to execute the scripts automatically. This approach ensures an efficient testing strategy for theCatAPI.

**c)**
Executable tests can be found under [tests/test_theCatAPI_api.py](./tests/test_theCatAPI_api.py). To run the tests, please refer to [tests/README.md](./tests/README.md)

**d)**
In our situation, we have a partial solution at our disposal through theCatAPI Postman collection. We can build upon this to establish a cost-effective automated testing process. However, for a more robust approach to automation testing, we can implement Git hooks that initiate a Jenkins job, running our designated test script. This Jenkins job should be configured to execute at relevant actions, such as before finalizing a pull request, merging into a major branch, and moving a release candidate image to the next environment. This ensures that third-party service is thoroughly tested and any defects are not mistakenly attributed to them.

## 2.
**a)**
TheCatAPI should supply the following information about a breed: 
- average lifespan,         
- suitability for indoors living,
- compatibility with dogs,
- loyalty characteristics,
- easy to get,
- presence of fur, and if so, the shedding level.
Furthermore, API should be able to return a cat of a specific breed(s). 

**b)**
We believe the API satisfies the user story. After further examination of API, needed information are covered with these attributes: 
- average lifespan > `life_span`,
- compatibility with dogs > `dog_friendly`,
- loyalty characteristics > `affection_level`, 
- easy to get (CTO needs it as soon as possible) > `rare`,
- presence of fur, and if so, the shedding level > `shedding_level`, `hairless`.

Suitability for indoors living could be covered with `adaptability` attribute. 

There are inconsistencies with provided data. `shedding` attribute ranges from 1-5 while most attributes range from 0-5 (hairless breed could be considered as `shedding: 0`). `indoor` is not very descriptive as a true-false value, even more so as only one breed is marked as `indoor: true`.

**c)**
Demo solution can be found under [demo/index.html](./demo/index.html).

Since filtering cat breeds is limited on server side, we send a request for all available breeds and then filter them on clients' side. We filter the list by attributes `lifespan`, `indoor`, `dog_friendly`, `affection_level`, `rare`, `shedding_level` and `hairless`. Now, we can send a request for cat of specific breed(s) that satisfy our criteria (e.g. https://api.thecatapi.com/v1/images/search?breed_ids=awir,siam).
