let x = 10;
let y = 20;

setTimeout(function(){
    x = 30;
    y = 30;
},5000);
console.log("Sum of x and y is " + (x+y));