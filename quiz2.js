let a=5,b=12;
let number=a**b;
if(b>=0){
    let count=0;
    for(let i=number;i>1;Math.floor(i=i/a)){
        count++;
    }console.log(count);
}
else{
    console.log("Please Enter the Positive Number")
}