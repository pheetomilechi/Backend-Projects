function runTasks(tasks) {
    for (const task of tasks) {
        task();
    }
}
module.exports = {runTasks};





