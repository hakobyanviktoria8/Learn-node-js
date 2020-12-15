const fs= require("fs");

//delete file
// fs.unlink("new_text.txt", function () {
//     console.log("File delete!")
// });


//make papka
// fs.mkdirSync("Lesson7_newPapka");

// fs.mkdirSync("Lesson7_new1");

//remove papka

// fs.rmdirSync("Lesson7_new1");





//ASYNC
// fs.mkdir("Lesson-7.1", function () {
//     fs.writeFile("./Lesson-7.1/Lesson 7.1.1.txt", "Hello 7.1", function () {
//         console.log("Hello 7.1.1")
//     })
// });


// delete  papka whit flie

fs.unlink("./Lesson-7.1/Lesson 7.1.1.txt",function () {
   fs.rmdir("Lesson-7.1",function () {
       console.log("File & dir delete")
   }) 
});
