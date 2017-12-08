var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log(req.url)
    if(req.url=="/node"){
        fs.readFile('./files/node.txt', function(err, content){
            res.end('' + content)
        })
    }
    else{
        
    res.end('Sent from the server');
    }
})

server.listen(4000);