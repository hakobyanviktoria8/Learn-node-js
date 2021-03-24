// process.on("exit", function () {
//    console.log("exit")
// });
//
// console.log(process.env);

// process.on('exit', code => {
//     setTimeout(() => {
//         console.log('Will not get displayed');
//     }, 0);
//
//     console.log('Exited with status code:', code);
// });
// console.log('Execution Completed');

// process.argv.forEach(function(val, index, array) {
//     console.log(index + ': ' + val);
// });

//Streams
//Writable: Used to write data sequentially   //data @ndunox vercrec u popoxec, grec diski vra
// Readable: Used to read data sequentially  // data poxancox vercrec diski vrayic u tvec => PUSH
// Duplex: Used to both read and write data sequentially   //Readable + Writable
// Transform: Where data can be modified when writing or reading.   // data poxelu hamar

// console.log(Buffer.from("text"));  //<Buffer 74 65 78 74>

const {Readable, Writable, Duplex, Transform} = require("stream");
const fs = require("fs");


//vercnel streamov text input-ic
const readStream = fs.createReadStream("input.txt", {
    highWaterMark: 3 //kkarda 3 hat
});
//grel streamov text output-um
const writeStream = fs.createWriteStream("output1.txt");

readStream.on("data",function (chunk) {
    // writeStream.write(chunk.toString().toUpperCase())
    writeStream.write(chunk)
});

// readStream.pipe(writeStream);

const transform = new Transform({
    transform(chunk, encoding, next){   // callback => next
        this.push(chunk.toString().toUpperCase());
        next();
    }
});

readStream.pipe(transform).pipe(writeStream);


readStream.on("data", function (chunk) {
    console.log(chunk.toString()); //return string
    console.log(chunk)
});

//Readable
new Readable({
    read(size) {
        this.push("")
    }
});

//Writable
new Writable({
    write(chunk, encoding, callback) {

    }
});


class ArrRead extends Readable {
    constructor(arr) {
        super();
        this.arr = arr;
        this.idx = 0;
    }

    _read(size) {
        if (this.idx < this.arr.length) {
            this.push(this.arr[this.idx].toString())
            this.idx++
        } else {
            this.push(null)
        }
    }
}

const customStream = new ArrRead([1, 2, 3, 4]);

customStream.on("data", (item) => {
    console.log(item.toString())
});

customStream.on("end", () => {
    console.log("end")
});


