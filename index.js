// 1. Function that takes a series of morning tasks (callback functions) and executes them
function morningRoutine(tasks) {
    console.log("Starting my morning routine...");

    // Loop through the tasks and execute each one
    tasks.forEach(task => {
        console.log(- Executing task: ${task.name || "Anonymous Task"});
        task();
    });

    console.log("Morning routine completed!");
}

// 2. Function that returns a named function (prepares breakfast)
function returnsANamedFunction() {
    function makeBreakfast() {
        console.log("Making a healthy breakfast: eggs and toast.");
    }
    return makeBreakfast;
}

// 3. Function that returns an anonymous function (morning workout)
function returnsAnAnonymousFunction() {
    return function() {
        console.log("Starting a 30-minute morning workout.");
    };
}

// 4. Additional tasks
function brushTeeth() {
    console.log("Brushing teeth to keep them clean.");
}

function takeShower() {
    console.log("Taking a refreshing shower to wake up.");
}

function readNews() {
    console.log("Reading the news to stay informed.");
}

// 5. Executing the morning routine
const tasks = [
    brushTeeth,
    takeShower,
    returnsANamedFunction(),
    returnsAnAnonymousFunction(),
    readNews
];

// Running the entire morning routine
morningRoutine(tasks);