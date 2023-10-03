let x = 10;

let myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(100);
    },5000);

});

myPromise.then((data)=>{
    console.log(data);

},(error)=>{
    console.log("Error is " + error);
});