const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;
app.get('/fast', (req, res) => {
    res.send('Fast response')
});
function heavyTask() {
    crypto.pbkdf2Sync("password", "salt", 1000000, 64, "sha512");
}
app.get('/slow', (req, res) => {
    heavyTask();
    res.send('Slow response');
});
app.listen(PORT, )
