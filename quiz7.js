let number=2415;
let remain =0;
while(number>0){
    remain=number%10+remain;
    number=Math.floor(number/10);
}
console.log(remain);