// const func = require("./function");
// console.log("Free Code Camp");
// console.log(func.sum(1,29));
// console.log("hi");

//ebent emitter

const EventEmitter = require("events");
const evem = new  EventEmitter();

// evem.on("sum",(a,v)=>{
//     console.log("Sum is ", a+v)
// });
// evem.emit("sum",1,2);
//
// //multiply
// evem.on("mult",(a,b)=>console.log("Multi " + a*b));
// evem.emit("mult",1,2);

//class
class Person extends EventEmitter{
    constructor(fname,lname){
        super();
        this._fname = fname;
        this._lname = lname
    }

    get name(){
        return this._fname + this._lname
    }
}
const petty = new Person("Petty", " See");
const pett = new Person("Pett", " Seo");
// console.log(pett);
// console.log(pett.name);

petty.on("name",()=>{
    console.log("my name is "+ petty.name) //call name method
});
petty.emit("name");

//can make a lot of obj
pett.on("name",()=>{
    console.log("my name is "+ pett.name) //call name method
});
pett.emit("name");

//https://www.youtube.com/watch?v=RLtyhwFtXQA&feature=youtu.be


