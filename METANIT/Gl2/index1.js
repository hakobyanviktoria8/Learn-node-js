// const http = require("http");
// http.createServer(function(request,response){
//
//     response.end("Hello NodeJS!");
//
// }).listen(3000, "127.0.0.1",function(){
//     console.log("Сервер начал прослушивание запросов на порту 3000");
// });

//
// const os = require("os");
// // console.log(os);
// const userName = os.userInfo().username;
//
//
//
// const  greeting = require('./greeting');
//
// console.log(greeting);
// console.log(greeting.date);
// console.log(greeting.getMessage("Lol"));
//
//
// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));
// console.log("_____________________________________________");



const User = require("./user");

const viki= new User("Viki",31);
console.log(viki.displayInfo);

viki.displayInfo();
viki.sayHi();