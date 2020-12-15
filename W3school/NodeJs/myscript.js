var http = require('http');
var date = require("./date");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write("The date and time are currently: " + date.myDateTime());
    res.end(`Hello world ${date.myDateTime()} ${2+4}`);
}).listen(8080);