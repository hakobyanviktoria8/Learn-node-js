// const events = require("events");
// console.log(events);
// console.log("_________________________________________");
// console.log(new events.EventEmitter());

// const eventEmitter = new events.EventEmitter();
//
// eventEmitter.on("sam", (text)=>{
//     console.log(text)
// });
// eventEmitter.emit("sam","Hello this is text");


// //UTIL
const events= require("events");
const util =  require('util');
// //
// console.log(util);
// //
const Cars= function(model){
    this.model = model;
};
// //
util.inherits(Cars,events.EventEmitter);
//
const bmw1 = new Cars("BMW1");
const bmw2 = new Cars("BMW2");
const bmw3 = new Cars("BMW3");
// console.log(bmw);

const cars = [bmw1, bmw2,bmw3];

cars.forEach(function (car) {
    car.on("speed", function(text){
        console.log(car.model+ text)
    });
});
bmw1.emit("speed"," 123km");
bmw2.emit("speed"," 13km");
bmw3.emit("speed"," 23km");





