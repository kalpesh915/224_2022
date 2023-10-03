const fs = require("fs");
const path = require("path");

const pathname = path.join(__dirname, 'files');

fs.unlinkSync(pathname+ "/data1.txt", (error)=>{
    if(!error){
        console.log("File deleted successfully");
    }
    else{
        console.log("Error in deleting file");
    }
    });

