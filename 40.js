//CREATE A FUNCTION WHICH RETURN "BOOM" IF THE ARRAY OF NUMBERS CONSISTS 7 IF NOT RETURN "THERE IS NO 7 IN THE ARRAY"
function Search(arr){
    for(const num of arr){
        if(num.toString().includes("7")){
            return "BOOM";
        }
    }
            return "THERE IS NO 7 IN THE ARRAY";
}
        
    

console.log(Search([1,2,3,4,5,6,9,8,9,10])); 
console.log(Search([1,2,3,4,5,6,7,8,9,10])); 