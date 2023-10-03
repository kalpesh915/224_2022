const age = [11, 14, 13, 15, 45, 42, 40, 35, 33, 32, 29, 56, 54, 52, 21, 20, 19, 18];
let result = [];
for(let x of age){
    if(x >= 18){
        // result.push(x);
        result.pop(x);
    }
}

console.log(result);