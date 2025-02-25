//way 1
// var giveMeAJoke = require('give-me-a-joke');

// // To get a random dad joke
// giveMeAJoke.getRandomDadJoke (function(joke) {
//      console.log(joke);
// });

//way 2
var figlet = require("figlet");
const colors=require("colors");
figlet(" Neha !!", function (err, data) {
  if (err) {
   console.log("Something went wrong...");
    console.dir(err);
     return;
  }
 console.log(data.rainbow);
 });



