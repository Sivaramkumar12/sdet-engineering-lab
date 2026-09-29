var status = "Global";

function runTest() {
    console.log("1:", status);

    var status = "Running";

    if (true) {
        let result = "Passed";
        console.log("2:", status);
        console.log("3:", result);
    }

    console.log("4:", status);
    console.log("5:", result);
}

runTest();