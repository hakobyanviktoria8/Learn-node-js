const fs = require("fs");
// console.log(fs);

// const file = fs.readFileSync("text.txt", "utf8");
// console.log(file);
// console.log("test");
//
// const file1 = fs.readFile("text.txt", "utf8",function (err,data) {
//     console.log(data)
// });
// console.log(file1);
// console.log("test1");

fs.writeFileSync("new_text.txt","Make new text file! \nHello");

fs.writeFile("new_text1.txt","Make new text file!",
    function (err,data) {
        console.log(data)
    });

