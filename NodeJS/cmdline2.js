const arguments  = process.argv
const fs = require("fs");
//fs.writeFileSync("demo1.txt", arguments[3]);

let data = "";

for(i=2; i<arguments.length; i++){
    data += " "+arguments[i]
}

fs.writeFileSync("demo1.txt", data);