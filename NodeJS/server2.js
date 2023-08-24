const http = require("http");

function manageServer(request, response){
    response.write("This is server function created by additional function");
    response.end();
}

http.createServer(manageServer).listen(5000);