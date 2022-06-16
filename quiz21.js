let count=0;
function vowel(val)
{
  val=val.toUpperCase();
 
  for(let i=0;i<val.length;i++)
  {
   if(val[i]==="A"||val[i]==="E"||val[i]==="I"||val[i]==="O"||val[i]==="U")
   {
     count++;
   }
  }
  
}

const vowels="rishabh";
vowel(vowels);
console.log(count);