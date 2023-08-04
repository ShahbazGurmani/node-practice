const fs = require('fs');

const input = process.argv;
//show all arrguents from cmd line;
//craeting file get name from argument and put data from cmd input

if(input[2] == 'add')
{
    fs.writeFileSync(input[3],input[4]);
}else if(input[2] == 'remove')
{
    //remove file
    fs.unlinkSync(input[3]);
}else
{
    console.warn("Invalid statement");
}

