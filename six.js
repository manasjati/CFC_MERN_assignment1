function reverseNum(a){
    let count = 0;
    while(a!=0){
        digit = a%10;
        count = count*10 + digit;
        a = Math.floor(a/10);
    }
    return count;
}
let x = 1234;
console.log(reverseNum(x));