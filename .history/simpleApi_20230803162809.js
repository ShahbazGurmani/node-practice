const http = require('http');

//coonection with server
http.createServer((req, res)=>{
    res.write("hi from sarver");
    res.end;

}).listen(6000)