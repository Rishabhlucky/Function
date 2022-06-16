let number=2;
let a=number;
let remain=0;
let temp=number.toString();
let len=temp.length;
let sum=0;
while(a>0)
{
  remain=a%10;
  sum=sum+Math.pow(remain,len);
  a=Math.floor(a/10);
}
if(sum===number)
{
  console.log(`${number} is armstring number`);
}
else
{
  console.log(`${number} is not armstring number`);
}