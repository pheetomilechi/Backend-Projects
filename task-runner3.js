const { runTasks } = require("./task-runner");


runTasks([
    () => console.log("A"),
    () => process.nextTick(() => console.log("B(nextTick)")),
    () => Promise.resolve().then(() => console.log("C(promise)")),
    () => setTimeout(() => console.log("D(timeout)"),0)
]);