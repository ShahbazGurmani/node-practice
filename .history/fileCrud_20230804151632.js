const fs  = require('fs');
const path = require('path');
//get path for current diractory
const dirPath = path.join(__dirname,'fileCrud');
//craete a file for specific folder
const filePath = `${dirPath}/apple2.txt`;
fs.writeFileSync(filePath,'this is a simple text file');

//read file from command lines
fs.readFile(dirPath,'utf-8',(err,item)=>{
    console.log(item);
})


