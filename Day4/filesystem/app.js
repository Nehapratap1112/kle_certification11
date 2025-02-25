// way 1
//writting the file
 let fs = require('fs');
// // performing crud operarion
 let data="hii today's weather is cool.";
// // task 1 create a file and write data into it
// fs.writeFile('demo.txt',data,{
//     encoding:'utf-8'
// },(err)=>{
//     if(err)throw err;
//     console.log("file is created successfully");
// })

//way 2

// fs.writeFileSync('demo.txt',data,
//     (err)=>{
//          if(err)throw err;
//         console.log("file is created successfully");
// });
    

// //reading the file

// let fileread=fs.readFileSync('demo.txt');
// console.log(fileread.toString());

// //updating the data in file
// fs.appendFileSync('demo.txt','\n i hope the weather will be same for next 3 days');

// //deleting the file
// fs.unlinkSync('demo.txt');

//writting file
fs.writeFileSync('dem.txt',data,
    (err)=>{
        if(err)throw err;
           console.log("file is created successfully");
    });

//reading the file
let filteredata=fs.readFileSync('dem.txt');
console.log(filteredata.toString());

//updating the file
fs.appendFileSync('dem.txt','\n hello everyone ');

//truncate
let del=fs.truncateSync('dem.txt');

