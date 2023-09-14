// code for read data in file

const fs = require("fs");
const path = require("path");

const pathname = path.join(__dirname, 'files');

fs.rename(pathname+"/data.txt", pathname+"/data1.txt", (error)=>{
    if(!error){
        console.log("File Renamed Successfully");
    }else{
        console.log("Error while Rename file");
    }
});