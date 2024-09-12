//WRITE A RECURSIVE FUNCTION TO FIND THE NTH NUMBER OF A FIBONACCI SERIES 
function fibanocci(n){
     if(n<=1){
        return n;
     }else{
        return fibanocci(n-1)+fibanocci(n-2);
     }
}


console.log(fibonacci(5));
