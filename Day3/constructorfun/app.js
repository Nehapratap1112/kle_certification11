// constructor
// function details(){
//     this.name="nehA";
//     this.age=21;
//     this.address="nipani"
// }
// let user = new details();

// //console.log(user);
function details(nam,umer,pata){
    this.name=nam;
    this.age=umer;
    this.address=pata;
    this.description=function(){
        return(`my name is ${this.name} , my age  is ${this.age}`);

    }
}
let user=new details("neha",21,"nipani");
let user1=new details("anki",21,"adi");

console.log(user);
console.log(user.description());
console.log(user1);
console.log(user1.description())
