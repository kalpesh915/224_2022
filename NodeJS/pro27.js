ip = 915;
count = 0;

while(ip > 0){
    count++;
    ip = parseInt(ip / 10);
}

console.log(count);