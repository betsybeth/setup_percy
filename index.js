
const createTestCafe = require('testcafe');


createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        runner   = testcafe.createRunner();

        const remoteConnection =  testcafe.createBrowserConnection();
            runner
                .src('./tests/firsttest.js')
                .browsers(["chrome"])
                .run()
                .then(failedCount => {
                    console.log(failedCount);
                    testcafe.close();
                 })
                .catch(error => {
                    console.log("hehhhhhey", error),testcafe.close() })
        });