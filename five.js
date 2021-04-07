function countDigits(a){
    let count = 0;
    while(a!=0){
        a = Math.floor(a/10);
        ++count;
    }
    return count;
}
let x = 2346;
console.log(countDigits(x));