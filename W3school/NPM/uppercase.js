// var http = require('http');
// var uc = require('upper-case');
//
// console.log(uc);
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(uc.upperCase("Hello World!"));
//     res.end();
// }).listen(8080);



//
var fs = require('fs');
// console.log(fs);

var rs = fs.createReadStream('./demofile.txt');
// console.log(rs);
rs.on('open', function () {
    console.log('The file is open1');
});


//
// var events = require('events');
// // console.log(events);
// var eventEmitter = new events.EventEmitter();
// console.log(eventEmitter);
//
// //Create an event handler:
// var myEventHandler = function () {
//     console.log('I hear a scream!');
// }
//
// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);
//
// //Fire the 'scream' event:
// eventEmitter.emit('scream');