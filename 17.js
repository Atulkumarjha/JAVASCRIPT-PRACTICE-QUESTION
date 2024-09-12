//WRITE A FUNCTION TO FIND THE LARGEST NUMBER IN A GIVEN ARRAY
let largestnumber = (arr) => {
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    }, arr[0]);
}

let arr = [10, 50, 20, 30, 40];
console.log(largestnumber(arr));


