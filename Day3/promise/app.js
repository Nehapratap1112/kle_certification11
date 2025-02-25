let promise =new promise(function(resolve,reject){
    console.log("wait for th epromise");
    setTimeout(function(){
        let data="promise is resol ed ,data mil gaya";
        let err="promise is rejected .mai paise nahi dunga";
        resolve(data);
        reject(err);
    },2000)
})
promise.then(function(data){
    console.log(data);

}).catch(function(err){
    console.log(err);
})