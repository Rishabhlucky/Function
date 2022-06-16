let array=[1,2,3,4,5,7,3,5];
let lastdig=0;
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]<array[j]){
            lastdig=array[i];
            array[i]=array[j];
            array[j]=lastdig;
        }
    }
}console.log(array[0]);