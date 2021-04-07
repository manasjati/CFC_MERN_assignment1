const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  }); 
  readline.question('Enter number of credits: ', credits => {
      if(credits>=7500){
          console.log("Tera leader");
      }else if(7500>credits>=6000){
          console.log("Gega leader");
      }else if(6000>credits>=4500){
          console.log("Mega leader");
      }else{
          console.log("Rising Star");
      }    
    readline.close();
  });