function numGCD(x, y){
    if(x==0){
        console.log(y);
    }else if(y==0){
        console.log(x);
    }else if(x==y){
        console.log(x);
    }else if(x>y){
        console.log(numGCD(x-y, y));
    }else{
        console.log(numGCD(x, y-x));
    }
}
let a = 45;
let b = 75;
console.log(numGCD(a, b));