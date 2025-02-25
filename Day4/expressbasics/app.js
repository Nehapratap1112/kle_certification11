//basic structure code while working on server
const express= require('express');
 const app = express();
// //middleware
// app.use('/home',(req,res)=>{
//      //console.log(req);
//      res.send('<h1> responce from server</h1>');
//      console.log(res);
// })

app.get('/thakgaye',(res,req)=>{

    res.send('<h1> responcde from my route--> thakana mana hai</h1>');
    console.log(res);
})

app.listen(8080,()=>{
    console.log('server is running at port 8080');
})

