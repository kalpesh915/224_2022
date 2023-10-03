const fs = require("fs");

const path = require("path");

const pathname = path.join(__dirname, 'files');
fs.writeFileSync(pathname + "/data.txt", "Welcome to crud operation with files in Node");