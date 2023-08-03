//global and non global
// global medule= we can use and access with out import like console.log etc
//non GM = fisrt import from js library then use 
const fs = require('fs')
console.log("hello shahbaz")
fs.writeFileSync("text1.txt","hello shahbaz gurmani where are you from");
//check diractry where we are exist;
console.log(">>>-",__dirname);