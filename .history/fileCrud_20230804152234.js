const fs  = require('fs');
const path = require('path');
//get path for current diractory
const dirPath = path.join(__dirname,'fileCrud');



//craete a file for specific folder
// const filePath = `${dirPath}/apple2.txt`;
// fs.writeFileSync(filePath,'this is a simple text file');




//read file from command lines
//which file you want to read
const filePath = `${dirPath}/apple2.txt`;
fs.readFileSync(filePath,(err,item)=>{
    console.log(item);
})


