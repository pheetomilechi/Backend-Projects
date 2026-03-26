const express = require("express")
const { Worker, parentPort } = require('worker_threads');
const app = express();
const PORT = 3002; 

const crypto = require('crypto');
crypto.pbkdf2Sync("password", "salt", 1000000, 64, "sha512");
console.log(parentPort);
parentPort.postMessage("Done");


app.get('/slow', (req, res) => {
    const worker = new Worker('./worker.js');
    worker.on('message', () => {
        res.send('Slow (non-blocking)');
    });
});

app.listen (PORT, () => {
    console.log(`worker server running on ${PORT}`)
});