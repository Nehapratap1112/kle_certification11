// let person={
//     name:'neha',
//     age:21,
//     favcolor:'black'
// }
// // console.log(person.name);
// // //console.log(person[1]);
// // console.log(person['age']);

// //changing the properties in object
// //update
// person.name='neha pratap';
// console.log(person);

// // adding the new property
// person.gender="female";
// console.log(person);

// //deleting a property

// delete person.favcolor;
// console.log(person);
let person={
    name:'neha',
    age:21,
    favcolor:'black',
    fun: function(){
        return(`my name is ${this.name} and my age is ${this.age}`);
    },
    newobj:{
        gender :"female",
        address:"sai nagar nipani"
    }


}
//console.log(person.print());//error
// console.log(person.fun());//hello i am function inside the object
console.log(person.newobj.address);