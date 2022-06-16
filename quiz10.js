let number =5;
let n1=0,n2=1,n3;
process.stdout.write(n1+""+n2+"");
for(let i=2;i<number;i++){
    n3=n1+n2;
    process.stdout.write(n3+"");
    n1=n2;
    n2=n3;
}