let student = {
    roll : 123,
    fname : "Demo",
    lname : "Demo Text",
    city :  "Rajkot",
    phone : "8934433489"
};

// console.log(student);

for(let x in student){
    //console.log(x)
    console.log(x+" is "+student[x]);
}