//WRITE A FUNCTION TO DETERMINE IF THE NUMBER IS EVENISH OR ODDISH ((ODDISH=IF SUM OF ALL ITS DIGITS IS ODD)(EVENISH=IF SUM OF ALL ITS DIGITS IS EVEN))
function determineNumber(num){
    let sum=0;
    numStr = num.toString();
    for(let i=0;i<numStr.length;i++){
        sum += numStr[i];
    }if(sum%2==0){
        console.log("Evenish");
    }else{
        console.log("Oddish");
    }

}


num=16212;

console.log(determineNumber(num));