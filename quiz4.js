function binary(num){
    for(num ;num>0;num =num/2){
        if(num%2==0){
            console.log("0")
        }else{
            console.log("1")
            num=num-1
        }
    }
}
binary(2)