let ip1 = 210, ip2 = 145, ip3 = 97, ans;
if(ip1>ip2){
    if(ip1>ip3){
        ans = ip1;
    }else{
        if(ip2<ip3){
            ans = ip3;
        }else{
            ans = ip3;
        }
    }
    console.log("Maximum is " + ans);

}