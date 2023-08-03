//first call http module
const http = require('http');

http.createServer((req,res)=>{

    res.write("<h1> Hello i m server </h>")
    res.end();
}).listen(4500);