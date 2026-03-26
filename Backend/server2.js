const express  = require("express");
const app = express();
const PORT = 3001;
const heavyTask = () => {
    const crypto = require ("crypto")
}

app.get('/slow',(req,res) => {
    console.log("Slow start");
    heavyTask();
    console.log("Slow end");
    res.send('Slow response');
});
app.get('/fast', (req,res) => {
    console.log("Fast route hit");
    res.send('Fast response');
});
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
}); 