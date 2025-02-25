// // synchronous nature'
// console.log("firsst");
// console.log("second");
// console.log("third");

// // asynchrompous nature
// console.log("firsst");
// setTimeout(function(){
//     console.log("second");
// },2000)
// console.log("third");

// console.log("firsst");
// setTimeout(function(){
//     console.log("come after 5 sec");
// },5000)
// setTimeout(function(){
//     console.log("come after 5 sec");
// },0)
// setTimeout(function(){
//     console.log("come after 5 sec");
// },2000)


// set interval
setInterval(function(){
    console.log("it will run after two sec");
},2000)

let count=0
let intervalID=setInterval(function(){
    count++;
    console.log(`my count is : ${count}`);

    if(count === 10){
        clearInterval(intervalID);
        console.log('task completed');
    }
},1000)