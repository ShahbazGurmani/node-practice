// const app = require('./app');

// const arr = [2,3,3,3,3,2,5,6];
// for (i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }
// console.log(app)
// console.log(app.x);

// //with te use of filter triverse array
// arr.filter((s)=>{
//     console.log(s)
// })


// const color = require('colors');
// console.log("hello".red)
// console.log("shahbaz")

const http = require('http');
const data = require('./data');

//coonection with server
http.createServer((req, res)=>{
    // res.write("<h1> Hello i m from server shahbaz khan gurmani baloch</h>");
    // res.end;
    res.writeHead(200,{'Content-Type':'Application\json'});
    res.write(JSON.stringify());
    res.end();

}).listen(4500)
