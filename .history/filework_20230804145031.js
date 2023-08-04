const fs = require('fs');
const path = require('path');
// fs.writeFileSync("apple.text","hello i m from apple file")
//delete file
// fs.unlinkSync("apple.text");
//getting path of current directory

// const dirPath = path.join(__dirname,'files');
// console.log(dirPath);

//craete five files at the same time.
const dirPath = path.join(__dirname,'files')
for(i=0;i<5;i++)
{
    // fs.writeFileSync(`${dirPath}student${i+1}.txt`,'hello my rollnumber is '+(i+1)+"From class 1");
    // fs.unlinkSync(`${dirPath}student${i+1}.txt`,'hello my rollnumber is '+(i+1)+"From class 1");
    fs.writeFileSync(dirPath +`student${i+1}.txt`,'hello my rollnumber is '+(i+1)+"From class 1");
}


