ip = 987654321;
sum = 0;

while(ip>0){
    sum = sum + ip%10;
    ip = parseInt(ip/10);
}

console.log(sum);