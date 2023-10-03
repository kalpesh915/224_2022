const http = require("http");
function manageServer(request, response){
    response.write("This is a server funcion created by additional  function");
    response.end();

}
    http.createServer(manageServer).listen(4000);
