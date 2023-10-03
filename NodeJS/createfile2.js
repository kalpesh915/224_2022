const fs = require("fs");
for(i=1; i<=10; i++){
    fs.writeFileSync("files/file" + i + ".txt", "Welcome to Rajkot");
}