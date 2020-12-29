// const events = require("events");
// const myEmit = new events.EventEmitter();
//
// // console.log(events);
//
// myEmit.on("evemit",(text)=>{
//     console.log(text)
// });
// myEmit.emit("evemit","This is event emitter!");


//USE UTIL to inherits obj

const ev = require("events");
const util = require("util");

const Car = function(model) {
    this.model = model;
};
// console.log(new Car("BMW"));
util.inherits(Car, ev.EventEmitter);
// console.log(new Car("LXW"));

const car = new Car("Lexus");
car.on("speed",(n)=>{
    console.log("Car model is "+ car.model+". Spped is " + n)
});
car.emit("speed",233);
console.log(car);


