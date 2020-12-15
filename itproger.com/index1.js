// console.log(__dirname);
// console.log(__filename);

// let x=1;
// if (x>0){
//     console.log("x>0")
// }

// for (let i=0; i<10;i++){
//     console.log("i  = " + i)
// }


// setTimeout(()=>{
//     console.log("Hi")
// },1000);


// function foo() {
//     console.log("Hello")
// }
// foo();


const foo = () => {
    console.log("Hello again")
};
// foo();


function callFunc(func) {
    func()
}
callFunc(foo);


const array = require("./array");

// console.log(array([1,2,3,4,5,6,7,8,9,0]));
console.log(array.arrFunc([1,2,3,4,5,6,7,8,9,0]));

console.log(array.all());

console.log("Number is "+array.number);

console.log(array.z);


