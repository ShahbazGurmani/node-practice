const fs = require('fs');
const path = require('path');
// fs.writeFileSync("apple.text","hello i m from apple file")
//delete file
// fs.unlinkSync("apple.text");
//getting path of current directory

const dirPath = path.join(__dirname);
console.log(dirPath);
