//CREATE A JAVASCRIPT FUNCTION THAT GENERATES 2D ARRAY WITH SPECIFIED NUMBER OF ROWS AND COLUMNS EACH ELEMENT IN ARRA IS THE SUM OF ITS ROW AND COLUMN VALUE
function create(rows,columns){
    let arr=[];

    for(let  i=0;i<rows;i++){
        arr.push(new Array(columns));
        for(let j=0;j<columns;j++){
            arr[i][j]=i+j;
        }
    }
    return arr;

}

function display(arr){
    for(let i=0;i<arr.length;i++){
            console.log(arr[i].join(" "));
    }
}


function reverseDisplay(arr){
    for(let i=arr.length-1;i>=0;i--){
            console.log(arr[i].reverse().join(" "));
    }
}




const rows=3;
const columns=4;


const multiArray = create(rows,columns);

console.log("multiArray");
display(multiArray);

console.log("reverseMultiArray");
reverseDisplay(multiArray);
