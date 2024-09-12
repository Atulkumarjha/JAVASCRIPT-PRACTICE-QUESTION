//WRITE A FUNCTION THAT DISLAY CURRENT DATE AND TIME
let getDateAndTime=()=>{
let currentDate = new Date();
return currentDate.toLocaleString();
}

console.log(getDateAndTime());
