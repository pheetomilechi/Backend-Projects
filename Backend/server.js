const express = require('express');
const crypto = require('crypto');
const { Worker } = require('worker_threads');
const app = express();
const PORT = 3000;
app.get('/fast', (req, res) => {
    res.send('Fast response');
});
function heavyTask() {
    crypto.pbkdf2Sync("password", "salt", 1000000, 64, "sha512");
}
app.get('/slow', (req, res) => {
    const worker = new Worker('./worker.js');
    worker.on('message', () => {
        console.log('Heavy task completed');
        res.send('Slow(non-blocking) ');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});