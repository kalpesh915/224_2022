const path = require("path");
const fs = require("fs");

const filepath = path.join(__dirname, "files");

fs.readdir(filepath, (error, file)=>{
    file.forEach((tmp)=>{
        console.log("File Name is : "+tmp);
    })
})