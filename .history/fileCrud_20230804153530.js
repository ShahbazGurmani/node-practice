const fs  = require('fs');
const path = require('path');
//get path for current diractory
const dirPath = path.join(__dirname,'fileCrud');



//craete a file for specific folder
// const filePath = `${dirPath}/apple2.txt`;
// fs.writeFileSync(filePath,'this is a simple text file');




//read file from command lines
//which file you want to read
// const filePath = `${dirPath}/apple2.txt`;
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })


//update file 
// const filePath = `${dirPath}/apple2.txt`;
// fs.appendFile(filePath,'Name is apple.txt',(err)=>{
//   if(!err) console.log("file is updates");
// })

//rename file
const filePath = `${dirPath}/apple2.txt`
fs.rename(filePath,`${dirPath}/apple3.txt`,(err)=>{
    if(!err) console.log("file name is updated");
})

