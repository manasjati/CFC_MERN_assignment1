let n = 5;
let a = 0;
let a_mirr = 0;
while(a_mirr<2*n-1){
    let b = 0;
    let b_mirr = 0;
    while (b_mirr<2*n-1){
        if(b<=n - a - 1){
            process.stdout.write("* ");
        }else{
            process.stdout.write("  ");
        }
        if(b_mirr<n-1){
            b+=1;
        }else{
            b-=1;
        }       
        b_mirr += 1;
    }
    process.stdout.write("\n");
    if(a_mirr<n-1){
        a+=1;
    }else{
        a-=1;
    }
    a_mirr+=1;
}