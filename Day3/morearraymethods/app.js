//for-each method
let array=[1,2,3,4,5];
// array.forEach(function(item,index){
//     console.log(my index is ${index} and  value is ${item*item});
// })

//map()
// let newarr=array.map(function(item,index){
//     console.log([item*item]);
// })

//filter method
let newar= array.filter(function(item,index){
    if(item >=1){
        console.log(item);
        return true;
    }
    return false;
})
console.log(newar);