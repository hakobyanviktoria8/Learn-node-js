// var http = require('http');
//
// //create a server object:
// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
// }).listen(8080);




// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Hello World! 2020');
//     res.end();
// }).listen(8080);

// const date = require('./date');
// console.log(date.myDateTime());

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(8080);

//
// var http = require('http');
// var url = require('url');
//
// // console.log(url);
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var q = url.parse(req.url, true).query;
//     console.log(q);
//     var txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8080);



// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//     fs.readFile('demofile1.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);



// var fs = require('fs');
//
// fs.appendFile('myfile1.txt', 'Hello content text 11!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });



// var fs = require('fs');
//
// fs.open('mynewfile2.txt', "w",  function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });


//
// var fs = require('fs');
//
// fs.writeFile('mynewfile33.txt', '1234567890', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });
//
// fs.writeFile('mynewfile33.txt', 'abcde', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });
//
// var fs = require('fs');
//
// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
// });
//
//
//
// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });
//
// var fs = require('fs');
//
// fs.unlink('mynewfile1.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });


// var fs = require('fs');
//
// fs.rename('mynewfile3.txt', 'myrenamedfile3.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });





