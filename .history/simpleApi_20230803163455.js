const http = require('http');

//coonection with server
http.createServer((req, res)=>{
    res.write("<h1> Hello i m from server shah </h>");
    res.end;

}).listen(4500)
