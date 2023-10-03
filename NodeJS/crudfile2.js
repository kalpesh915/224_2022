const fs = require("fs");

const path = require("path")

const pathname = path.join(__dirname,'files');
fs.readFile(pathname + "/data.txt", 'utf-8', (error, data)=>{
    console.log(data);
});