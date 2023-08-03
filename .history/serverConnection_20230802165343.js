//first call http module
const http = require('http');

// http.createServer((req,res)=>{

//     res.write("<h1> Hello i m server </h>")
//     res.end();
// }).listen(4500);

//also we can craete an other function then pass as a peremeter
function connection (req , res) {
    res.write("<h1> Hello i m server </h>")
    res.end();
}
http.createServer(connection).listen(4500)