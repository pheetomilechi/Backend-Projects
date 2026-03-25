const { runTasks } = require("./task-runner");

function blockCPU() {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
}
runTasks([
    () => console.log("Start"),
    () => blockCPU(),
    () => Promise.resolve().then(() => console.log("Promise")),
    () => setTimeout(() => console.log("Timeout"),0),
]);