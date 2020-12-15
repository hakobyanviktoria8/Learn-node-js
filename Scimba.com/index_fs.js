const fs = require('fs');

const file = fs.readdirSync('./');
console.log(file);
fs.readdir('./',function (err,file) {   // "$" =>err
    if (err) console.log("Error",err) ;
    console.log("Result", file)
});