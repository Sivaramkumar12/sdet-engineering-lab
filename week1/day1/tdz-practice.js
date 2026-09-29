const testName = "Checkout Test";

function executeTest() {
    let status = "STARTED";

    console.log(testName, status);

    if (true) {
        console.log("Before:", status);

        let status = "PASSED";

        console.log("After:", status);
    }

    console.log("Final:", status);
}

executeTest();