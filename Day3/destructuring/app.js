// let fruits=["apple","mango","orange","pineapple"];

// // let first=fruits[0];
// // let second=fruits[1];

// // console.log(first);
// // console.log(second);

// let[first,second,third,fourth]=fruits;
// console.log(first);
// console.log(second);

//object destructuring

let object={
    name:"neha",
    age:21,
    favcolor:"black",
    gender:"female"
}
// let{first,second,third,fourth}=object;
let {name:nam,age,favcolor,gender}=object;
// console.log(name);
console.log(nam)