const path = require("path");
const fs = require("fs");

const filepath = path.join(__dirname, "files");
console.log(filepath);
for(i=1; i<=10; i++){
    fs.writeFileSync(filepath+"/file"+i+".txt", "Welcome to Rajkot");
}