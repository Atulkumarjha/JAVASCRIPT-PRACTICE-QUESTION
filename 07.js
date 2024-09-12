//FUNCTION TO CHECK IF THE GIVEN YEAR IS LEAP YEAR OR NOT
function leapyear(year){
    if((year%4==0 && year%100!=0) || year%400==0){
        return "leapyear";
    }else{
        return "not a leap year";
    }
}

    console.log(leapyear(2020));
    
