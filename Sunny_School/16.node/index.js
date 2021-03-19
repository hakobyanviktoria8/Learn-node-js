const counter = require("./counter");
const uc = require("upper-case");
const random = require("random");

console.log("index 1");
console.log(__dirname);

console.log(__filename);

console.log(a = b = 2);
console.log(a, b);

console.log(counter.count(["m",1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(counter.sum(1,2222));

//uppercase
console.log(uc.upperCase("Hello Viki"));

console.log(uc);

// random
console.log(random);

console.log(random.float(0, 10));
console.log(random.int(0, 10));
console.log(random.boolean());


console.warn("Sunny School");
console.error("Sunny School");








