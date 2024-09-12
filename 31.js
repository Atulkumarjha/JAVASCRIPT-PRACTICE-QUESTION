//WRITE A REGULAR EXPRESSION TO VALIDATE AN EMAIL 
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validate(email){
    return emailRegex.test(email);
}


const email = "xyz@gmail.com";

console.log(validate(email)); 