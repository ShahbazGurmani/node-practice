const fs  = require('fs');
const path = require('path');
//get path for current diractory
const dirPath = path.join(__dirname,'fileCrud');
//craete a file for specific folder
fs.writeFileSync(`${dirPath}/apple.txt`,'this is a simple text file');


