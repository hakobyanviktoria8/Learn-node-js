// var foo = {
//     bar: 123,
//     bas: {
//         bas1: 'some string',
//         bas2: 345
//     }
// };
// console.log(foo);
// console.log(foo.bas.bas1="1");


//
// var foo = {
//     bar: 123,
//     bas: [{
//         qux: 1,
//         qux1: [11111]
//     },
//     {
//         qux: 2
//     },
//     {
//         qux: 3
//     }]
// };
// console.log(foo.bar); // 123
// console.log(foo.bas[0].qux); // 1
// console.log(foo.bas[0]); // 1
// console.log(foo.bas[0].qux1[0]); // 1
// console.log(foo.bas[2].qux); // 2



// function foo() { return 123; }
// console.log(foo); // 123
// function bar() { }
// console.log(bar()); // undefined

// var foo = 123;
// if (true) {
//     let foo = 456;
// }
// console.log(foo); // 456
// function fook() { return 123; }
// fook;


// var foo = 123;
// if (true) {
//     console.log(foo);
//     (function () { // create a new scope
//         var foo = 456;
//         console.log(foo);
//     })();
// }
// console.log(foo); // 123;


// setTimeout(function () {
//     console.log('2000 milliseconds have passed since this demo started');
// }, 0);
// console.log("hi");

// console.log(4);
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
// });
// setTimeout(function () {
//     console.log('2000 milliseconds have passed since this demo started');
// }, 0);
// promise1.then(() => {
//     console.log(3);
// });
// console.log(4);


// function outerFunction(arg) {
//     // var variableInOuterFunction = arg;
//     function bar() {
//         console.log(arg+1); // Access a variable from the outer scope
//     }
//     // Call the local function to demonstrate that it has access to arg
//     bar;
// }
// outerFunction('hello closure!');

//
// function outerFunction(arg) {
//     var variableInOuterFunction = arg;
//     return function () {
//         console.log(variableInOuterFunction);
//     }
// }
// outerFunction('hello closure!')();
// console.log("hi");
// Note the outerFunction has returned
// innerFunction(); // logs hello closure!

// function f(a) {
//     return function (){
//         console.log(a)
//     }
// }
// f("a")();



//
// function longRunningOperation(callback) {
//     // simulate a 3 second operation
//     setTimeout(callback, 3000);
// }
// function userClicked() {
//     console.log('starting a long operation');
//     longRunningOperation(function () {
//         console.log('ending a long operation in 3min');
//     });
// }
// // simulate a user action
// userClicked();







function longRunningOperation(callback) {
    // simulate a 3 second operation
    setTimeout(callback, 3000);
}
function webRequest(request) {
    console.log('starting a long operation for request:', request.id);
    longRunningOperation(function () {
        console.log('ending a long operation for request:', request.id);
    });
}
// simulate a web request
webRequest({ id: 1 });
// simulate a second web request
webRequest({ id: 2 });















