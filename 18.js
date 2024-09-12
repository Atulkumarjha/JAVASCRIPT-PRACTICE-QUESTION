//REMOVE ALL OCCURRENCES OF A SPECIFIC ELEMENT FROM AN ARRAY
let specific = (arr,target)=>{
    return arr.filter(item=>item!==target);
}

let arr=[10,10,10,20,30,40,50];
let target=10;
console.log(specific(arr,target));


