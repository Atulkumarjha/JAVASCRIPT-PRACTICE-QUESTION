//WRITE A FUNCTION TO DOUBLE EACH NUMBER OF A GIVEN ARRAY
let arr=[10,20,30,40,50];
let double=(arr)=>{
    return arr.map((num)=>{
        return num*2;
    })
}


console.log(double(arr));
