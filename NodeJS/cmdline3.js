/* options for file manipulation */

const fs = require("fs");
const arguments = process.argv;

if(arguments[2] == "write"){
    fs.writeFileSync(arguments[3], arguments[4]);
}else if(arguments[2] == "update"){
    fs.writeFileSync(arguments[3], arguments[4]);
}else if(arguments[2] == "delete"){
    fs.unlinkSync(arguments[3]);
}else{
    console.log("Nothing to do");
}