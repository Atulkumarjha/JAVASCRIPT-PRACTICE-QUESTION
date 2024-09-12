//IMPLEMENT A PRIVATE VARIABLE USING CLOSURES
function privateVariable(){
    return function(){
        let privateVar=0;
    }
}

function valuereturn(){
    return privateVar+1;
}



console.log(valuereturn());
