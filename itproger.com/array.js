const arrFunc =(arr) => {
    return "Array has " + arr.length + " element!"
};
// console.log(arrFunc([1,2,3,4,5,6,7,8,9,0]));


// module.exports = arrFunc;
// module.exports.arrFunc = arrFunc;

const all=()=>{
  return "This is func ALL"
};

const number = 1234567890;

const z= 2;
const mult = (a,b) =>{
    return a*b
};
module.exports={
    arrFunc:arrFunc,
    all:all,
    number:number,
    z:z,
    mult: mult,
};