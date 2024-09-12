//WRITE A FUNCTION WHICH GENERATES A RANDOM NUMBER BETWEEN GIVEN NUMBER
let random=(num1,num2)=>{
    return Math.floor(Math.random(num1,num2)*10);
}

console.log(random(20,100));
