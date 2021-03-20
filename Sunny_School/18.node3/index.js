// const promis = new Promise((resolve, reject) =>{
//     resolve("done");
//     reject(new Error("Error")) //ignor
// });
//
// promis
//     .then(data=> console.log(data))
//     .catch(err => console.log(err.message));


// new Promise(((resolve, reject) => {
//     setTimeout(()=>resolve("OK"),1000)
// }))
//     .then(data=> console.log(data))
//     .catch(err=> console.log(err))
//     .finally(()=>console.log("End"));

// new Promise(((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")), 1000)
// }))
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message))
//     .finally(()=>console.log("End"));


//changing promis
//
// new Promise((resolve, reject) => {
//     // return setTimeout(() => resolve(10), 0)
//     return setTimeout(() => reject(new Error("Wou")), 0)
// })
//     .then(data => {
//         console.log(data);
//         return data / 0
//     })
//     .then((data)=> console.log(data))
//     .catch(err => console.log(err.message));

// const fetch = require('node-fetch');
//
// fetch('https://api.github.com/users/viki')
//     .then(response => response.json())
//     .then(user => console.log(user));

//
// const fs = require("fs/promises");
//
// fs.readFile("./input.txt", "utf8")
//     .then(data => {
//         console.log(data);
//         return fs.writeFile("output.txt", data.split(" ").join("_"));
//     })
//     .then(data => {
//         return fs.writeFile("output.txt", "DONE")   //change text =>DONE
//     })
//     .then(data => {
//         return fs.writeFile("output1.txt", (fs.readFile("./input.txt","utf8")).toString())
//     })
//     .catch(err => console.log(err.message));

//
//
// async function f() {
//     let promise =  await new Promise((resolve, reject) => {
//         setTimeout(()=>resolve("done"),0)
//     });
//     console.log(promise);
// }
// f();


//the same f === f1
// async function f() {
//     return 1
// }
//
// function f1() {
//     return new Promise(((resolve, reject) => {
//         resolve(1)
//     }))
// }


//promise state pending, fulfilled, rejected
//
// const fetch = require('node-fetch');
//
// async function fAsinc(){
//     let response = await fetch('https://api.github.com/users/viki');
//     let user = await response.json();
//     console.log(user);
// }
// fAsinc()
//     .then(data=> console.log(data))
//     .catch(err=>console.log(err.message));

// async function f() {
//     await Promise.reject(new Error("Whoops!"));
// }
// f().catch(err=> console.log(err.message));


// Promise.race() kashxati 1in qich jamanakov@

// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),   //1
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(data => console.log(data));

// Promise.all()
// Promise.reject()
// Promise.resolve()

// Promise.any() kashxati 1 drakan@
// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 5000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
// ]).then(data => console.log(data));









