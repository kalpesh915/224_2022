const http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {"content-type":"Application/json"});
    const student = {
        fname : "Nanadini",
        lname : "Parekh",
        city : "Rajkot",
        phone : "345897987987",
        email : "nandini@gmail.com"
    }
    response.write(JSON.stringify(student));
    response.end();
}).listen(5000);