var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" : "text/html"});

    var result = url.parse(request.url, true);
    var path = result.pathname;

    if(path == "/" || path == "/artigos") {
        fs.readFile(__dirname + '/artigos.html', function(err, html) {
            response.end(html);
        });
    } else if(path == "/contato") {
        fs.readFile(__dirname + '/contato.html', function(err, html) {
            response.end(html);
        });
    } else {
        fs.readFile(__dirname + '/erro.html', function(err, html) {
            response.end(html);
        });
    }
});

server.listen(3000, function(){
    console.log("Server rodando na porta 3000");
});