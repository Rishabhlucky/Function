let array=[2,3,4,6,4,5,6,7,3];
let temp=0;
console.log("Duplicate value is");
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]===array[j]){
            process.stdout.write(""+array[i]);
        }
    }
}