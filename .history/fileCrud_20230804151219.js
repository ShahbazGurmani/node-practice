const fs  = require('fs');
const path = require('path');
//get path for current diractory
const dirPath = path.join(__dirname,'fileCrud');
//craete a file for specific folder
const filePath = `${dirPath}/apple.txt`;
fs.writeFileSync('filePath','this is a simple text file');


