runTest();

function runTest() {
    console.log("Test started");
    printStatus();

    var status = "PASSED";

    function printStatus() {
        console.log("Status:", status);
    }

    printStatus();
}