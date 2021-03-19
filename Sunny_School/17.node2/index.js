const http = require('http');
const fs = require("fs");
const os = require('os');
const util = require("util");
const { promisify } = require('util');

// console.log(http);

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("ok")
});
server.listen(3000, "127.0.0.1");

console.log("3000potr");

//readFileSync
const fs_readFile = fs.readFileSync("input.txt", "utf8");

console.log(fs_readFile);

// const fs_writeFile = fs.writeFileSync("input1.txt",fs_readFile);
//
// console.log(fs_writeFile);


fs.readFile("input.txt", function (err,data) {
    if (err) {
        return console.error(err);
    }
    fs.writeFile("input.txt", data, ()=>{
        console.log("writen")
    })
});
console.log("test");

//os
// console.log(os);
console.log(os.homedir());
console.log(os.hostname());
console.log(os.userInfo());
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.networkInterfaces());

console.log(os.totalmem());

//1kb = 1024byte
//1mb = 1024kb
//1gb = 1024mb

var writeFile = promisify(fs.writeFile);
writeFile('sample.txt', 'This is a sample')
    .then(() => console.log('file successfully created'))
    .catch((error) => console.log('error creating file'));


async function async_function() {
    return 'message from async function';
}

const callback_function = util.callbackify(async_function);

callback_function((err, ret) => {
    if (err) throw err;
    console.log(ret);
});

