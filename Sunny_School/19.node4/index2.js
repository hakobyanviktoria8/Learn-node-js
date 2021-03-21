// const { Readable } = require('stream');
//
// const inStream = new Readable()
//
// inStream.push('ABCDEFGHIJKLM1111');
// inStream.push('NOPQRSTUVWXYZ');
// inStream.push(null); // No more data
//
// inStream.pipe(process.stdout);


// const fs = require('fs');
// const readableStream = fs.createReadStream('./input.txt', {
//     highWaterMark: 2
// });
// readableStream.on('data', (chunk) => {
//
//     console.log('chunk')
//
// });
// readableStream.on('end', () => {
//     console.log('DONE');
// });

//
// const { Writable } = require('stream');
//
// const outStream = new Writable({
//     write(chunk, encoding, callback) {
//         console.log(chunk.toString());
//         callback();
//     }
// });
// process.stdin.pipe(outStream);


// const fs = require('fs');
// const file = fs.createWriteStream('file.txt');
// for (let i = 0; i < 10; i++) {
//     file.write('Hello world ' + i+"\n");
// }
// file.end();
//
//



// const { Transform } = require('stream');
//
// const upperCaseTr = new Transform({
//     transform(chunk, encoding, callback) {
//         this.push(chunk.toString().toUpperCase());
//         callback();
//     }
// });
//
// process.stdin.pipe(upperCaseTr).pipe(process.stdout);


var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var rstream = fs.createReadStream('file.txt');
var wstream = fs.createWriteStream('outputfile.gz');

rstream   // reads from myfile.txt
    .pipe(gzip)  // compresses
    .pipe(wstream)  // writes to myfile.txt.gz
    .on('finish', function () {  // finished
        console.log('done compressing');
    });







