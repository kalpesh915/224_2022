/// for in loop used when you want to access values from object of java script

const student = {
    fname : "Nandini",
    lname : "Parekh",
    city : "Rajkot",
    state : "Gujarat"
}

for(let x in student){
    console.log(x+" is "+student[x]);
}