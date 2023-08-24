const http = require("http");

http.createServer((request, response)=>{
    response.write("Welcome to world of Server side scripting with node JS");
    response.end();
}).listen(5500);