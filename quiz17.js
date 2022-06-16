let array=[3,4,5,6,2,12,15,20];
console.log("Even number is");
for(let i=0;i<array.length;i++)
{
  if (array[i]%2===0)
  {
    process.stdout.write(array[i]+" ")
  }
}