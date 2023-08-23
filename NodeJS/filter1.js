const age = [11, 14, 13, 12, 45, 33, 57, 77, 89, 15, 45, 90, 78, 67, 55, 12, 11, 2, 3, 44, 23, 56];

// traditional way to filter data
let result = [];
for(let x of age){
    if(x >= 18){
        result.push(x);
    }
}

console.log(result);