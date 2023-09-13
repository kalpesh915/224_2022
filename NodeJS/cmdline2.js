const arguments = process.argv
//console.log(arguments);

const fs = require("fs");

fs.writeFileSync("demo1.txt", arguments[2])
