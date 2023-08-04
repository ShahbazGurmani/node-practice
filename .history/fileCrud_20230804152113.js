const fs  = require('fs');
const path = require('path');
//get path for current diractory
const dirPath = path.join(__dirname,'fileCrud');
console.log(dirPath)
//craete a file for specific folder
// const filePath = `${dirPath}/apple2.txt`;
// fs.writeFileSync(filePath,'this is a simple text file');

//read file from command lines
//which file you want to read

fs.readFileSync(dirPath,'utf-8',(err,item)=>{
    console.log(item);
})


