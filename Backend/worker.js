const { parentPort } = require('worker_threads');
const crypto = require('crypto');
crypto.pbkdf2Sync("password", "salt", 1000000, 64, "sha512");
parentPort.postMessage("Done");
