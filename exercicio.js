a = 3;
b = 0;
c = 3;

while(c<a){
    a=a-1;
    b=b+1;
    c=c+b; 
}

console.log(a,b,c)

do{
    a=a-1;
    b=b+1;
    c=c+b;
} while(c<a)

console.log(a,b,c)


m = 3
n = 3

for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
        console.log(i,j)
    }
    console.log(i,j)
}