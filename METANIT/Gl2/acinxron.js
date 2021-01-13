// function displaySync(data){
//     console.log(data);
// }
//
// console.log("Начало работы программы");
//
// displaySync("Обработка данных...");
//
// console.log("Завершение работы программы");


// function display(data, callback){
//     var randInt = Math.random() * (10 - 1) + 1;
//     var err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;
//     setTimeout(function(){
//         callback(err, data);
//     }, 0);
// }
// console.log("Начало работы проs граммы");
//
// display("Обработка данных...", function (err, data){
//     if(err) throw err;
//     console.log(data);
// });
//
// console.log("Завершение работы программы");


function displaySync(callback){
    callback();
}

console.log("1.Начало работы программы");

setTimeout(function(){

    console.log("5.timeout 500");
}, 500);

setTimeout(function(){

    console.log("4.timeout 100");
}, 100);

displaySync(function(){console.log("2.without timeout")});
console.log("3.Завершение работы программы");





