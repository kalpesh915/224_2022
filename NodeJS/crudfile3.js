// code for read data in file

const fs = require("fs");
const path = require("path");

const pathname = path.join(__dirname, 'files');

fs.appendFile(pathname+"/data.txt", " Another Demo text for testing", (error)=>{
    if(!error){
        console.log("Data Appended Successfully");
    }else{
        console.log("Error while appending data in file");
    }
});