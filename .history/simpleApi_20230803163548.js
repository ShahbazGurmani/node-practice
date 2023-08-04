const http = require('http');

//coonection with server
http.createServer((req, res)=>{
    res.write("<h1> Hello i m from server shahbaz khan </h>");
    res.end;

}).listen(4500)
