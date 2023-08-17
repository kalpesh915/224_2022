/*
    use to declare a varible

    var     =   global
    let     =   scope
    const   =   scope / unchangable
*/ 


let x = 10;
console.log("x is "+x);

{
    let x = 100;
    console.log("in scope x is "+x);
}

console.log("after scope x is "+x);