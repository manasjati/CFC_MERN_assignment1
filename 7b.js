let n = 5;
let a = 0;
while(a<n){
    let b = 0;
    while (b<=a){
        process.stdout.write(( b + 1 ) + " ");
        b++;
    }
    console.log("\n");
    a++;
}