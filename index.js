const fs = require('node:fs');
//the callback function is the last
fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log('File content:', data);
});
