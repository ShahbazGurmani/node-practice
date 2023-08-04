const fs = require('fs');

const input = process.argv;
//show all arrguents from cmd line;
//craeting file get name from argument and put data from cmd input

fs.writeFileSync(input[2],input[3]);
