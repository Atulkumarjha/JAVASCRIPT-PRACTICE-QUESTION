//WRITE A FUNCTION WHICH RETURNS AN ARRAY OF EVEN NUMBERS FROM A GIVEN ARRAY
let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[];
let even=(arr1,arr2)=>{
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]%2==0){
            arr2.push(arr1[i]);
        }
    }
    return arr2;
}

console.log(even(arr1,arr2));



//version 2

let arr3=[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];

let evenarr=(arr3)=>{
   return  arr3.filter(num=>num%2===0);
}

console.log(evenarr(arr3));
console.log(arr3)