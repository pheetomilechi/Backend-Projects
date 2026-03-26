const { application } = require("express");

application.get('/slow',(req,res) => {
    console.log("Slow start");
    heavyTask();
    console.log("Slow end");
    res.send('Slow response');
});